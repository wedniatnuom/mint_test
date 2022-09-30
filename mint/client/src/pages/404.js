import React from "react";

function Redirect() {
    return(
        <React.Fragment>
            <div className="d-flex flex-column justify-content-center align-items-center" style={{height: "1100px", backgroundImage: "linear-gradient(to bottom right, lightblue, rgb(200, 238, 200);"}}>
                <div style={{color: "rgb(144, 153, 161); font-size: 128px", fontWeight: "bold"}}>404</div>
                <div style={{fontWeight: "bold", color: "rgb(144, 153, 161)"}}>Page not found!</div>
            </div>
        </React.Fragment>
    )
}

export default Redirect;