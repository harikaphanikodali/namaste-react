import { CDN_URL } from "../utils/constants"

const RestaurantCard = (props) => {

   // console.log(props);
    const {  name,
      cuisines,
      cloudinaryImageId,
      lastMileTravelString,} = props.resData?.info || {}
    
      return(
        <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-50 hover:bg-gray-200 " >
          <img className="rounded-lg " alt = "res-logo" src={CDN_URL+cloudinaryImageId}/>
          <h4 className="font-bold py-4 text-lg">{name}</h4>
          <h4 className=" flex flex-wrap">{cuisines?.join(",")}</h4>
          <h4>{lastMileTravelString}</h4>
          <h5>35 minutes</h5>
    
        </div>
      )
    }





     export const RestaurantCardPromoted = (RestaurantCard) =>{

      return (props) => {
        return(
        <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg ">Promoted</label>
        <RestaurantCard {...props}/>
        </div>
      );
    };
    };

    export default RestaurantCard;