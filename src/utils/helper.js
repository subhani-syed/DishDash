export function search(text,list){
    const filteredData = list.filter((restaurant)=>{
        return restaurant?.data?.name.toLowerCase().includes(text.toLowerCase())
    })
    return filteredData;
}