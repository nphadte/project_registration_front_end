import React from  "react";
import classes from "./input.css";

const input = (props) => (
    let inputElement = null;

switch (props.inputType) {
    case ('input'):
        inputElement = <input  {...props}/> ;
        break;
        case ('textarea'):
        inputElement = <textarea  {...props}/>;
        break;
        case ('select'):
        inputElement = <select  {...props}/>;
        break;
    
    default:
        inputElement = <input   {...props}/>;
}
return {
        < div >
                <label> {props.label}</label>
                {inputElement}
        </div>
    }
    
);

export default input;
