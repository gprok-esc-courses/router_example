import { useState } from "react";


function Joke({ callback }) {
    const [joke, setJoke] = useState('No Joke Retrieved Yet ...')

    const getJoke = () =>  {
        fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(data => setJoke(data['value']))
    }

    const save = () => {
        callback(joke)
    }

    return (
        <div>
            <h1>Joke</h1>

            <div>
                <button onClick={getJoke}>Get Joke</button>
                <button onClick={save}>Save Joke</button>

                <h3>{ joke } </h3>
            </div>
        </div>
    )
}

export default Joke;