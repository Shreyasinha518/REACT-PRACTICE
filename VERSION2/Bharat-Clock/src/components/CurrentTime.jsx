import { useState,useEffect } from "react";
function CurrentTime ()  {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    console.log("INTERVAL HAS BEEN SETUP");
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalId);
      console.log("INTERVAL CANCELLED");
    };
  }, []);

  return (
    <p className="lead">
      This is the current time : {time.toLocaleDateString()}-{""}
      {time.toLocaleTimeString()}
    </p>
  );
};

export default CurrentTime;
