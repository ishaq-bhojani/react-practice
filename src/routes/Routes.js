import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
} from "react-router-dom";
import AuthHandler from "../pages/AuthHandler/AuthHandler";
import AuthContext from "../Context/AuthContect";

const Routes = () => {
    const [toggle, setToogle] = useState(false);

    useEffect(() => {
        const isStorageLoogedIn = localStorage.getItem("loggedIn") === "1";
        setToogle(isStorageLoogedIn)
    }, []);

    const onLogout = () => {
        localStorage.setItem("loggedIn", "0")
        setToogle(false)
    }

    return (
        <Router>
            <AuthContext.Provider value={{
                isLoggedIn: toggle,
                onLogout: onLogout,
                setToogle: setToogle,
            }}>
                <AuthHandler />
            </AuthContext.Provider>
        </Router>
    );
}
export default Routes;