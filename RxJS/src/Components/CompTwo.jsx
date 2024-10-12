import React, { useEffect, useState } from "react";
import { onData } from "../Rxjs/dataService";

const Component2 = () => {
  const [receivedData, setReceivedData] = useState(null);

  useEffect(() => {
    const subscription = onData().subscribe((data) => {
      setReceivedData(data);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <div>
      <h2>Component 2</h2>
      <p>Received Data: {receivedData}</p>
    </div>
  );
};

export default Component2;
