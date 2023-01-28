import { screen } from "@testing-library/react";
import NavLink from ".";
import renderTheme from "../../styles/renderTheme";
import { theme } from "../../styles/theme";

import mock from "./mock";

describe("<NavLink />", () => {
  it("should render links", () => {
    renderTheme(<NavLink links={mock} />);

    expect(screen.getAllByRole("link")).toHaveLength(mock.length);
  });

  it("should have media", () => {
    const { container } = renderTheme(<NavLink links={mock} />);

    expect(container).toHaveStyleRule("flex-flow", "column wrap", {
      media: theme.media.lteMedium,
    });
  });

  it("should not render links", () => {
    renderTheme(<NavLink />);

    expect(screen.queryAllByText(/links/i)).toHaveLength(0);
  });

  // it("should match snapshot", () => {
  //   const { container } = renderTheme(<NavLink links={mock} />);

  //   expect(container).toMatchSnapshot();
  // });
});
