import { render, screen } from "@testing-library/react";
import Alert from "./index";

describe("Alert", () => {
  it("should render No Movies Available!", () => {
    render(<Alert loading={false} movies={[]} error="" />);
    const el = screen.getByText(/No Movies Available!/i);
    expect(el).toBeInTheDocument();
  });
});
