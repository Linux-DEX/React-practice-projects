import React, { useEffect, useState } from "react";
import { Subject } from "../../Rxjs/subjects";

const Receiver = () => {
  const [receivedData, setReceivedData] = useState(null);

  useEffect(() => {
    const subscription = Subject.subscribe((data) => {
      setReceivedData(data.inputValue);
    });
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <div>
      <h2>reciever</h2>
      <p>Received Data: {receivedData}</p>
    </div>
  );
};

export default Receiver;
