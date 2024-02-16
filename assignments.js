import React from "react";
import ReactDOM from "react-dom/client";

const header1 = React.createElement("h1",{},React.createElement("h2",{},React.createElement("h3",{},"heading123")))



const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(header)


const color1 = {
  color : 'blue'
}

const jsxheanding = (
  <h1  style ={color1}>
     <h2>
     <div style ={color1}>Heading123</div>
     </h2>
  </h1>
)

root.render(jsxheanding)


const Funccomp = () => {
  return(
    <div>
        <Funccompchild/>
        <h1>
     <h2>
    
     <h3>Heading12</h3>
     </h2>
  </h1>
    </div>
  )
}

const Funccompchild = () =>{

  return(
    <div>
      <h3>this is child</h3>
    </div>
  )
}

root.render(<Funccomp/>)

const makgud = {
    padding : '10px',
    color : 'red'
  }
  
  const header = {
    display :'flex'
  }
  
  const userlogo = {
    width : '10 px',
    height : '40px'
  }
  
  const Header = () => {
    return(
      <div className="header" style={header}>
  <div className="logo-container">
    <img  className="logo"src = "https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"/>
  </div>
  <div className="search" >
    <div className="search-bar" style={makgud}>
   hi
    </div>
  </div>
  <div className="user">
    <div className="user-logo" >
      <img style = {userlogo} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk6YsRoCBWo01-JOhJs8-FlcnjDjB5TO01qCJO9HpvYOjTmvrWdRTY4wbpbw&s"/>
    </div>
  </div>
  
      </div>
    )
  } 
  
  const root1 = ReactDOM.createRoot(document.getElementById('root'))
  
  //const root = document.getElementById('root')
  
  root.render(<Header/>)