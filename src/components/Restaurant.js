import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RESTAURANT_API_URL, RESTAURANT_BANNER_URL } from "../config";
import Shimmer from "./Shimmer";

const Restaurant = ()=>{
    const {id} = useParams();
    const [restaurantDetails,setRestaurantDetails] = useState(null);
    const [items,setItems] = useState([]);

    useEffect(()=>{getRestaurant();},[])

    async function getRestaurant(){
        const data = await fetch(RESTAURANT_API_URL+id);
        const json = await data.json();
        setRestaurantDetails(json);
        setItems(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    }
    
    const menu = []
    items.forEach((item)=>{
        item?.card?.card?.itemCards?.forEach((it)=>{
            menu.push(it.card.info)
        })
    })
    
    return (
        <>
            {restaurantDetails == null ? <Shimmer/> : (<>
            <div className="restaurant-main">
                <div>
                    <img src={RESTAURANT_BANNER_URL + restaurantDetails?.data.cards[0]?.card?.card?.info?.cloudinaryImageId} alt="Restaurant Banner" />
                    <h1>{restaurantDetails?.data.cards[0]?.card?.card?.info?.name}</h1>
                    <h2>{restaurantDetails?.data.cards[0]?.card?.card?.info?.avgRating}</h2>
                    <h3>{restaurantDetails?.data?.cards[0]?.card?.card?.info?.cuisines.join(" ,")}</h3>
                </div>
                <div>
                    <h1>Menu</h1>
                    {menu.map((e,index)=>(<li key={index}>{e.name}</li>))}
                </div>
            </div>
            </>)
            }
        </>
    )
}
export default Restaurant;