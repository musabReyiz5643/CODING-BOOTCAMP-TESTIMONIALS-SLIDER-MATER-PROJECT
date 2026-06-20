import "./App.css";

import MainBackground from "./components/MainBackground";
import FirstSide from "./components/FirstSide";
import SecondSide from "./components/SecondSide";
import { useState } from "react";

const App = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="w-full min-h-screen relative ">
      <MainBackground />
      <div className="w-full bg-(--bg-main-color) min-h-screen flex flex-col xl:flex-row-reverse p-5 gap-10 items-center justify-center">
        <FirstSide isActive={isActive} setIsActive={setIsActive} />
        <SecondSide isActive={isActive} />
      </div>
    </div>
  );
};

export default App;
