import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {

    const [restaurantInfo ,  setRestaurantInfo ] = useState(null)
    const {resId} = useParams();


    useEffect(()=>{
        fetchMenu();
    },[]);

const fetchMenu = async() => {
    const data = await fetch(MENU_API+resId+"&submitAction=ENTER")
      const json = await data.json()
      console.log(json);
      setRestaurantInfo(json?.data)
}
if (restaurantInfo === null) return <Shimmer/>

const { name, cuisines,
     costForTwo
}= restaurantInfo?.cards[2]?.card.card.info

const {itemCards} = restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card

    return (
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(",")}-{costForTwo}</h3>
            <h3>{costForTwo}</h3>
            <ul>
                <li>{itemCards.map((e)=><li key={e.card.info.id}>{e.card.info.name} - RS{e.card.info.defaultPrice/100}</li>)}</li>
         
            </ul>

        </div>
    )
}

export default RestaurantMenu;