export const getAuthErrorMsg = (code) => {
    switch (code) {
        case "auth/wrong-password":
            return "Your Password is Wrong";
        case "auth/invalid-email":
            return "Your Email is invalid";
        case "auth/internal-error":
            return "Login Failed Please Try Again"
        default:
            return "Login Failed Please Try Again"
    }
}