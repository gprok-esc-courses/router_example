import { useEffect } from "react"
import AuthService from '../services/auth'

const Logout = () => {

    useEffect(() => {
        AuthService.logout()
    }) 

    return (
        <>
            <h2>You have been logged out</h2>
        </>
    )
}

export default Logout;