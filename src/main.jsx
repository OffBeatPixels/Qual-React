import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// import 'rsuite/dist/rsuite.min.css';
//  import { CustomProvider } from 'rsuite'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import { Meeting } from "./components/Meeting";
import React, { Suspense, useEffect } from "react";
import Error from "./assets/Error404.gif"
import { WobbleCardDemo } from "./components/ui/WobbleCardDemo.jsx";

import ScrollProvider from "./components/Animations/ScrollProvider.jsx";
import Capabilites from "./components/Capabilites.jsx";
import { AnimatePresence } from "framer-motion";

// Lazy load the components
      const Company = React.lazy(() =>
        import("./components/Navbar/Nav-pages/Company.jsx")
      );
      const Career = React.lazy(() =>
        import("./components/Navbar/Nav-pages/Career.jsx")
      );
      const Services = React.lazy(() => import("./components/Services.jsx"));
      const Services1 = React.lazy(() =>
        import("./components/Offerings/Services1.jsx")
      );
      const Blog = React.lazy(() => import("./components/Blog.jsx"));
      const Usecase = React.lazy(() => import("./components/Usecase.jsx"));
      const ContactUs = React.lazy(() => import("./components/ContactUs.jsx"));

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error occurred:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}
const ScrollTop = ()=>{
    const {pathname} =useLocation()

  useEffect(()=>{
    window.scrollTo(0,0)
  },[pathname])

  return null;
  
}




const MainLayout = () => {
  const location = useLocation();


  return (
    <div className="flex flex-col overflow-hidden">
      <Navbar  />
      <AnimatePresence  >
        <Suspense fallback={<div className="text-center">Loading .... </div>}>
          <ScrollTop />
          {/* <ScrollProvider> */}
            <div id="scroll-container" className="">
              <Routes location={location}>
                <Route index element={<App />} />
                <Route path="/company" element={<Company />} />
                <Route path="/careers" element={<Career />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services1" element={<Services1 />} />
                <Route path="/capabilites" element={<Capabilites />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/usecase" element={<WobbleCardDemo />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="*" element={<App />} />
              </Routes>
           
            <Meeting />
           <Footer />
       </div>
          {/* </ScrollProvider> */}
        </Suspense>
      </AnimatePresence>
      
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  // <CustomProvider >
  <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
    
    <ErrorBoundary
      fallback={
        <div className="flex justify-center items-center md:mt-20 h-full md:h-60 ">
          <img src={Error} alt="Loading..." />
        </div>
      }
    >
      <MainLayout />
    </ErrorBoundary>
  </Router>
  //  </CustomProvider>
);
