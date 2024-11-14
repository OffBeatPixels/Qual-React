
import NavbarComp from "./components/Navbar/Navbar"
import Hero from './components/Hero';
import PixiComponent from "./components/PixiComponent";
import Info from "./components/Info";
import Goals from "./components/Goals";
import { BackgroundBoxesDemo } from "./components/ui/BackgroundBoxesDemo";
import { HoverEffect } from "./components/ui/Card-hover-effect";
import { projects } from "./components/ui/CardHoverEffectDemo";
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/Card";


function App() {

  return (
    <div>
      <Navbar />
      <BackgroundBoxesDemo />
      {/* <Hero/> */}
      {/* <PixiComponent/> */}
      <Goals />
      <Card/>
      {/* <HoverEffect items={projects} /> */}
      {/* <Info/> */}
    </div>
  );
}

export default App
