import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export default function PrivateRoute({ children, user, ...rest }) {
    return (
            <Route {...rest}>
                {!!user ? children : (
                    <Redirect to="/login" />
                )}
            </Route>
    )
}