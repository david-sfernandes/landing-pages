import Base from ".";
import renderTheme from "../styles/renderTheme";
import mock from "./mock";

describe("<Base />", () => {
  it("should render with default values.", () => {
    const { container } = renderTheme(<Base {...mock} />);

    expect(container).toMatchSnapshot();
  });
});
