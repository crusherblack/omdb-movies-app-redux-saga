import { render, screen } from "@testing-library/react";
import Card from "./index";

describe("Alert", () => {
  it("should render Card with batman", () => {
    render(
      <Card
        movie={{
          Poster: "",
          Title: "batman",
          Year: 2018,
        }}
      />
    );
    const el = screen.getByText(/batman/i);
    expect(el).toBeInTheDocument();
  });
});
