import { useState } from "react"
import AuthService from "../services/auth"

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await AuthService.login(username, password)
            // window.location.reload()
        }
        catch(error) {
            console.error(error.message || 'Login failed')
        }
    }

    return (
        <>
            <form onSubmit={handleLogin}>
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default Login;