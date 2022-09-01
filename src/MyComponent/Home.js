import React from 'react'
import {Link} from 'react-router-dom'
import BannerImage from '../assets/pizza.jpeg'


export default function Home() {
  return (
    <div className='home' style={{
        backgroundImage:`url(${BannerImage})`,
        
        // backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
        height:'100vh'
       
        }} >
        
        <div className="headercontainer" style={{color:'#503608',padding: '128px 127px'}}>        
            <h3 style={{fontSize:'100px',WebkitTextStroke:'2px red'}}>YOYO Pizza</h3>
            <p style={{fontSize:'50px',fontStyle:'italic',WebkitTextStroke:'1px red'}}>Pizza that fits your taste</p>
            <Link to='/menu' >
                <div style={{padding:'0px 250px'}}>
                  <button style={{backgroundColor:'#503608',color:'white',borderRadius:'5px',textAlign:'center',}}>order now</button>
                </div>
            </Link>  
            
        </div>

    </div>
  )
}
