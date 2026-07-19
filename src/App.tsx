import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'
import Home from "./Home.tsx";
import About from "./About.tsx";
import Movies from "./Movies.tsx";
import Games from "./Games.tsx";
import Series from "./Series.tsx";
import MediaList from "./MediaList.tsx";
// import {filterByProp, sortEntriesBy} from "./BaseFuncs.tsx";

function App() {
  
  return (
      <Router>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/movies">Movies</Link></li>
            <li><Link to="/games">Games</Link></li>
              <li><Link to="/series">Series</Link></li>
              <li><Link to="/medialist">Media List</Link></li>
          </ul>
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
