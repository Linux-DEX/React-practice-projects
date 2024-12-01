import { useState, useEffect } from "react";
import axios from "axios";

const Axios2 = () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="App">
        <h1 style={{ color: "green" }}>Using Axios Library to Fetch Data</h1>
        <center>
          {data.map((dataObj, index) => {
            return (
              <div
                key={index}
                style={{
                  width: "15em",
                  backgroundColor: "#CD8FFD",
                  padding: 2,
                  borderRadius: 10,
                  marginBlock: 10,
                }}
              >
                <p style={{ fontSize: 20, color: "white" }}>{dataObj.name}</p>
              </div>
            );
          })}
        </center>
      </div>
    </>
  );
};

export default Axios2;
