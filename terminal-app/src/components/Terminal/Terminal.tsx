// import React, { useState, ChangeEvent, KeyboardEvent } from "react";
// import "./Terminal.css";

// const Terminal: React.FC = () => {
//   const [input, setInput] = useState<string>("");
//   const [output, setOutput] = useState<string[]>([]);

//   const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
//     setInput(e.target.value);
//   };

//   const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>): void => {
//     if (e.key === "Enter") {
//       e.preventDefault();
//       handleCommand(input);
//     }
//   };

//   const listData = (
//     <div className="list-data">
//       <h2>List of Files</h2>
//       <ul>
//         <li><span>file1.txt</span></li>
//         <li><span>file2.txt</span></li>
//         <li><span>file3.txt</span></li>
//       </ul>
//     </div>
//   );

//   const handleCommand = (command: string): void => {
//     let newOutput = [...output];
//     newOutput.push(`$ ${command}`);

//     switch (command.toLowerCase()) {
//       case "help":
//         newOutput.push("Available commands: help, list, whoami, clear");
//         break;
//       case "list":
//         newOutput.push("list of files: file1.txt, file2.txt, file3.txt");
//         break;
//       case "clear":
//         newOutput = [];
//         break;
//       case "whoami":
//         newOutput.push(listData);
//         break;
//       default:
//         newOutput.push(`Command not found: ${command}`);
//     }

//     setOutput(newOutput);
//     setInput("");
//   };

//   return (
//     <div className="terminal">
//       <div className="output">
//         {output.map((line, index) => (
//           <div key={index} className="output-line">
//             {line}
//           </div>
//         ))}
//       </div>
//       <input
//         className="terminal-input"
//         type="text"
//         value={input}
//         onChange={handleInputChange}
//         onKeyDown={handleKeyPress}
//         autoFocus
//         placeholder="Type a command..."
//       />
//     </div>
//   );
// };

// export default Terminal;

import React, { useState, ChangeEvent, KeyboardEvent } from "react";
import "./Terminal.css";

const Terminal: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [output, setOutput] = useState<string[] | any>([]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInput(e.target.value);
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleCommand(input);
    }
  };

  const listData = (
    <div className="list-data">
      <ul>
        <li>
          <span>file1.txt</span>
        </li>
        <li>
          <span>file2.txt</span>
        </li>
        <li>
          <span>file3.txt</span>
        </li>
      </ul>
    </div>
  );

  const handleCommand = (command: string): void => {
    let newOutput = [...output];
    newOutput.push(`$ ${command}`);

    switch (command.toLowerCase()) {
      case "help":
        newOutput.push("Available commands: help, list, whoami, clear");
        break;
      case "list":
        newOutput.push(listData);
        break;
      case "clear":
        newOutput = [];
        break;
      case "whoami":
        newOutput.push("Arch user");
        break;
      default:
        newOutput.push(`Command not found: ${command}`);
    }

    setOutput(newOutput);
    setInput("");
  };

  return (
    <div className="terminal">
      <div className="output">
        {output.map((line, index) => (
          <div key={index} className="output-line">
            {typeof line === "string" ? line : line}
          </div>
        ))}
      </div>
      <input
        className="terminal-input"
        type="text"
        value={input}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        autoFocus
        placeholder="Type a command..."
      />
    </div>
  );
};

export default Terminal;
