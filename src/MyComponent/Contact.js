import React from 'react'
import Photo from '../assets/5.jpg'

export default function Contact(props) {
  return (
    <div className="contactcontainer" style={{display:'flex',flexDirection:'row',height:'500px',backgroundColor:props.mode=='dark'?'black':'white',color:props.mode=='dark'?'white':'black'}}>
      <div className="forimage" >
        <img src={Photo} alt="error" style={{height:'500px',width:'500px'}}/>
      </div>
      <div className="contactform" style={{paddingLeft:'116px',paddingTop:'30px'}}>
      <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label" style={{paddingRight:'701px',}}>Full Name</label>
          <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Full Name"/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label" style={{paddingRight:'675px'}}>Email address</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label" style={{paddingRight:'701px'}}>Message</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="6" placeholder='Anything For Us?'></textarea>
        </div>
        <button style={{backgroundColor:'#503608',color:'white',borderRadius:'5px'}}>Submit</button>
      </div>

    </div>
  )
}
