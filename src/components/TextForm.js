import React, { useState } from "react";

function TextForm(props) {
  const handleUPClick = () => {
    // console.log("UpperCase was clicked");
    let upper = text.toUpperCase();
    setText(upper);
    props.showAlert("Coverted to upper", "success");
  };

  const handleLoClick = () => {
    // console.log("UpperCase was clicked");
    let upper = text.toLowerCase();
    setText(upper);
    props.showAlert("Coverted to Lower", "success");
  };

  const handleClearClick = ()=>{
    let clear = '';
    setText(clear);
    props.showAlert("Clear....!", "success");
  }

  const handleChange = (event) => {
    // console.log("onchnage");
    setText(event.target.value);
  };

  // const handleCopy =() =>{
  //   var text = document.getElementById("mybox");
  //   text.select();
  //   text.setSelectionRange(0,9999);
  //   navigator.clipboard.writeText(text.value);
  //   props.showAlert("Text is Copied", "success");
  // };

  const speak =() =>{
    let msg = new SpeechSynthesisUtterance();
    msg.text=text;
    window.speechSynthesis.speak(msg); 
    props.showAlert("Speaking...!", "success");
  };

  const [text, setText] = useState("");

  return (
    <>
      <div className="container" style={{color: props.mode === 'dark'?'white': 'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows={8}
            onChange={handleChange}
            value={text}
            style={{backgroundColor: props.mode === 'dark'?'gray': 'white', color:props.mode === 'dark'?'white': 'black'}}
          />
        </div>
        <button className="btn btn-primary m-3" onClick={handleUPClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-success " onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-warning m-3" onClick={handleClearClick}>
          Clear
        </button>
        {/* <button type="submit" className="btn btn-warning m-3"  id="mybox">
          Copy
        </button> */}
        <button type="submit" className="btn btn-warning m-3" onClick={speak}>
          Speak
        </button>
      </div>

      <div className="container" style={{color: props.mode === 'dark'?'white': 'black'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length}words and {text.length} charcters</p>
        <p>{0.008 * text.split(" ").length } minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}

export default TextForm;
