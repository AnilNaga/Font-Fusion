import { useRef, useState } from "react";
import html2canvas from "html2canvas";
import './App.css';

const fontColor=()=>{
  const actions=useRef()
  const textcolor=(colorName)=>{
    actions.current.style.color=colorName
  }
  

  const bgcolor=(colorName)=>{
    actions.current.style.backgroundColor = colorName;
  }
 

const fontFamils=(fontfamils)=>{
  actions.current.style.fontFamily=fontfamils
}


const setImg = (images) => {
    actions.current.style.backgroundImage = `url(${images})`;
    actions.current.style.backgroundSize = "cover"; 
    actions.current.style.backgroundPosition = "center"; 
    actions.current.style.backgroundRepeat = "no-repeat"; 
  
};

const [fontSize, setFontSize] = useState(11);
const [fontWeight,setFontWeight]=useState(150);


const downloadImage = () => {
  if (actions.current) {
    html2canvas(actions.current).then((canvas) => {
      const imageData = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = imageData;
      link.download = "font-fusion.png";
      link.click();
    });
  }
};
  return(
    <>
      <nav className="nav">
      <h1 id="heading">DesignBlend</h1>
      </nav>
      <div className="parent">
        <div className="box-btn">
          <h1 id="input-box" ref={actions} contentEditable="true" 
          >Write Caption...</h1>
          <div className="dd-btn">
          <button className="d-btn" onClick={downloadImage}>Downlod</button>
          <button className="d-btn" onClick={()=>window.location="/"}>Reset</button>
          </div>
          <div className="range">
          <label>Font Size</label>
          <input
              type="range"
              min="5"
              max="60"
              value={fontSize}
              onChange={(e) => {
                setFontSize(e.target.value);
                actions.current.style.fontSize = `${e.target.value}px`;
              }}
            />
            <label>Font weight</label>
            <input 
                type="range"
                min="100"
                max="900"
                step="100"
                value={fontWeight}
                onChange={(e) => {
                  setFontWeight(e.target.value);
                  actions.current.style.fontWeight = e.target.value; 
                }}
              />
              </div>
        </div>
        <div className="color-set">
          <div className="t-g-colors">
            <h2>Text Color</h2>
            <div className="t-c">
            <button id="red" onClick={()=>{textcolor('red')}}></button>
            <button id="green" onClick={()=>{textcolor('green')}}></button>
            <button id="blue" onClick={()=>{textcolor('blue')}}></button>
            <button id="yellow" onClick={()=>{textcolor('pink')}}></button>
            <button id="pink" onClick={()=>{textcolor('red')}}></button>
            <button id="Lavender" onClick={()=>{textcolor('Lavender')}}></button>
            <button id="orangered" onClick={()=>{textcolor('rgb(225, 103, 59)')}}></button>
            <button id="orchid" onClick={()=>{bgcolor('orchid')}}></button>
            <input id="input-color"
             type="color"
             onChange={(event)=>{(event.target.value)
             textcolor(event.target.value)
             }}
             ></input>
             </div>
          </div>
          <div className="t-g-colors">
          <h2>Background Color</h2>
          <div className="t-c">
            <button id="red" onClick={()=>{bgcolor('red')}}></button>
            <button id="green" onClick={()=>{bgcolor('green')}}></button>
            <button id="blue" onClick={()=>{bgcolor('blue')}}></button>
            <button id="yellow" onClick={()=>{bgcolor('yellow')}}></button>
            <button id="pink" onClick={()=>{bgcolor('pink')}}></button>
            <button id="Lavender" onClick={()=>{bgcolor('Lavender')}}></button>
            <button id="orangered" onClick={()=>{bgcolor('orangered')}}></button>
            <button id="orchid" onClick={()=>{bgcolor('orchid')}}></button>
            <input id="input-color" 
            type="color"
            onChange={(event)=>{(event.target.value)
              bgcolor(event.target.value)
            }}
            />
            </div>
          </div>
          <div className="fonts">
              <h2>Font</h2>
              <div className="font-st">
              <span id="fn1" onClick={()=>fontFamils('Arial')}>anil</span>
              <span id="fn2" onClick={()=>fontFamils('Courier New')}>anil</span>
              <span id="fn3" onClick={()=>fontFamils('Verdana')}>anil</span>
              <span id="fn4" onClick={()=>fontFamils('Tahoma')}>anil</span>
              <span id="fn5" onClick={()=>fontFamils('Trebuchet MS')}>anil</span>
              <span id="fn6" onClick={()=>fontFamils('Franklin Gothic Medium')}>anil</span>
              <span id="fn7" onClick={()=>fontFamils('Times New Roman')}>anil</span>
              <span id="fn8" onClick={()=>fontFamils('Segoe UI')}>anil</span>
              <span id="fn9" onClick={()=>fontFamils('Trebuchet MS')}>anil</span>
              <span id="fn10" onClick={()=>fontFamils('Impact')}>anil</span>
              </div>
          </div>
          <div className="img-con">
            <h2>Pictures</h2>
            <div className="img-child">
            <span>
              <img id="img-val"
              src="/nature1.jpg"
              width="50px"
              alt="no-img"
              onClick={() => setImg("/nature1.jpg")}
            />
            </span>
            <span>
              <img id="img-val"
              src="/nature2.jpg" width="50px"
              alt="no-img"
              onClick={() => setImg("/nature2.jpg")} />
              </span>
            <span>
              <img id="img-val"
              src="/nature3.jpg" width="50px"
              alt="no-img"
              onClick={() => setImg("/nature3.jpg")} /></span>
            <span>
              <img id="img-val"
              src="/nature4.jpg" width="50px"
              alt="no-img"
              onClick={() => setImg("/nature4.jpg")} /></span>
            <span>
              <img id="img-val"
              src="/nature5.jpg" width="50px"
              alt="no-img"
              onClick={() => setImg("/nature5.jpg")} /></span>
              
          </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default fontColor