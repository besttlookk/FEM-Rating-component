import React, { useContext } from "react";
import { AppContext } from "../contexts/appContext";
import { ReactComponent as Illustration } from "../images/illustration-thank-you.svg";

const StepTwo = () => {
  const { rating } = useContext(AppContext);
  return (
    <div className="flex flex-col items-center ">
      <Illustration className="transform scale-75" />

      <div className="px-4 py-1 mt-3 text-xs font-bold bg-gray-700 rounded-full md:pt-2 md:pb-1 text-primary md:px-5 md:text-primary-size">
        <p>You selected {rating} out of 5</p>
      </div>

      <h2 className="mt-3 text-xl font-bold text-white md:text-2xl">
        Thank you!
      </h2>

      <p className="mt-3 text-center text-text text-primary-size font-primary">
        {" "}
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
};

export default StepTwo;
