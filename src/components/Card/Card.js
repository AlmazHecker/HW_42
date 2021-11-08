import React from "react";
import classes from './Card.module.css';

const Card = props => {
    return <div className={`${classes.card} ${props.className}`}>
        {props.children}
    </div>
}

export default Card;

// .card {
//     background: white;
//     box-shadow: 0 2px 8px rgb(0, 0,0, 0.26);
//     border-radius: 10px;
// }