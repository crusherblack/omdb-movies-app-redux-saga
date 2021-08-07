import { render, screen } from "@testing-library/react";
import Home from "pages/home";

test("renders home page", () => {
  render(<Home />);
  const linkElement = screen.getByText(/OMDb Apps/i);
  expect(linkElement).toBeInTheDocument();
});
