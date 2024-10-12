import React from "react";

export default function FaBody(props) {
    return (
        // <div className="card-cont">
        //    <div className="card">
        //     <img src={`../images/${props.img}`} alt="" className="card-image" />
        //     <div className="card-stats">
        //         <span className="gray">{props.relation}</span>
        //     </div>
        // </div> 
        // <p>{props.detail}</p>
        // </div>

           <div className="card-cont">
           <div className="card">
            <img src={`../images/${props.img}`} alt="" className="card-image" />
            <div className="card-stats">
                <span className="gray">{props.relation}</span>
            </div>
        </div> 
        <p className="details">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, quo. Architecto doloribus consequuntur reprehenderit odit hic eaque officia aperiam exercitationem laboriosam, numquam ut est porro sit, veritatis fugit ipsum expedita. Maiores consectetur vero cum dicta minus aperiam necessitatibus exercitationem est beatae itaque. Magnam incidunt, laboriosam sed cumque accusamus rem ipsam.</p>
        </div>  
        
    )
}