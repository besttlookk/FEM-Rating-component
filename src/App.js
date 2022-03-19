import React, { useContext } from "react";
import Card from "./components/Card";
import Footer from "./components/Footer";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import { AppContext } from "./contexts/appContext";

function App() {
  const { step } = useContext(AppContext);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-bg font-primary">
      <main className="flex items-center justify-center ">
        <Card>
          {step === 1 && <StepOne />}

          {step === 2 && <StepTwo />}
        </Card>
      </main>
      <Footer />
    </div>
  );
}

export default App;
