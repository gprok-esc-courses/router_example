import { useEffect, useState } from "react";
import AuthService from '../services/auth'


const Info2 = () => {

    const [result, setResult] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            const token = AuthService.getToken()
            if(token == null) {
                setResult('ERROR')
                return
            }
            const response = await fetch('http://127.0.0.1:5000/info2', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': 'http://127.0.0.1:5000', 
                    'x-access-token': token
                },
            })

            const data = await response.json()
            
            if(data.result == 'error') {
                setResult('ERROR')
            }
            else {
                setResult('SUCCESS')
            }
        }

        fetchData()
    }) 
  

    return (
        <>
            <h2>Info 2</h2>
            <h3>{result}</h3>
        </>
    )
}

export default Info2;