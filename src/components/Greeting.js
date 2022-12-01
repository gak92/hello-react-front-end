import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getGreeting } from "../redux/greetingSlice";

const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greeting);

  useEffect(() => {
    dispatch(getGreeting());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h3>Random Message (Generate on page refresh)</h3>
      <p>{greeting.greeting}</p>
    </div>
  );
};

export default Greeting;
