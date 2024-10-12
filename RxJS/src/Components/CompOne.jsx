import React, { useState } from "react";
import { sendData } from "../Rxjs/dataService";

const Component1 = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSendData = () => {
    sendData(inputValue);
  };

  const handleChange = (e) => {
    console.log(inputValue);
    setInputValue(e.target.value);
  };

  return (
    <div>
      <h2>Component 1</h2>
      <input
        type="text"
        onChange={handleChange}
        placeholder="enter any text"
        name="text"
      />
      <button onClick={handleSendData}>Send Data</button>
    </div>
  );
};

export default Component1;
