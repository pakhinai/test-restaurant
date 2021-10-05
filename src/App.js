import React, { useState } from "react";
import Header from "./Components/Header/Header";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./Components/pages/Home";
import NongStore from "./Components/pages/Nong/NongStore";
import CovidStore from "./Components/pages/Covid/CovidStore";
import KhunStore from "./Components/pages/Khun/KhunStore";
import TaeStore from "./Components/pages/Tae/TaeStore";
import HorStore from "./Components/pages/Hor/HorStore";
import AoiStore from "./Components/pages/Aoi/AoiStore";
import Summary from "./Components/pages/Summary/Summary";
import Search from "./Components/pages/Search/Search";

export default function App() {
  const [summary, setSummary] = useState([]);
  const [search, setSearch] = useState([]);

  return (
    <div>
      <BrowserRouter>
        <Header setSearch={setSearch} search={search} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/search">
            <Search search={search} />
          </Route>

          <Route exact path="/nong">
            <NongStore setSummary={setSummary} summary={summary} />
          </Route>

          <Route exact path="/covid">
            <CovidStore summary={summary} setSummary={setSummary} />
          </Route>

          <Route exact path="/khun">
            <KhunStore setSummary={setSummary} summary={summary} />
          </Route>

          <Route exact path="/tae">
            <TaeStore setSummary={setSummary} summary={summary} />
          </Route>

          <Route exact path="/hor">
            <HorStore setSummary={setSummary} summary={summary} />
          </Route>

          <Route exact path="/aoi">
            <AoiStore setSummary={setSummary} summary={summary} />
          </Route>

          <Route exact path="/summary">
            <Summary summary={summary} />
          </Route>

          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
