/* eslint-disable testing-library/no-node-access */
import { screen } from "@testing-library/react";
import TextComponent from ".";
import renderTheme from "../../styles/renderTheme";

describe("<TextComponent />", () => {
  it("should render a text", () => {
    renderTheme(<TextComponent>Text</TextComponent>);

    expect(screen.getByText("Text")).toBeInTheDocument();
  });
  it("should match snapshot", () => {
    const { container } = renderTheme(<TextComponent>Text</TextComponent>);

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        font-size: 24px;
      }

      <p
        class="c0"
      >
        Text
      </p>
    `);
  });
});
