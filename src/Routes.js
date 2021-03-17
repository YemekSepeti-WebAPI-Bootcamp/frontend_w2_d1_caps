
import App from "./App";
import Login from "./Login";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const Routes = () => {
    return <Router>
        <Switch>
            <Route path="/" exact>
                <App />
            </Route>
            <Route path="/login" exact>
                <Login />
            </Route>
        </Switch>
    </Router>
}

export default Routes