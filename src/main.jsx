import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import { Meeting } from "./components/Meeting";
import React, { Suspense } from "react";
import Error from "./assets/Error404.gif"

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

const MainLayout = () => {
  const location = useLocation();
  console.log("current location is : " ,location );
  

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Suspense fallback={<div className="text-center">Loading .... </div>}>
          <Routes location={location}>
            <Route index element={<App />} />
            <Route path="/company" element={<Company />} />
            <Route path="/careers" element={<Career />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services1" element={<Services1 />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/usecase" element={<Usecase />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="*" element={<App />} />
          </Routes>
        </Suspense>
      </main>
      <Meeting />
      <Footer />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
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
);
