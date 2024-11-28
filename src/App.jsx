import React from "react"
import Goals from "./components/Goals";
import { BackgroundBoxesDemo } from "./components/ui/BackgroundBoxesDemo";
import Card from "./components/Card";
import FlipCardSection from "./components/FlipCardSection";
import Info from "./components/Info";
import Offerings from "./components/Offerings";



function App() {

  return (
    <div>
      <BackgroundBoxesDemo  /> 
       <Goals />
      <Card/>
      <FlipCardSection/>
      <Offerings/>
    </div>
  );
}

export default App
