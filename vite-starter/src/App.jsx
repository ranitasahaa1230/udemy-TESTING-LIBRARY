import { useState } from "react";
import "./App.css";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const [disable, setDisabled] = useState(false);
  const nextColor = buttonColor === "red" ? "blue" : "red";
  const classNames = disable ? "gray" : buttonColor;

  const changeHandler = () => {
    setButtonColor(nextColor);
  };

  return (
    <div>
      <button className={classNames} onClick={changeHandler} disabled={disable}>
        Change to {nextColor}
      </button>
      <br />
      <input
        type="checkbox"
        id="disable-button-checkbox"
        defaultChecked={false}
        onChange={(e) => setDisabled(e.target.checked)}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
