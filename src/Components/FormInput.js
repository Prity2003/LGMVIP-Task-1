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
            <div className="main-div">
                <div className='center_div'>
                    <br />
                    <h1> My Todo-List</h1>
                    <br />
                    <input type='text'
                        placeholder='Add an item'
                        value={input}
                        onChange={handleChange} />
                    <button type="submit" className="btn" onClick={handleSubmit}>+</button>
                </div>
            </div>
        </>
    )
}

export default FormInput;