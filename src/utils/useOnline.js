import { useState,useEffect } from "react";

const useOnline = ()=>{

    const [status,setStatus] = useState(true);
    useEffect(()=>{
        const handleOnline = ()=>{
            setStatus(true);
        };
        
        const handleOffline = ()=>{
            setStatus(false);
        };
        
        window.addEventListener("offline",handleOffline)
        window.addEventListener("online",handleOnline);

        return ()=>{
            window.removeEventListener("offline",handleOffline);
            window.removeEventListener("online",handleOnline);
        };
    },[]);

    return status;
};

export default useOnline;