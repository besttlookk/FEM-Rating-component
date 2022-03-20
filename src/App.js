import React, { useContext } from "react";
import Footer from "./components/Footer";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import { AppContext } from "./contexts/appContext";

function App() {
  const { step } = useContext(AppContext);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-bg font-primary">
      <main className="flex items-center justify-center ">
        {/* wrap : parent element */}
        <div
          className="h-96 w-90w"
          style={{ perspective: "1000px", maxWidth: "368px" }}
        >
          {/* Child element that flip */}
          <div
            className="relative w-full h-full transition duration-1000 "
            style={{
              transformStyle: "preserve-3d",
              transform: step === 2 ? "rotateY(-180deg)" : "",
            }}
          >
            {/* front */}
            <div
              className="absolute top-0 left-0 w-full h-full py-6 px-7 rounded-2xl bg-card-bg"
              style={{ backfaceVisibility: "hidden" }}
            >
              <StepOne />
            </div>

            {/* back */}
            <div
              className="absolute w-full h-full py-6 px-7 rounded-2xl bg-card-bg "
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
            >
              <StepTwo />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
