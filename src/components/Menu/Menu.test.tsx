/* eslint-disable testing-library/no-node-access */
import { fireEvent, screen } from "@testing-library/react";
import Menu from ".";
import mock from "../NavLinks/mock";
import { theme } from "../../styles/theme";
import renderTheme from "../../styles/renderTheme";

const logoData = {
  text: "Logo",
  link: "#target",
};

describe("<Menu />", () => {
  it("should render Logo and Main Menu Nav", () => {
     renderTheme(
      <Menu links={mock} logoData={logoData} />
    );
    expect(screen.getByRole("heading", { name: "Logo" })).toBeInTheDocument();
    expect(
      screen.getByRole("navigation", { name: "Main menu" })
    ).toBeInTheDocument();
  });

  it("should render menu mobile and button for open and close the menu", () => {
    renderTheme(<Menu links={mock} logoData={logoData} />);

    const button = screen.getByLabelText("Open/Close menu");
    const menuContainer = screen.getByRole("banner");
    
    expect(button).toHaveStyle({ display: "none" });
    expect(button).toHaveStyleRule("display", "flex", {
      media: theme.media.lteMedium,
    });

    expect(menuContainer).toHaveStyleRule("opacity", "0", {
      media: theme.media.lteMedium,
    });
    expect(screen.getByLabelText("Open menu")).toBeInTheDocument();

    fireEvent.click(button);
    expect(menuContainer).toHaveStyleRule("opacity", "1", {
      media: theme.media.lteMedium,
    });
    expect(screen.getByLabelText("Close menu")).toBeInTheDocument();

    fireEvent.click(menuContainer);
    expect(menuContainer).toHaveStyleRule("opacity", "0", {
      media: theme.media.lteMedium,
    });
    expect(screen.getByLabelText("Open menu")).toBeInTheDocument();
  });

  // it("should not render links", () => {
  //   const { container } = renderTheme(<Menu logoData={logoData} links={mock} />);
    
  //   expect(container).toMatchSnapshot();
  // });
});
