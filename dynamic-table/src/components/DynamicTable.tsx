import React, { useEffect, useState } from 'react';
import { Employee } from '../data/data.ts';
import "./DynamicTable.css";

type Props = {
  data: Employee[];
  columnOptions: string[];
};

const DynamicTable: React.FC<Props> = ({ data, columnOptions }) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>(columnOptions);
  const [availableColumns, setAvailableColumns] = useState<string[]>(columnOptions);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;

    if (checked) {
      console.log("clicked", checked, value)
      setSelectedOptions((prev) => [...prev, value]);
    } else {
      setSelectedOptions((prev) => prev.filter((option) => option !== value));
    }
  };

  useEffect(() => {
    const updatedColumns = columnOptions.filter(col => !selectedOptions.includes(col));
    setAvailableColumns(updatedColumns);
  }, [selectedOptions, columnOptions]); 

  return (
    <div className='DynamicTable' >
      <h2 className='Heading' >Dynamic Table</h2>
      <div className='title-container' >
        <h3 className='title' >Select Columns to Display</h3>
        <div className="dropdown">
          <button className="dropdown-button">Select options</button>
          <div className="dropdown-content">
            <div className="options">
              {columnOptions.map((col) => (
                <label key={col}>
                  <input
                    type="checkbox"
                    value={col}
                    checked={selectedOptions.includes(col)}
                    onChange={handleCheckboxChange}
                  />
                  {col}
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            {selectedOptions.map((col) => (
              <th key={col}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {selectedOptions.map((col) => (
                <td key={col}>{row[col as keyof typeof row]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DynamicTable;


