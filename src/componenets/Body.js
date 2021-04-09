import React, { useState } from 'react'
import { Button } from '@material-ui/core';
import "./Body.css"

function Body({item,data,setData,setInput,input}) {
    
    const deleteMe=()=>{
       setData(data.filter((t)=>t !==item));

    }
    
     const updateMe=index=>e =>{
        console.log('index: ' + index);
        console.log(setInput( e.target.name));
        let newArr = [...data]; 
        newArr[index] = e.target.value; 
    
        setData(newArr)
         
         
         
         
        
        
    }
   
    return (
        <div className="body">
            <div className="hyper">

                <h1>{item}</h1>
            
            <Button  variant="contained" color="primary" onClick={updateMe}>Update</Button>
            <Button  variant="contained" color="secondary" onClick={deleteMe}>Delete</Button>
            </div>
            
            
        </div>
    )
}

export default Body
