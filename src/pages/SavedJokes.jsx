

function SavedJokes({ jokes }) {
    return (
        <div>
            <h1>SAVED JOKES</h1>

            <div>
                {
                    jokes.map((joke, index) => (
                        <div key={index}>
                            {joke}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default SavedJokes;