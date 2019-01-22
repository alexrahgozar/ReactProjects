import React from "react";
import ReactDOM from "react-dom";
// function clickMe() {
//   return "Click Me!!!";
// }

const App = () => {
  // text could me string array numbers
  // if object must text.property
  const text = "Click Me";
  //function should be inside button
  // {clickMe()}
  return (
    <div>
      <label className="label" htmlFor="name">
        Enter name:
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "orange", color: "black" }}>
        {text}
      </button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
