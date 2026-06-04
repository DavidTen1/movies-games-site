import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'
import Home from "./Home.tsx";
import About from "./About.tsx";
import Movies from "./Movies.tsx";
import Games from "./Games.tsx";
import Series from "./Series.tsx";
import {filterByProp} from "./BaseFuncs.tsx";
// import {filterByProp, sortEntriesBy} from "./BaseFuncs.tsx";

function App() {

    // -----------------------------
// Valid filter tests
// -----------------------------

//     console.log("1. Valid genre RPG:");
//     console.log(filterByProp("RPG", "genre"));
//
//     console.log("2. Valid platform PC:");
//     console.log(filterByProp("PC", "platforms"));
//
//     console.log("3. Valid availableOn Netflix:");
//     console.log(filterByProp("Netflix", "availableOn"));
//
//     console.log("4. Valid type game:");
//     console.log(filterByProp("game", "type"));
//
//     console.log("5. Valid priceType Paid:");
//     console.log(filterByProp("Paid", "priceType"));
//
//     console.log("6. Valid releaseYear 2015 as string:");
//     console.log(filterByProp("2015", "releaseYear"));
//
//     console.log("7. Valid title:");
//     console.log(filterByProp("The Witcher 3: Wild Hunt", "title"));
//
//
// // -----------------------------
// // Invalid key-value pair tests
// // These should return []
// // -----------------------------
//
//     console.log("8. Netflix is valid globally, but invalid for title:");
//     console.log(filterByProp("Netflix", "title"));
//
//     console.log("9. RPG is valid globally, but invalid for priceType:");
//     console.log(filterByProp("RPG", "priceType"));
//
//     console.log("10. Paid is valid globally, but invalid for genre:");
//     console.log(filterByProp("Paid", "genre"));
//
//     console.log("11. PC is valid globally, but invalid for availableOn:");
//     console.log(filterByProp("PC", "availableOn"));
//
//
// // -----------------------------
// // Invalid value tests
// // These should return []
// // -----------------------------
//
//     console.log("12. Completely unknown value:");
//
//     console.log("13. Unknown genre:");
//     console.log(filterByProp("UnknownGenre", "genre"));
//
//     console.log("14. Empty input:");
//     console.log(filterByProp("", "genre"));
//
//
// // -----------------------------
// // Invalid property tests
// // These should return []
// // Needs type cast because TypeScript blocks invalid keys normally
// // -----------------------------
//
//     console.log("15. Invalid property image:");
//     console.log(filterByProp("some-image-url", "image"));
//
//
// // -----------------------------
// // No property tests
// // These search across Object.values(x)
// // -----------------------------
//
//     console.log("18. No property, valid value RPG:");
//     console.log(filterByProp("RPG"));
//
//     console.log("19. No property, valid value Netflix:");
//     console.log(filterByProp("Netflix"));
//
//     console.log("20. No property, invalid value:");
//     console.log(filterByProp("NotExistingValue"));
//
//
// // -----------------------------
// // Sort tests
// // -----------------------------
//
//     console.log("21. Sort by title:");
//     console.log(sortEntriesBy("title"));
//
//     console.log("22. Sort by releaseYear:");
//     console.log(sortEntriesBy("releaseYear"));
//
//     console.log("23. Sort by type:");
//     console.log(sortEntriesBy("type"));

     console.log("test", filterByProp("DROP TABLE"));

  
  return (
      <Router>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/movies">Movies</Link></li>
            <li><Link to="/games">Games</Link></li>
              <li><Link to="/series">Series</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" Component={Home} />
            <Route path="/about" Component={About} />
          <Route path="/movies" Component={Movies} />
          <Route path="/games" Component={Games} />
            <Route path="/series" Component={Series}/>
        </Routes>
      </Router>
  )
}

export default App
