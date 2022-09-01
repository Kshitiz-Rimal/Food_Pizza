import React,{useState} from 'react';
import './App.css';
import Navbar  from "./MyComponent/Navbar";
import Home from "./MyComponent/Home"
import Menu from "./MyComponent/menu";
import Footer from "./MyComponent/footer";
import About from './MyComponent/About';
import Contact from './MyComponent/Contact';
import {
  BrowserRouter as Router,
  
  Route,
  Routes,
 
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light')

const ontoggle=()=>{
  if(mode=='light'){
    setmode('dark')
  }
  else{
    setmode('light')
  }
}

  return (
    <>
    <div className="App">
    
    <Router>
    <Navbar ontoggle={ontoggle}  />
    
    
    
      <Routes>
        <Route exact path="/home" element={<Home/>}/>
        <Route exact path="/menu" element={<Menu mode={mode} />}/>
        <Route exact path="/pizza-website" element={<Home/>}/>

        <Route exact path="/aboutus" element={<About mode={mode}/>}/>

        <Route exact path="/contact" element={<Contact mode={mode}/>}/>

        

      </Routes>
      
      
    
    
    </Router>
    <Footer/>
    </div>
    
    </>
  );
}

export default App;
