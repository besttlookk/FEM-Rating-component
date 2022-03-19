import React, { useContext } from "react";
import { AppContext } from "../contexts/appContext";

const Button = () => {
  const { setStep } = useContext(AppContext);
  return (
    <button
      className="block w-full pt-3 pb-2 font-bold text-white uppercase transition duration-500 transform rounded-full shadow-lg hover:text-primary hover:bg-white active:translate-y-1 text-primary-size bg-primary"
      onClick={() => setStep(2)}
    >
      Submit
    </button>
  );
};

export default Button;
