import React, { useEffect, useState } from 'react';
import axios from 'axios';
import dataTable from './dataTable.json';


function Able() {
  const [jsonData, setJsonData] = useState([]);

  setJsonData(dataTable);

  // useEffect(() => {
  //   const fetchdata = async () => {
  //     const response = await fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline');
  //     if(!response.ok){
  //       throw new Error('No response');
  //     }
  //     console.log(dataTable)
  //     setJsonData(dataTable)
  //     const data = await response.json()
  //     // setJsonData(data);
  //   // Fetch the JSON data from the file (replace with your file URL)
  //   }; fetchdata();}, []);

  // Function to generate table headers dynamically based on JSON keys
  const renderTableHeaders = () => {
    if (jsonData.length === 0) return null;

    const headers = Object.keys(jsonData[0]);

    return (
      <tr>
        {headers.map((header) => (
          <th key={header}>{header}</th>
        ))}
      </tr>
    );
  };

  // Function to render table rows dynamically based on JSON data
  const renderTableRows = () => {
    return jsonData.map((item, index) => (
      <tr key={index}>
        {Object.values(item).map((value, subIndex) => (
          <td key={subIndex}>{value}</td>
        ))}
      </tr>
    ));
  };

  return (
    <div>
      <h1>Data Table</h1>
      <table>
        <thead>{renderTableHeaders()}</thead>
        <tbody>{renderTableRows()}</tbody>
      </table>
    </div>
  );
}

export default Able;
