import React from "react";

 class UserClass extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            userInfo:{
                name :"test",
                avatar_url:"test",
                location: "defaultlocation"
            }
        }
        
    }

   async  componentDidMount(){

    const data = await fetch("https://api.github.com/users/harikaphanikodali")
    const json = await data.json()
    console.log(json); 
    this.setState({userInfo : json})

    this.timer = setInterval(()=>{
        console.log("test teact");
    },1000)

}

componentWillUnmount(){
    clearInterval(this.timer)
    console.log("componentwillwillunmount");
}
   
render(){

    // const{name,location} = this.props

    const{id,location, avatar_url} = this.state.userInfo
    return(
    <div className="user-card">
      
       
    <h2>name: {id}</h2>
    <img src={avatar_url}/>

    <h2>Location: {location}</h2>
    <h2>CONTACT: @HARIKAK</h2>
</div>
    )

}
}

export default UserClass