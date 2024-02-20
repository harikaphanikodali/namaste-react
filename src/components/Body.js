import RestaurantCard from "./RestaurantCard";
import restrautList  from "../utils/mockData";
import { useState } from "react";

const Body = () => {
const [ListOfRes,setListOfRes] = useState(restrautList)
console.log(ListOfRes);


    return(
      <div className="body">
        <div className="filter">
            <button className="filter-btn" onClick={()=>{
               
               let  filteredList = ListOfRes.filter((res)=>res.data.avgRating > 4);
                setListOfRes(filteredList)
            }} >Top Rated Restaurants</button>
        </div>
      
        <div className="res-container">
           
         {ListOfRes.map((restaurant) => <RestaurantCard key={restaurant?.data?.id}resData={restaurant}/>)}
        
    
      
        </div>
      </div>
    )
    
    }


    export default Body