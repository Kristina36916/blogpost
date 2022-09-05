import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Meni from './Komponente/Meni';
import Futer from './Komponente/Futer';
import pozadina from './Slike/R.jfif'; 

function App() {
  return (
    <div className="App">
       <BrowserRouter className="App">
      <Meni></Meni>
      <img className="img"src={pozadina} alt="slika pozadine" sizes='' />
      <Routes>
        
      </Routes>
    </BrowserRouter>
    <Futer></Futer>
    </div>
  );
}

export default App;
