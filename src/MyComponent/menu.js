import React from 'react'
import {MenuList} from './menulist'
import Neapolitan from "../assets/1.jpg";
import Chicago from "../assets/2.jpg";
import NewYork from "../assets/3.jpg";
export default function menu(props) {
  return (
    <div className="menu" style={{height:'70vh',backgroundColor:props.mode=='dark'?'black':'white'}}>
          <h1 style={{textAlign:'center',color:'#503608',WebkitTextStroke:'1px red'}}>Our Menu</h1>
          {/* <div className="menuList"> */}
            {/* {MenuList.map((menuItem,key)=>{
                return(
                  <>
                  
                    <div className="row row-cols-1 row-cols-md-3 g-4" style={{height:'23rem',width:'50rem',paddingLeft:'150px'}}>
                      <div className="card h-100" >
                        <img src={menuItem.image} className="card-img-top" />
                        
                          <h5 className="card-title">{menuItem.name}</h5>
                          <p className="card-text">{menuItem.Ingrediants}</p>
                          <small className="text-muted " >{menuItem.Price}</small>
                      
                        
                      </div>
                    </div>
                    
              
            </>
            )
        })} </div> */}
        <div className="row row-cols-1 row-cols-md-3 g-4" >
         
            <div className="card" style={{width:'233px',marginLeft:'357px',marginBottom:'50px',backgroundColor:props.mode=='dark'?'black':'white',color:props.mode=='dark'?'white':'black',border:props.mode=='dark'?'2px solid white':'2px solid black'}}>
              <img src={Neapolitan} className="card-img-top" />
              <div className="card-body"    >
                <h5 className="card-title">Neapolitan Pizza</h5>
                <p className="card-text">Ingrediants: mozzarella, tomatoes, basil leaves, oregano, and olive oil</p>
                <p className="card-text" >$15.99</p>
              </div>
            </div>
          
            <div className="card" style={{width:'233px',marginLeft:'73px',marginBottom:'20px',backgroundColor:props.mode=='dark'?'black':'white',color:props.mode=='dark'?'white':'black',border:props.mode=='dark'?'2px solid white':'2px solid black'}}>
              <img src={Chicago} className="card-img-top" />
              <div className="card-body"    >
                <h5 className="card-title">Chicago Pizza</h5>
                <p className="card-text">Ingrediants beef, sausage, pepperoni, onion, mushrooms, and green peppers</p>
                <p className="card-text">$20.00</p>
              </div>
            </div>
            <div className="card" style={{width:'233px',marginLeft:'73px',marginBottom:'55px',backgroundColor:props.mode=='dark'?'black':'white',color:props.mode=='dark'?'white':'black',border:props.mode=='dark'?'2px solid white':'2px solid black'}}>
              <img src={NewYork} className="card-img-top" style={{height:'205px'}}/>
              <div className="card-body" style={{marginButtom:'5px'}}   >
                <h5 className="card-title">New York-Style Pizza</h5>
                <p className="card-text">Ingrediants tomato sauce and mozzarella cheese</p>
                <p className="card-text">$18.99</p>
              </div>
            </div>
        </div>
      
      

    </div>
  )
}
