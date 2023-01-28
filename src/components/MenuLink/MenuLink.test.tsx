import { screen } from "@testing-library/react";
import MenuLink from ".";
import renderTheme from "../../styles/renderTheme";

describe("<MenuLink />", () => {
  it("should render a link", () => {
    renderTheme(<MenuLink link='http://localhost'>Text</MenuLink>);

    expect(screen.getByRole('link', {name: 'Text'})).toHaveAttribute('target', '_self');
  });

  it("should open in a new tab", () => {
    renderTheme(<MenuLink link='http://localhost' newTab>Text</MenuLink>);
  
    expect(screen.getByRole('link', {name: 'Text'})).toHaveAttribute('target', '_blank');
  });

  it("should match snapshot", () => {
    renderTheme(<MenuLink link='http://localhost' newTab>Text</MenuLink>);
  
    expect(screen.getByRole('link', {name: 'Text'})).toMatchSnapshot();
  });
});