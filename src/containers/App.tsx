import React from "react";
import MainPage from "./MainPage/MainPage";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./Header/Header";
import ShowDetail from "../components/ShowDetail/ShowDetail";

function App() {
  return (
    <div className="App">
      <Header />
        <Switch>
          <Route path="/show/:showId">
              <ShowDetail />
          </Route>
          <Route path="/">
            <MainPage />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
