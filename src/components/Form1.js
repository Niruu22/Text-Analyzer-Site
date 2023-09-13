import React, { useState } from "react";

function Form1(props) {

    const[text, setText]= useState("");

    const handleUpClick=()=>{
        let upper = text.toUpperCase();
        setText(upper);
    };

    const handlClick =(event)=>{
        setText(event.target.value);
    };

    const handleLoClick = ()=>{
        let lower = text.toLowerCase();
        setText(lower);
    };

  return (
    <div> 
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          rows={6}
          value={text}
          onChange={handlClick} 
        />
      </div>

      <button className="btn btn-primary m-2" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary" onClick={handleLoClick}>Convert to Lowercase</button>

      <div className="container">
        <h2>{props.summary}</h2>
        <p>{text.split(" ").length} words and {text.length} charcters</p>
        <p>{0.008 * text.split(" ").length} minutes</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Form1;
