import React, { useEffect, useState } from "react";

const CouterExampler = () => {
  const [count, setCount] = useState(0);

  //   useEffect(() => {
  //     const functionIdentifier = setInterval(() => {
  //       console.log("Interval is running...");
  //       setCount(count + 1);
  //     }, 1000);

  //     return () => {
  //       clearInterval(functionIdentifier);
  //     };
  //   }, [count]);

  // more simple version of this
  useEffect(() => {
    const functionIdentifier = setInterval(() => {
      console.log("Interval is running...");
      setCount((prev) => prev + 1);
    }, 1000);
  }, []);

  return (
    <>
      <p>Couter is : {count}</p>
    </>
  );
};

export default CouterExampler;
