import { screen } from "@testing-library/react";
import LogoLink from ".";
import renderTheme from "../../styles/renderTheme";

describe("<LogoLink />", () => {
  it("should render text logo", () => {
    renderTheme(<LogoLink link="#target" text="My Link" />);
    const heading = screen.getByRole("heading", { name: "My Link" });

    expect(heading).toBeInTheDocument();
    expect(screen.getAllByRole("link")[0]).toHaveAttribute(
      "href",
      "#target"
    );
  });

  it("should render image logo", () => {
    renderTheme(<LogoLink link="#target" text="My Link" srcImg="image.jpg" />);
    const image = screen.getByRole("img");

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute(
      "src",
      "image.jpg"
    );
  });
  
  it("should match snapshot", () => {
    const { container } = renderTheme(
      <LogoLink link="#target" text="My Link" srcImg="image.jpg" />
    );
    expect(container).toMatchSnapshot();
  });
});
