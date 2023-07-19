import React, { useState } from "react";
import '../index.css';

const FormInput = (props) => {
    const [input, setInput] = useState("");

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addData({
            id: Math.floor(Math.random() * 1000000),
            text: input,
            isComplete: false,
        });
        setInput("");
    }

    return (
        <>
            <div className="list">

                    <input type='text'
                        placeholder='Add an item'
                        value={input}
                        onChange={handleChange} 
                        />
                    <button type="submit" className="btn" onClick={handleSubmit}>+</button>
                        </div>
             
           
        </>
    )
}

export default FormInput;