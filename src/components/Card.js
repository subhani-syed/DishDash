const Card = ({name,avgRating,cuisines,cloudinaryImageId}) => {
return (
    <>
    <div className="card">
        <img
        alt="food-item"
        src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId }
        ></img>
        <h2>{name}</h2>
        <h3>{avgRating} Star Rating</h3>
        <h4>{cuisines.join(", ")}</h4>
    </div>
    </>
);
};

export default Card;