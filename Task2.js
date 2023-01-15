import { useState, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);

    return () => {
      clearTimeout(timer);
      console.log("componentWillUnmount()");
    };
  });

  useEffect(() => {
    console.log("componentDidUpdate()");
  });

  useEffect(() => {
    console.log("componentDidMount()");
  }, []);

  useEffect(() => {
    console.log("componentDidMount() + componentDidUpdate()");
  }, [prop, state]);

  return <h1>I've rendered {count} times!</h1>;
}
