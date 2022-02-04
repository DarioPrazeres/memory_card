import React, {useContext, useState, useEffect} from "react";
import {PointContext} from "./Home";
function Datta(){
    const point = useContext(PointContext);
    const [pointMax, setPointMax] = useState(0);
    useEffect(()=>{
        if(point > pointMax){
           setPointMax(point); 
        }        
   }, [point]);
    return(
        <div className="datta">
            <h4 className="point bg-primary">Point Actual: {point}</h4>
            <h4 className="point bg-danger">Point Max: {pointMax}</h4>
        </div>
    );
}
export default Datta;