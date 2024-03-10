import { useState } from "react";
import "./App.css";
import React from "react";
import usePasswordGenerator from "./CustomHook/use-password-genrater";
function App() {

    const [length,setlength]=useState(4);
    const [checkboxData,setCheckboxData] =useState([ 
    { title: "Include Uppercase Latter", state: false },
    { title: "Include Lowercase Latter", state: false },
    { title: "Include Numbers", state: false },
    { title: "Include Symbols", state: false },
  ]);
  const [copied,setCopied]=useState(false);

  const handleCheckboxChange=(i)=>{
    const updatedCheckBoxData=[...checkboxData];
    updatedCheckBoxData[i].state=!checkboxData[i].state
    setCheckboxData(updatedCheckBoxData);
  };
  
  
  const handleCopy=()=>{
    navigator.clipboard.writeText(password);
    setCopied(true);

    setTimeout(() => {
      setCopied(false)
    }, 1000);
  };
   const{password,errorMessage,generatePassword}=usePasswordGenerator("");


  return (
    <>
    <div className="container">
      <div className="App">
        {password && 
        <div className="Header">
          <div className="title">{password}</div>
          <button className="copybtn" onClick={() => handleCopy()}>
            {copied?"Copied":"Copy"}
          </button>
        </div>
        }
        <div className="charLength">
          <span>
            <label>Charecter Length</label>
            <label>{length}</label>
            </span>
            <input
              type="range"
              min="4"
              max="20" 
              value={length} 
              onChange={(e)=>setlength(e.target.value)}
            />
          
        </div>
        <div className="checkboxes">
          {checkboxData.map((checkbox, index) => {
            return (
              <div key={index}>
                <input type="checkbox" onChange={()=>handleCheckboxChange(index)} checked={checkbox.state} />
                <label>{checkbox.title}</label>
              </div>
            );
          })}
        </div>
        {errorMessage && <div className="errorMessage">{errorMessage}</div>}
        <div className="genratepassBtn">
          <button className="genratepassbtn" onClick={() => generatePassword(checkboxData,length)}>
            Genrate password
          </button>
        </div>
      </div>
      </div>
    </>
  );
}

export default App;
