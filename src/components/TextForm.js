import React ,{useState} from 'react'
export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("UpperCase was clicked" + text);
        let newText=text.toUpperCase();
        setText(newText)
        props.showalert("Converted to Uppercase","Success");
    }
    const handleLoClick=()=>{
        // console.log("UpperCase was clicked" + text);
        let newText=text.toLowerCase();
        setText(newText)
        props.showalert("Converted to Lowercase","Success");
    }
    const handleClClick=()=>{
        // console.log("UpperCase was clicked" + text);
        let newText=' ';
        setText(newText)
        props.showalert("Text Cleared","Success");
    }
    // const googleTranslateElementInit=()=> {
    //     let newText= google.translate.TranslateElement({pageLanguage: 'en'}, 'text');
    //     setText(newText)
    //   }

    const handleOnChange=(event)=>{
        //  console.log("On change");
         setText(event.target.value);
    }

    const handleCopy=()=>{
        var text=document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showalert("Text Copied","Success");

    }

    const handleextraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showalert("Space handled","Success");
    }

    
    const [text, setText] = useState('');
    //text="new text";//wrong way to write
    //setText("new text");//correct way
    return (
        <>
        <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
  <div className="mb-3">
    <textarea className="form-control"  value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="mybox" rows="8"></textarea>
  </div>
  <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
  <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
  <button className="btn btn-primary mx-1" onClick={handleClClick}>Clear text</button>
  <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy text</button>
  <button className="btn btn-primary mx-1" onClick={handleextraSpaces}>Remove Extra Spaces</button>
  {/* <button className="btn btn-primary mx-1" onClick={googleTranslateElementInit}>Translate</button> */}
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
          <h2>Your text summary</h2>
          <p>{text.split(" ").length} words and {text.length} characters</p>
          <p>{0.08*text.split(" ").length} Minutes Read</p>
          <h2>Preview</h2>
          <p>{text.length>0?text:"Enter some text in the textbox above to preview it"}</p>
        </div>
        </>
    )
}
