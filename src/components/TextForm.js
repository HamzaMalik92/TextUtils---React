import React,{useState} from 'react'

export default function TextForm(props) {
    const [text,setText]=useState("");
    function handleUpClick() {
        let upperCase=text.toUpperCase()
        console.log(upperCase)
        setText(upperCase)

    } 
    
    function handleDownClick() {
        let lowerCase=text.toLowerCase()
        setText(lowerCase)

    } 
    function handleOnChange(event) {
        setText(event.target.value)
        
    }
  return (
    <div>

<div className="p-4 " >
  <label htmlFor="textBox" className="form-label p-0 m-0">{props.textBoxTitle}</label>
  <textarea className="form-control mb-3 mt-3" id="textBox" value={text} rows="3" onChange={handleOnChange} placeholder="Write text here" ></textarea>
  <div className="row">
  <button className="btn btn-primary col-2 m-1 p-2" onClick={handleUpClick}>Convert to Uppercase</button>
  
  <button className="btn btn-primary col-2 m-1 p-2" onClick={handleDownClick}>Convert to Lowercase</button>

  </div>
</div>

    </div>
  )
}
