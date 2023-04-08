import Card from "./Card";
import { API_URL } from "../config";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { search } from "../utils/helper";
import useOnline from "../utils/useOnline";

const Body = () => {
  const [searchText,setsearchText] = useState("");
  const [allCardList,setAllCardList] = useState([]);
  const [filterdList,setFilterdList] = useState([]);
  
  useEffect(()=>{getRestaurants()},[]);

  async function getRestaurants(){
    try {
      const data = await fetch(API_URL);
      const json = await data.json();
      setAllCardList(json?.data?.cards[2]?.data?.data?.cards);
      setFilterdList(json?.data?.cards[2]?.data?.data?.cards)  
    } catch (error) {
      console.log(error);
    }
  }
  
  const status = useOnline();

  if(!status){
    return <h1>You are Offline</h1>
  }

  return (
    <>
      <input type="text" placeholder="Search Restaurant" value={searchText} onChange={(e)=>{
        setsearchText(e.target.value);
      }}/>

      <button onClick={()=>{
        const res = search(searchText,allCardList);
        setFilterdList(res);
      }}>Search</button>
      {allCardList.length === 0 ? <Shimmer/>: (
        <div className="container">
          {filterdList.map((rest)=>{
              return <Card {...rest.data} key={rest.data.uuid}/>
          })}
      </div>)}

    </>
  );
};

export default Body;