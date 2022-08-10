import { render, screen } from "@testing-library/react";
import App from "./App";

test("should render components", () => {
  render(<App />);

  const componentHome = screen.getByText(/Home/i);
  const componentDetails = screen.getByText(/Details/i);

  expect(componentHome).toBeInTheDocument();
  expect(componentDetails).toBeInTheDocument();
});
