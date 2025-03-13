'use client';

import './App.css'
import DynamicTable from './components/DynamicTable';
import { employeeData } from './data/data';

const employeeColumns = [
  "id",
  "name",
  "position",
  "department",
  "hireDate",
  "salary"
];

function App() {
  return (
    <>
      <h1>Dynamic table</h1>
      <DynamicTable data={employeeData} columnOptions={employeeColumns} />
    </>
  )
}

export default App
