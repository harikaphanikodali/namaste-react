import { useState } from "react"

const User = (props)=>{

    const[count,setCount]= useState(0)
    return(
        <div className="user-card">
            <h1>count:{count}</h1>
            <h2>name: {props.name}</h2>
            <h2>Location: MD,USA</h2>
            <h2>CONTACT: @HARIKAK</h2>
        </div>
    )
}

export default User