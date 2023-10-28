import { useState } from "react";

function Hooks(){
    const[count,setcount]=useState("")

    const Incre = ()=>{
        setcount(count++);
    
    }
    const Dcre = ()=>{
        setcount(count-1);

    }

    return(<>
    <h1>{count}</h1>
    <button onClick={Incre}>Incriment</button>
    <button onClick={Dcre}>Decriment</button>
    
    </>)

};
export default Hooks;