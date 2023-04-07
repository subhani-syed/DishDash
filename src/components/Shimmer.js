const Shimmer = ()=>{
    return(
        <div className="shimmer-main">
            {Array(12).fill("").map((e,index)=>(<div key={index} className="shimmer-card"></div>))}
        </div>
    )
}
export default Shimmer;