import React from "react";

const Card = ({ children }) => {
  return (
    <div
      className="py-6 px-7 rounded-2xl w-90w bg-card-bg"
      style={{ maxWidth: "368px" }}
    >
      {children}
    </div>
  );
};

export default Card;
