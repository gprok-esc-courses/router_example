

class AuthService {
    async login(username, password) {
        const response = await fetch('http://127.0.0.1:5000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://127.0.0.1:5000'
            },
            body: JSON.stringify({ username, password }),
        })

        if(!response.ok) {
            const error = await response.json()
            throw new Error("Login failed. Error: " + error.message)
        }

        const data = await response.json()

        console.log(data)
        if(data.token) {
            localStorage.setItem("user", JSON.stringify(data))
        }

        return data;
    }

    getToken() {
        const user = JSON.parse(localStorage.getItem("user"))
        if(user && user.token) {
            // return { Authorization: `Bearer ${user.token}` }
            return user.token
        }
        else {
            return null
        }
    }

    logout() {
        localStorage.removeItem("user")
    }
}

export default new AuthService();