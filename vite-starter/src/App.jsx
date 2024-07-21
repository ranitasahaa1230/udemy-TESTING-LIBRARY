import { useState } from "react";
import "./App.css";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const nextColor = buttonColor === "red" ? "blue" : "red";

  const changeHandler = () => {
    setButtonColor(nextColor);
  };

  return (
    <div>
      <button className={buttonColor} onClick={changeHandler}>
        Change to {nextColor}
      </button>
    </div>
  );
}

export default App;
