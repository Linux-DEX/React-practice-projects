import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeYearOfService, getYearOfService } from "./feature/GlobalData.js";

const Navbar = () => {
  const [yearOfService, setYearOfService] = useState("");

  const dispatch = useDispatch();

  const year = [2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025];

  useEffect(() => {
    const savedYear = localStorage.getItem("yearOfService");
    if (savedYear) {
      const parsedYear = JSON.parse(savedYear);
      setYearOfService(parsedYear);
      dispatch(changeYearOfService(parsedYear));
    }
  }, [dispatch]);

  useEffect(() => {
    if (!localStorage.getItem("yearOfService")) {
      dispatch(changeYearOfService(2017));
    }
    console.log("Year of Service changed:", yearOfService);
  }, [yearOfService]);

  const handleChange = (e) => {
    const selectedYear = e.target.value;

    setYearOfService(selectedYear);
    dispatch(changeYearOfService(selectedYear));
    window.location.reload(true);
  };

  return (
    <div>
      <lable htmlFor="yearOfService">selecte year of service</lable>
      <br />
      <select
        name="yearOfService"
        id="yearOfService"
        value={yearOfService}
        onChange={handleChange}
      >
        <br />
        {/* <option value="">select a year</option> */}
        <option default value="2017">
          2017
        </option>
        {year.map((year, index) => (
          <option key={index} value={year}>
            {year}
          </option>
        ))}
      </select>
      <br />
    </div>
  );
};

export default Navbar;
