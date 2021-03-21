import Home from "./Pages/Home";
import Login from "./Pages/Login";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AboutUs from "./Pages/AboutUs";
import CreateMeme from "./Pages/CreateMeme";
import MemeGenerator from "./Pages/MemeGenerator";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/about-us" exact>
          <AboutUs />
        </Route>
        <Route path="/meme-generator" exact>
          <MemeGenerator />
        </Route>
        <Route path="/create-meme" exact>
          <CreateMeme />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
