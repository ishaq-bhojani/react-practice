import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Nav from "../components/Nav/Nav";

const Switcher = () => {
    return (<Switch>
        <Route path="/about">
            <About/>
        </Route>
        <Route path="/">
            <Home/>
        </Route>
    </Switch>)
}

const Routes = () => {
    return (
        <Router>
            <Nav/>
            <Switcher/>
        </Router>
    );
}
export default Routes;