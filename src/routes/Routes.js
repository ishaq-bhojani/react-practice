import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
// import Nav from "../components/Nav/Nav";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import NotFound from "../pages/NotFound/NotFound";
import { useEffect, useState } from "react";
import { auth } from "../config/firebase";
import Loading from "../pages/Loading/Loading";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import AuthRoute from "../components/AuthRoute/AuthRoute";
import TopBar from "../components/TopBar/TopBar";
const routes = [
    {
        path: "/login",
        type: "auth",
        Component: Login
    },
    {
        path: "/signup",
        type: "signup",
        Component: Signup
    },
    {
        path: "/",
        type: "private",
        Component: Home
    },
    {
        path: "/about",
        type: "private",
        Component: About
    },
    {
        path: "*",
        type: "notfound",
        Component: NotFound
    }
]

const Switcher = (props) => {
    return (
        <Switch>
            {
                routes.map(({ type, path, Component }, key) => {
                    let routeProps = { ...props, path, exact: true, key: path + key }
                    if (type === "private") {
                        return (
                            <PrivateRoute {...routeProps}>
                                <Component {...props} />
                            </PrivateRoute>
                        )
                    } else if (type === "auth") {
                        return (
                            <AuthRoute {...routeProps}>
                                <Component {...props} />
                            </AuthRoute>
                        )
                    }
                    return (
                        <Route {...routeProps}>
                            <Component {...props} />
                        </Route>
                    )
                })
            }
        </Switch>)
}

const Routes = () => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user)
            setLoading(false);
        })
        return () => unsubscribe()
    }, []);

    if (loading) {
        return <Loading />
    }
    const authProps = { user }
    return (
        <Router>
            <TopBar {...authProps}>
            <Switcher {...authProps} />
            </TopBar>
        </Router>
    );
}
export default Routes;