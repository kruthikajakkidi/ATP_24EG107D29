import { useState } from "react";
function Count(){
    const [count,useCount]=useState(0);

    const increment=()=>{
        useCount(count+1)
    }
     const decrement=()=>{
        useCount(count-1)
    }

    return(
        <div className="text-center p-10 border"></div>
        <h1 className="text-6xl " >count:{count} </h1>
        <button className=""
    )
}