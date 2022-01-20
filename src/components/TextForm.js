import React, { useState } from "react";

const TextForm = (props) => {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to Uppercase", "success")
  };

  const handleLowClick = () => {
    console.log("Upper case was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to Lowercase", "success")
  };

  const handleClearClick = () => {
    let newText = ''
    setText(newText);
    props.showAlert("Your text has been cleared", "success")
  };

  const handleCopy = () => {
    var text = document.getElementById("mybox")
    text.select();
    navigator.clipboard.writeText(text.value)
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to clipboard", "success")
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "))
    props.showAlert("Extra spaces has been removed", "success")
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="container" style={{color: props.mode==="dark"?"white":"#002d4d"}}>
      <h1>Enter the Text here</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          onChange={handleOnChange}
          style={{backgroundColor: props.mode==="dark"?"#002d4d":"white", color: props.mode==="dark"?"white":"#002d4d"}}
          value={text}
          id="mybox"
          rows="10"
        ></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>
        Convert to Lowercase
      </button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>
        Remove Extra Spaces
      </button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
        Copy Text
      </button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>
        Clear Text
      </button>
      
      <div className="container">

        <h1>You Text Summary</h1>
        <p>
          You have <b>{text.split(" ").filter((element) => {return element.length!==0}).length}</b> Words and <b>{text.length}</b> Characters
        </p>
        <p>{0.008 * text.split(" ").filter((element) => {return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text: "Enter Something to Preview here"}</p>
      </div>
    </div>
  );
};
export default TextForm;
