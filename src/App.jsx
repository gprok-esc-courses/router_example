import { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Joke from './pages/Joke'
import SavedJokes from './pages/SavedJokes'
import About from './pages/About'

function App() {
  
  const [saved, setSaved] = useState([]) 

  const saveJoke = (joke) => {
    console.log("saving ... " + joke)
    setSaved([...saved, joke])
  }



  return (
    <>
      <nav>
        <Link to="/">Home</Link> - 
        <Link to="/joke">Joke</Link> - 
        <Link to="/saved">Saved</Link> - 
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/joke' element={<Joke callback={saveJoke} />} />
        <Route path='/saved' element={<SavedJokes jokes={saved} />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>
  )
}

export default App
