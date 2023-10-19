import "./App.css";
import Films from "./component/Films";
import FilmDetail from "./component/FilmDetail";
import Contact from "./component/Contact";
import NavBar from "./component/NavBar";
import News from "./component/News";
import About from "./component/About";
// import {Route,Routes} from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <Router>
      <NavBar />
        <Routes>
          <Route path="/" element={<Films />}>
          </Route>
          <Route path="/detail/:id" element={<FilmDetail />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/news" element={<News />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
