import "./App.css";
import Films from "./component/Films";
import FilmDetail from "./component/FilmDetail";
import Contact from "./component/Contact";
import NavBar from "./component/NavBar";
import News from "./component/News";
import About from "./component/About";
import Login from "./component/Login";
import Create from "./component/Create";
// import {Route,Routes} from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Update from "./component/Update";
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
          <Route path="/login" element={<Login />}></Route>
          <Route path="/create" element={<Create />}></Route>
          <Route path="/update/:id" element={<Update />}></Route>
          
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
