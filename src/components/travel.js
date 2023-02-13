import React from "react";
import data from "../components/data.js";
import { Container } from "react-bootstrap/Container";
import travel from "../components/travel.css"
import loc from "../images/location.png"

export default function Travel(props){
    return(
        
            <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={require("../images/"+props.tra.imageUrl)} className="img-fluid rounded-start" alt="images" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <div>
                                <img src={loc} className="" height="15px" width="10px" alt="images" />
                                <span className="card-header">{props.tra.location}</span>
                                <span className="card-header"><a href={props.tra.googleMapsUrl}>{props.tra.googleMapsUrl}</a></span>
                                </div>
                                <br />
                                <h5 className="card-title">{props.tra.title}</h5>
                                <p className="card-text"><b>{props.tra.startDate}-{props.tra.endDate}</b></p>
                                <p className="card-text"><small className="text-muted">{props.tra.description}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        
    )
}
