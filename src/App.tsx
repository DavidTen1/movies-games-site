import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'
import Home from "./Home.tsx";
import About from "./About.tsx";
import Movies from "./Movies.tsx";
import Games from "./Games.tsx";
import Series from "./Series.tsx";
import MediaList from "./MediaList.tsx";

function App() {
  return (
      <Router>
        <nav>
          <ol>
            <Link to="/">Home</Link> |
            <Link to="/about">About</Link> |
            <Link to="/movies">Movies</Link> |
            <Link to="/games">Games</Link> |
              <Link to="/series">Series</Link> |
              <Link to="/medialist">Media List</Link> |
          </ol>
        </nav>
        <Routes>
          <Route path="/" Component={Home} />
            <Route path="/about" Component={About} />
          <Route path="/movies" Component={Movies} />
          <Route path="/games" Component={Games} />
            <Route path="/series" Component={Series}/>
            <Route path="/medialist" Component={MediaList}/>
        </Routes>
      </Router>


  )
}

export default App
