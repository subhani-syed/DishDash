import Card from "./Card";
import { restaurantList } from "../config";
import { useState } from "react";

const Body = () => {
  const [searchText,setsearchText] = useState("");
  const [cardlist,setCardList] = useState(restaurantList);

  function search(text){
    const filteredData = restaurantList.filter((res)=>{
      return res?.data?.name.toLowerCase().includes(text.toLowerCase())
    })
    return filteredData;
  }

  
  return (
    <>
      <input type="text" placeholder="Search Restaurant" value={searchText} onChange={(e)=>{
        setsearchText(e.target.value);
      }}/>

      <button onClick={()=>{
        const res = search(searchText);
        setCardList(res);
      }}>Search</button>

      <div className="container">
          {cardlist.map((res)=>{
              return <Card {...res.data} key={res.data.uuid}/>
          })}
      </div>

    </>
  );
};

export default Body;