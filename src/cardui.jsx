import React from "react";
import "./card-style.css";

const Card = props => {
return(
 <div className="card text-center">
    <div className="overflow">
        <img src={props.imgsrc} alt="Image 1" className="card-img-top"/>
    </div>
    <div className="card-body text-dark">
    </div>
    <h4 className="card-title">{props.title}
    </h4>
    <p className="card-text text-secondary">{props.text}
    </p>
 <a href="#" className="btn btn-outline-success">Ingredients</a>
 <a href="#" className="btn btn-outline-success">Method</a>
 </div>

);
}

export default Card;