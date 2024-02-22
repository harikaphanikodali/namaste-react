import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
const [ListOfRes,setListOfRes] = useState([])
const [searchText,setSearchText] = useState("")
const [filtersRestaurant,setFilteredRestaurant] = useState([])

useEffect(()=>{
    fetchData();
},[])

const fetchData = async ()=>{
        const data =  await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        const restaurantList = json?.data?.cards?.find((rec)=> rec.card.card.id && rec.card.card.id === "restaurant_grid_listing", );
        if(restaurantList){
        setListOfRes(restaurantList?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurant(restaurantList?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        }
    }


    return ListOfRes?.length === 0 ? ( <Shimmer/>) : (
      <div className="body">
        <div className="filter">
          <div className="search">
            <input type="text" className="search-box" value={searchText}
            onChange={(e)=>{setSearchText(e.target.value)}}/>
            <button onClick={()=>{
              const filtersRestaurants = ListOfRes.filter((res) => res?.info?.name.toLowerCase().includes(searchText)
              );
            
        setFilteredRestaurant(filtersRestaurants)
        }}>Search</button>
          </div>
            <button className="filter-btn" onClick={()=>{
               
               let  filteredList = ListOfRes.filter((res)=>res.info.avgRating > 4);
                setListOfRes(filteredList)
            }} >Top Rated Restaurants</button>
        </div>
      
        <div className="res-container">
           
         {filtersRestaurant?.map((restaurant) => <RestaurantCard key={restaurant?.info?.id}resData={restaurant}/>)}
        
    
      
        </div>
      </div>
    )
    
    }


    export default Body