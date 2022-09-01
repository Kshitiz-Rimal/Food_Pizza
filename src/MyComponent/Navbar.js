import React from "react";
import logo from "../assets/download.png"
import { Link } from "react-router-dom";


export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-dark ">
        <img src={logo} alt="error" style={{width:'114px', paddingLeft:'42px'}}/>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent" >
            <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <Link className="nav-link" to="/home" style={{color:'white',paddingLeft:'900px'}}>Home</Link> 
                
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/menu" style={{color:'white'}}>Menu</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/aboutus" style={{color:'white'}}>About Us</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/contact" style={{color:'white'}}>Contact</Link>
            </li>
            
            
            </ul>
            
        </div>  
        <div className="form-check form-switch" style={{float:'right',color:'white'}}>
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.ontoggle}/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark mode</label>
        </div>  
    </nav>
  );
}
