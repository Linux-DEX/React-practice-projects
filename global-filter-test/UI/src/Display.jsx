import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getYearOfService } from "./feature/GlobalData";

const Display = () => {
  // const dispatch = useDispatch();
  //
  // useEffect(() => {
  //   dispatch(getYearOfService());
  // }, [dispatch]);

  // const yearOfService = useDispatch(getYearOfService());
  // useDispatch(getYearOfService());
  const yearOfService = useSelector((state) => state.filters.yearOfService);
  return (
    <>
      <h2>year Of service redux value - {yearOfService}</h2>
    </>
  );
};

export default Display;
