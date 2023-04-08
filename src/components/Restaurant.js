import { useParams } from "react-router-dom";
import { RESTAURANT_BANNER_URL } from "../config";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";

const Restaurant = ()=>{
    const {id} = useParams();
    
    const [restaurantDetails,items] = useRestaurant(id);

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
};
export default Restaurant;