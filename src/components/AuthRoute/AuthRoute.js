import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export default function PrivateRoute({ children, user, ...rest }) {
    return (
            <Route {...rest}>
                {user ? <Redirect to="/" exact /> : children}
            </Route>
    )
}