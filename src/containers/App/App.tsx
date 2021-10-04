import React from "react";
import MainPage from "../MainPage/MainPage";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "../Header/Header";
import ShowDetail from "../../components/ShowDetail/ShowDetail";
import { Container } from "./app.styles";

function App() {
  return (
    <Container>
      <Header />
      <Switch>
        <Route path="/show/:showId">
          <ShowDetail />
        </Route>
        <Route path="/">
          <MainPage />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
