import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import Home from "./Pages/Home";
import NoteState from './context/notes/NoteState'

function App() {
  return (
    <div className="App">
        <NoteState>
              <Navbar />
        
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About />} />
          
        </Routes>
        </NoteState>
      
    </div>
  );
}

export default App;
