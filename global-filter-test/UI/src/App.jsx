import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeYearOfService, getYearOfService } from "./feature/GlobalData.js";
import Display from "./Display.jsx";
import Navbar from "./Navbar.jsx";
import request from "./api.js";

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // const [yearOfService, setYearOfService] = useState("");

  const yearOfService = useSelector((state) => state.filters.yearOfService);

  // const dispatch = useDispatch();
  //
  // const year = [2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025];
  //
  // useEffect(() => {
  //   const savedYear = localStorage.getItem("yearOfService");
  //   if (savedYear) {
  //     const parsedYear = JSON.parse(savedYear);
  //     setYearOfService(parsedYear);
  //     dispatch(changeYearOfService(parsedYear));
  //   }
  // }, [dispatch]);
  //
  // useEffect(() => {
  //   console.log("Year of Service changed:", yearOfService);
  // }, [yearOfService]);
  //
  // const handleChange = (e) => {
  //   const selectedYear = e.target.value;
  //
  //   setYearOfService(selectedYear);
  //   dispatch(changeYearOfService(selectedYear));
  //   window.location.reload(true);
  // };

  const handleClick = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await request.get("/", {
        headers: {
          Authorization: "Bearer token-here",
          // year_of_service: yearOfService,
        },
      });
      // const response = await fetch("http://localhost:8000/", {
      //   method: "GET",
      //   headers: {
      //     Authorization: "Bearer your-token-here",
      //     "Content-Type": "application/json",
      //     year_of_service: yearOfService,
      //   },
      // });

      // dispatch(changeYearOfService(yearOfService));

      // if (!response.ok) {
      //   throw new Error("Network response was not ok");
      // }

      // const result = await response.json();
      // setData(result);
      setData(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleClicklistapi = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await request.get("/list", {
        headers: {
          Authorization: "Bearer your-token-here",
          year_of_service: yearOfService,
        },
      });
      // const response = await fetch("http://localhost:8000/list", {
      //   method: "GET",
      //   headers: {
      //     Authorization: "Bearer your-token-here",
      //     "Content-Type": "application/json",
      //     year_of_service: yearOfService,
      //   },
      // });

      // dispatch(changeYearOfService(yearOfService));

      // if (!response.ok) {
      //   throw new Error("Network response was not ok");
      // }

      // const result = await response.json();
      // setData(result);
      setData(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleClickAdminapi = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await request.get("/api/admin", {
        headers: {
          Authorization: "Bearer your-token-here",
          year_of_service: yearOfService,
        },
      });
      // const response = await fetch("http://localhost:8000/api/admin", {
      //   method: "GET",
      //   headers: {
      //     Authorization: "Bearer your-token-here",
      //     "Content-Type": "application/json",
      //     year_of_service: yearOfService,
      //   },
      // });

      // dispatch(changeYearOfService(yearOfService));

      // if (!response.ok) {
      //   throw new Error("Network response was not ok");
      // }

      // const result = await response.json();
      setData(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <h1>API Call with Header Example</h1>

      <Display />

      {/* <lable htmlFor="yearOfService">selecte year of service</lable> */}
      {/* <br /> */}
      {/* <select */}
      {/*   name="yearOfService" */}
      {/*   id="yearOfService" */}
      {/*   value={yearOfService} */}
      {/*   onChange={handleChange} */}
      {/* > */}
      {/*   <br /> */}
      {/*   <option value="">select a year</option> */}
      {/*   {year.map((year, index) => ( */}
      {/*     <option key={index} value={year}> */}
      {/*       {year} */}
      {/*     </option> */}
      {/*   ))} */}
      {/* </select> */}
      {/* <br /> */}

      <button onClick={handleClick} disabled={loading}>
        {loading ? "Loading..." : "Fetch Data"}
      </button>

      <button onClick={handleClicklistapi} disabled={loading}>
        {loading ? "Loading..." : "Fetch Data list"}
      </button>

      <button onClick={handleClickAdminapi} disabled={loading}>
        {loading ? "Loading..." : "Fetch Data admin api"}
      </button>

      {error && <p>Error: {error}</p>}

      {data && (
        <div>
          <h2>Data from API:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default App;
