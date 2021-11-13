import React, { useContext } from 'react'
import {
    Switch,
    Route
} from "react-router-dom";
import Nav from '../../components/Nav/Nav'
import Home from '../Home/Home'
import About from '../About/About'
import Signup from '../Signup/Signup'
import Login from '../Login/Login'
import AuthContext from '../../Context/AuthContect';

const NotLog = () => {
    return (
        <Switch>
            <Route path="/signup">
                <Signup />
            </Route>
            <Route path="/">
                <Login />
            </Route>
        </Switch>
    )
}

const Logged = () => {
    return (
        <Switch>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    )
}

const AuthHandler = () => {

    const authuseCtx = useContext(AuthContext);
    return authuseCtx.isLoggedIn ? <div><Nav /> <Logged /></div> : <NotLog />
}

export default AuthHandler;

