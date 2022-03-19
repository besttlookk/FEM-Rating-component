import React, { useContext } from "react";
import { AppContext } from "../contexts/appContext";

const Bubble = ({ children, value, interective }) => {
  const { rating, setRating } = useContext(AppContext);
  return (
    <div
      className={`rating   ${interective ? "rating--interactive" : ""} ${
        rating === value ? "rating--active" : ""
      }`}
      onClick={() => setRating(value)}
    >
      {children}
    </div>
  );
};

export default Bubble;
