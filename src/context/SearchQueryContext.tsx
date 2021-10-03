import React, { useContext, useReducer } from "react";
import { useHistory, useLocation } from "react-router-dom";

type SearchAction = { query: string };
type Dispatch = (action: SearchAction) => void;
type SearchState = { query: string };
type SearchProviderProps = { children: React.ReactNode };

const SearchQueryContext = React.createContext<
  { state: SearchState; dispatch: Dispatch } | undefined
>(undefined);

const searchReducer = (
  state: SearchState,
  action: SearchAction
): SearchState => {
  return { ...state, query: action.query };
};

export const SearchQueryProvider = ({ children }: SearchProviderProps) => {
  const urlQuery = new URLSearchParams(useLocation().search);
  const [state, dispatch] = useReducer(searchReducer, {
    query: urlQuery.get("q") || "",
  });
  const value = { state, dispatch };
  return (
    <SearchQueryContext.Provider value={value}>
      {children}
    </SearchQueryContext.Provider>
  );
};

export const useSearchQuery = () => {
  const history = useHistory();
  const context = useContext(SearchQueryContext);
  if (context === undefined) {
    throw new Error("useSearchQuery called outside of SearchQueryProvider");
  }
  const dispatchSearch = (action: SearchAction) => {
    history.push(`/?q=${action.query}`)
    return context.dispatch(action);
  };
  return { searchState: context.state, dispatchSearch };
};
