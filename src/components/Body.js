import Card from "./Card";
import { restaurantList } from "../config";

const Body = () => {
    return (
      <div className="container">
          {restaurantList.map((res)=>{
              return <Card {...res.data} key={res.data.uuid}/>
          })}
      </div>
    );
  };

export default Body;