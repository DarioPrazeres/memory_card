import React, {useState, useEffect} from "react";
function Board(){
    const [color, setColor] = useState("black");
    
    useEffect(()=>{
        const change = () =>{
            if(color === "black"){
                setColor("red");
            }else{
                setColor("black");
            }
        };
        document.getElementById('my').addEventListener('click', change);
        return ()=>{
            document.getElementById('my').removeEventListener("click", change)
        };
    }, [color]);
    return(
        <div>
            <div id="my"
            style={{
                color:"white",
                width: "100px",
                height: "100px",
                position: "absolute",
                left: "50%",
                right: "50%",
                backgroundColor: color,
            }}
            className="btn">click oN ME {color}</div>
        </div>
    );
}
export default Board;