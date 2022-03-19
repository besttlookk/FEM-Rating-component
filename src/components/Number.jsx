import React from "react";
import Bubble from "./Bubble";

const Number = ({ value }) => {
  return (
    <Bubble interective={true} value={value}>
      <span className="pt-1 font-bold text-primary-size">{value}</span>
    </Bubble>
  );
};

export default Number;
