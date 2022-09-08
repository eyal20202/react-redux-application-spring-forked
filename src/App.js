import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import { Navbar } from "./components/Navbar";
// import SinglePostPage from "./pages/SinglePostPage";
import CatsPage from "./pages/CatsPage";
import DogsPage from "./pages/DogsPage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        {/* <Route exact path="/" component={DashboardPage} /> */}
        {/* <Route exact path="/posts" component={PostsPage} /> */}
        <Route exact path="/dogs" component={DogsPage} />
        <Route exact path="/cats" component={CatsPage} />
        {/* <Route exact path="/dogs/:id" component={SinglePostPage} /> */}
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
