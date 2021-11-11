import { createContext } from 'react'

const AuthContext = createContext({
    isLoggedIn: false,
    onLogin: () => { },
    onLogout: () => { },
});

export default AuthContext

