import "./styles.css";
import { useState } from "react";

const MouseEvents = () => {
  const [coordX,setCoordX] = useState("");
  const [coordY,setCoordY] = useState("");

    /**
   * TODO list
   * click
   * doubleClick
   * mouseMove
   */
  // click event

const handleMouseMove = (e) => {
  
  setCoordX(e.nativeEvent.offsetX);
  setCoordY(e.nativeEvent.offsetY);
}


//click

const handleClick = (e) => {
  console.log( "event type:",e.type , "target id: ",e.target.id);
}

function handleDoubleClick(e) {
  console.log(e.target);
}
const handleClick2 = (e,name) => {
  console.log( "event type:",e.type , "target id: ",e.target.id);
  console.log(name);
}


  return (
    <>
      <h2>MouseEvents</h2>
      <p><span>X</span> and Y</p>
      <p><span>{coordX}</span> {coordY}</p>
      <div style={{ display: "flex", justifyContent: "center" }}>
      <ul>
        <li id="todo-1" onMouseMove={handleMouseMove}>
          todo item 1 <span>X</span>
        </li>
        <li id="todo-2 " onClick = {handleClick}>
          todo item 2 <span>X</span>
        </li>
        <li onDoubleClick = {handleDoubleClick}>
          todo item 3 <span>X</span>
        </li>
        <li  onClick = {(e) => handleClick2(e,"xxx")}>
          todo item 4 <span>X</span>
        </li>
        <li>
          todo item 5 <span>X</span>
        </li>
      </ul>
      </div>
    </>
  );
};

export default MouseEvents;
