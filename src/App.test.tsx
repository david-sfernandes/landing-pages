import App from "./App";
import renderTheme from "./styles/renderTheme";

describe("<App/>", () => {
  it("should render App.", () => {
    renderTheme(<App />);
  });
});
