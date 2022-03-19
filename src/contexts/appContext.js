import React, { createContext, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [rating, setRating] = useState(0);
  const [step, setStep] = useState(1);

  const values = { rating, setRating, step, setStep };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export default AppProvider;
