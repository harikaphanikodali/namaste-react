import RestaurantCard , {RestaurantCardPromoted} from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
const [ListOfRes,setListOfRes] = useState([])
const [searchText,setSearchText] = useState("")
const [filtersRestaurant,setFilteredRestaurant] = useState([])
const RestaurantCardLabel = RestaurantCardPromoted(RestaurantCard)

useEffect(()=>{
    fetchData();
},[])

console.log(ListOfRes);
const fetchData = async ()=>{
        const data =  await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        const restaurantList = json?.data?.cards?.find((rec)=> rec.card.card.id && rec.card.card.id === "restaurant_grid_listing", );
        if(restaurantList){
        setListOfRes(restaurantList?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurant(restaurantList?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        console.log(ListOfRes, filtersRestaurant);
        }
    }
const onlineStatus = useOnlineStatus();

if(onlineStatus === false) return <h1>Loooks like you're offline!!</h1>
const { setUserName , loggedInUser} = useContext(UserContext);

    return ListOfRes?.length === 0 ? ( <Shimmer/>) : (
      <div className="body">
        <div className="filter flex">
          <div className="search m-4 p-4">
            <input type="text" className=" border border-solid border-black" value={searchText}
            onChange={(e)=>{setSearchText(e.target.value)}}/>
            <button className="px-4 py-1 bg-green-100 m-4 rounded-lg" onClick={()=>{
              const filtersRestaurants = ListOfRes.filter((res) => res?.info?.name.toLowerCase().includes(searchText)
              );
            
        setFilteredRestaurant(filtersRestaurants)
        }}>Search</button>
          </div>
          <div className="search m-4 p-4 flex items-center">
            <button className="px-4 py-1 bg-green-50 rounded-lg" onClick={()=>{
               let  filteredList = ListOfRes.filter((res)=>res.info.avgRating > 4.0);
                setFilteredRestaurant(filteredList)  
            }} >Top Rated Restaurants</button>
            </div>
            <div className="search m-4 p-4 flex items-center">
        <input className="border  border-black p-2" 
        value={loggedInUser}
        onChange={(e)=> setUserName(e.target.value)}/>
            </div>
        </div>
      
        <div className="flex flex-wrap">
           
         {filtersRestaurant?.map((restaurant) => (
        <Link key={restaurant?.info?.id} to={"/restaurants/"+restaurant?.info?.id}> 
        {restaurant?.info?.avgRating === 4.1  ? (<RestaurantCardLabel resData={restaurant}/>) : (<RestaurantCard resData={restaurant} />)}
       </Link>))}
        
    
      
        </div>
      </div>
    )
    
    }


    export default Body