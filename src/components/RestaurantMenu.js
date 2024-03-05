import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";
import { useState } from "react";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {

    const [showIndex, setShowIndex] = useState(null)
    const {resId} = useParams();
    const restaurantInfo = useRestaurantMenu(resId);

if (restaurantInfo === null) return <Shimmer/>

const { name, cuisines,
     costForTwo
}= restaurantInfo?.cards[0]?.card.card.info

const {itemCards} = restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card


const categories = restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

    return (
        <div className="text-center ">
        <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(",")}-{costForTwo}</p>

          {categories.map((category, index) =>(
            //controlled component
        <RestaurantCategory key={category?.card?.card.title}data={category?.card.card} 
        showItems={index === showIndex && true}
        setShowIndex={()=> setShowIndex(index)}
        />
        ))}

        </div>
    )
}

export default RestaurantMenu;