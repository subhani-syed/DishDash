import { useState,useEffect } from "react";
import { RESTAURANT_API_URL } from "../config";

const useRestaurant = (resId)=>{
    const [restaurantDetails,setRestaurantDetails] = useState(null);
    const [items,setItems] = useState([]);

    useEffect(()=>{getRestaurant();},[])

    async function getRestaurant(){
        try {
            const data = await fetch(RESTAURANT_API_URL+resId);
            const json = await data.json();
            setRestaurantDetails(json);
            console.log(json);
            setItems(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
        } catch (error) {
            console.log(error)
        }
    }
    return [restaurantDetails,items];
}

export default useRestaurant;