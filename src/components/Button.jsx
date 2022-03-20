import React from "react";

const Button = ({ children, handleClick, disabled = false }) => {
  return (
    <button
      className="block w-full pt-3 pb-2 font-bold text-white uppercase transition duration-300 transform rounded-full shadow-lg hover:text-primary disabled:cursor-not-allowed disabled:bg-orange-300 disabled:text-white hover:bg-white active:translate-y-1 text-primary-size bg-primary"
      onClick={() => handleClick()}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
