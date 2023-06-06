import React from "react";
import './styles.css'

export default function TextInput({type, onChange, value}){
    return(
        <div>
            <input 
            type={type} 
            onChange={onChange} 
            value={value}
            />
        </div>
    )
}