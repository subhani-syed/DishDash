const Shimmer = ()=>{
    return <>
        <div className="shimmer-main">
            {new Array(12).fill(<div className="shimmer-card"></div>)}
        </div>
    </>
}
export default Shimmer;