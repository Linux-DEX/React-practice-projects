import React from "react";
import NavBar from "./NavBar";
import FaBody from "./FaBody";
import Data from "./Data";

export default function Family() {

    // const FaBody = Data.map(item => {
    //     return (
    //         <FaBody
    //             key = {item.id}
    //             img = {item.img}
    //             relation = {item.relation}
    //             detail = {item.detail}
    //         />
    //     )
    // })

    return (
        <div className="family-details">
            <NavBar />
            {/* <div className="card-list">
              {FaBody}  
            </div> */}
            
            <FaBody 
            img= "FugakuUchiha.jpg"
            relation= "father"
            />
            <FaBody 
            img= "MikotoUchiha.jpg"
            relation= "Mother"
            />
            <FaBody 
            img= "sasukeUchiha.jpg"
            relation= "Brother"
            />
        </div>
    )
}