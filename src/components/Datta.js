import React, {useContext} from "react";
import {PointContext} from "./Home";
function Datta(){
    const point = useContext(PointContext)
    return(
        <>
            <h2>Point Actual: {point}</h2>
        </>
    );
}
export default Datta;