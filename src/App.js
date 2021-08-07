import React, { lazy } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Loading from "components/loading";
const Home = lazy(() => import("pages/home"));
const Movies = lazy(() => import("pages/movie"));
const Anagram = lazy(() => import("pages/anagram"));

function App() {
  return (
    <React.Suspense fallback={<Loading />}>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movies" exact component={Movies} />
          <Route path="/anagram" exact component={Anagram} />
        </Switch>
      </Router>
    </React.Suspense>
  );
}

export default App;
