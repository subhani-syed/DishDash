import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

const Error = ()=>{
    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <h1>Oops...</h1>
            <h3>Something went wrong...</h3>
            <h2>Data: {err.data}</h2>
            <h2>Error Status: {err.status}</h2>
            <button><Link to="/">Go Home</Link></button>
        </div>
    )
}

export default Error;