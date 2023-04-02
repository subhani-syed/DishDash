import Card from "./Card";
import { restaurantList,API_URL } from "../config";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [searchText,setsearchText] = useState("");
  const [allCardList,setAllCardList] = useState([]);
  const [filterList,setFilterList] = useState([]);

  useEffect(()=>{getRestaurants()},[]);

  async function getRestaurants(){
    const data = await fetch(API_URL);
    const json = await data.json();
    setAllCardList(json?.data?.cards[2]?.data?.data?.cards);
    setFilterList(json?.data?.cards[2]?.data?.data?.cards)
  }

  function search(text){
    const filteredData = allCardList.filter((res)=>{
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
        setFilterList(res);
      }}>Search</button>
      {allCardList.length === 0 ? <Shimmer/>: (
        <div className="container">
          {filterList.map((res)=>{
              return <Card {...res.data} key={res.data.uuid}/>
          })}
      </div>)}

    </>
  );
};

export default Body;