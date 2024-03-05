import React from "react"
import User from "./User"
import UserClass from "./UserClass"
import UserContext from "../utils/UserContext"

const About = () => {
    return(
        <div>
            <h1>welcome about</h1>
            <div>
                <UserContext.Consumer>
                    {({loggedInUser})=> <h1 className="text-xl font-bold">{loggedInUser}</h1>}
                </UserContext.Consumer>
            </div>
            {/* <User name={"harika"}/> */}
            <UserClass name={"harika-c"} location={"MD-USAC"}/>


        </div>
    )
}

export default About