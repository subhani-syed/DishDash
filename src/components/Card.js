import { Link } from "react-router-dom";
import { RESTAURANT_BANNER_URL } from "../config";

const Card = ({name,avgRating,cuisines,cloudinaryImageId,id}) => {
return (
    <>
    <div className="card">
        <img
        alt="food-item"
        src={RESTAURANT_BANNER_URL + cloudinaryImageId }
        ></img>
        <h2><Link to={'/restaurant/'+id}>{name}</Link></h2>
        <h3>{avgRating} Star Rating</h3>
        <h4>Cuisines: {cuisines.join(", ")}</h4>
    </div>
    </>
);
};

export default Card;