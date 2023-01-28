import { screen } from "@testing-library/react";
import Footer from ".";
import renderTheme from "../../styles/renderTheme";

describe("<Footer />", () => {
  it("should render", () => {
    const { container } = renderTheme(<Footer html={"<h1>Olá</h1>"} />);
    expect(screen.getByRole("heading", { name: "Olá" })).toBeInTheDocument();
    expect(container).toMatchInlineSnapshot(`
      .c1 {
        max-width: 1200px;
        margin: 0 auto;
        padding: 32px;
      }

      .c2 {
        font-size: 24px;
      }

      .c0 {
        text-align: center;
      }

      .c0 a {
        color: inherit;
        -webkit-text-decoration: none;
        text-decoration: none;
        font-size: 16px;
      }

      <div>
        <footer
          class="c0"
        >
          <div
            class="c1"
          >
            <p
              class="c2"
            >
              <h1>
                Olá
              </h1>
            </p>
          </div>
        </footer>
      </div>
    `);
  });
});
