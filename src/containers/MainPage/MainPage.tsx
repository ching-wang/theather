import React from "react";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import ShowGrid from "../ShowGrid/ShowGrid";
import ScrollContainer from "../../components/ScrollContainer/ScrollContainer";


export const MainPage = () => {
    return(
        <ErrorBoundary>
            <ScrollContainer>
                <ShowGrid />
            </ScrollContainer>
        </ErrorBoundary>
    )
};

export default MainPage;
