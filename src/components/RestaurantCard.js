import { CDN_URL } from "../utils/constants"

const RestaurantCard = (props) => {

   // console.log(props);
    const {  name,
      cuisines,
      cloudinaryImageId,
      lastMileTravelString,} = props.resData?.info || {}
    
      return(
        <div className="res-card">
          <img className="res-logo" alt = "res-logo" src={CDN_URL+cloudinaryImageId}/>
          <h4>{name}</h4>
          <h4>{cuisines?.join(",")}</h4>
          <h4>{lastMileTravelString}</h4>
          <h5>35 minutes</h5>
    
        </div>
      )
    }


    export default RestaurantCard