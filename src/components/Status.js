import React from "react"
import "../css/menu.css"
function Status(props){
    return(
        <div className="status d-none" id="show">
            <h1>{props.loseWin}</h1>
            <button className="btn btn-primary">ReStart</button>
        </div>
    );
}
export default Status;