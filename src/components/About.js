import { useParams } from "react-router-dom";

const Aboout = ()=>{
    const {id} = useParams();
    return (
        <div>
            <h1>This is the About Page {id}</h1>
        </div>
    )
}
export default Aboout;