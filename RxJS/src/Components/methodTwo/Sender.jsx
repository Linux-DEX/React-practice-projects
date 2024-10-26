import React, { useState } from "react";
import { Subject } from "../../Rxjs/subjects";

const Sender = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSendData = () => {
    Subject.next({ inputValue });
  };

  const handleChange = (e) => {
    console.log(inputValue);
    setInputValue(e.target.value);
  };

  return (
    <div>
      <h2>sender</h2>
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

export default Sender;
