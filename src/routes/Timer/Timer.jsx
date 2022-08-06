import { useEffect, useState } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      console.log("tick");
      setCount((prev) => prev + 1);
    }, 1000);
    console.log("Created timer " + id);
    return () => {
      console.log("Destroyed timer " + id);
      clearInterval(id);
    };
  }, []);

  return (
    <>
      <h1>Timer</h1>
      <p>{count}</p>
    </>
  );
};

export default Timer;
