import React from 'react'
import Pizza from '../assets/4.jpg'

export default function About(props) {
  return (
    <>
    <div className='aboutTOp' style={{backgroundImage:`url(${Pizza})`,height:'350px',backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>

    </div>
    <div className="aboutButtom" style={{height:'250px',width:'1519px',backgroundColor:props.mode=='dark'?'black':'white',color:props.mode=='dark'?'white':'black'}}>
        <h1 style={{color:'#503608',WebkitTextStroke:'2px red',paddingTop:'5px'}}>About US</h1>
        <p>It all started in 1972, when owner Judy Waller opened her first U.S. Pizza Company in a burned out clock shop in Levy, AR. Armed with a unique recipe for thin crust pizza and an old fashioned stone hearth oven, U.S. Pizza embarked on a quarter-of-a-century journey that has done everything but dwindle.

            That first store grossed only about $1,000 per week, but ten other U.S. Pizza Company locations have opened since. In addition to the chain of U.S. Pizza Companies, in 1981, Judy opened Hillcrest Liquor Store on Kavanaugh Boulevard in Little Rock.

            Since we opened our first store in 1972, we’ve been making our thin crust pizza from scratch when you order it. And we still use stone hearth ovens. That’s one of the reasons our unique pizzas are worth the wait!

            We pride ourselves in offering you the very best pizza, salads and sandwiches, and we value your patronage. Click the Awards tab to read more about our tasty history, distinguishing awards, and community involvement.</p>
    </div>
    </>
  )
}
