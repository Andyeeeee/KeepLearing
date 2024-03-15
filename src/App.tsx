import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom'

import './App.css'
import Home from './pages/Home'
import About from './pages/About'

function App() {

  return (
    <BrowserRouter>
      <header>
        <nav>
          <h2>navbar</h2>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">about</NavLink>
        </nav>
      </header>
      <div className="App">
        <main>
          <Routes>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
