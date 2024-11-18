import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom"; // Import the necessary router
import { BackgroundBoxesDemo } from "../components/ui/BackgroundBoxesDemo";

// Test if the BackgroundBoxesDemo component renders correctly
test("renders BackgroundBoxesDemo component", async () => {
  render(
    <BrowserRouter
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <BackgroundBoxesDemo />
    </BrowserRouter>
  );

  // Check if the BackgroundBoxesDemo component renders
const backgroundBoxesElement = screen.getByText((content, element) =>
  element.textContent.includes("Quality")
);
expect(backgroundBoxesElement).toBeInTheDocument();

});
