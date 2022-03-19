import React from "react";
import Bubble from "./Bubble";
import Button from "./Button";
import { ReactComponent as StarIcon } from "../images/icon-star.svg";
import Number from "./Number";

const StepOne = () => {
  return (
    <div className="transition wrapper ">
      <Bubble>
        <StarIcon className="transform " />
      </Bubble>

      <h2 className="mt-6 text-2xl font-bold text-white">How did we do?</h2>
      <p className="mt-3 text-text text-primary-size">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>

      {/* Rating container */}
      <div className="flex justify-between mt-6">
        {[1, 2, 3, 4, 5].map((value) => (
          <Number value={value} key={value} />
        ))}
      </div>

      <div className="mt-6">
        <Button />
      </div>
    </div>
  );
};

export default StepOne;
