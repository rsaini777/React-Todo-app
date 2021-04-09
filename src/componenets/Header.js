import React, { useState } from 'react'
import Body from "./Body"
import { Button } from '@material-ui/core';
import "./Header.css"

function Header() {
    const [input,setInput]=useState('')
    const[data,setData]=useState([])
    const AddTodo=(e)=>{
        setData([...data,input])
        e.preventDefault();
        setInput('');
    };
    return (
        <div className="header">
            <input className="input" value={input} type="text" onChange={e=>setInput(e.target.value)}></input>
            <Button onClick={AddTodo} variant="contained" color="primary" disabled={!input}>Add Todo</Button>
            <div>
                 {
                data.map(item=>(
                    <Body item={item} data={data} setData={setData} setInput={setInput} input={input}/>
                ))
            }

            </div>
           
        </div>
    )
}

export default Header
