import React, {useState} from "react";
import  ReactDOM  from "react-dom";
import Button from "./Button";

export default function App(){
    const [number,setNumber]=React.useState(0)
   

   
  
    
        return(
        <div>
            <h1 className="titleBar"> 
                Hello Counter
             
            </h1>
            <div className="counterDisplay">
                
            <h1 className="counterElement">{number} </h1>
            </div>
                <div className="buttonHolder">
                <button className="buttonStyle" onClick={()=>setNumber(number+1)}>Add</button>
            <button className="buttonStyle" onClick={()=>setNumber(number-1)}>Sub</button>
            <button  className="buttonStyle" onClick={()=> setNumber(0)} >Reset </button>
                </div>
        
            
        </div> )
}

ReactDOM.render(<App/>,document.getElementById("root"))