import { screen } from "@testing-library/react";
import GoTop from ".";
import renderTheme from "../../styles/renderTheme";

describe("<GoTop />", () => {
  it("should render a go to top button", () => {
    const { container } = renderTheme(<GoTop />);
    expect(screen.getByRole("link", { name: "Go to top" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Go to top" })).toHaveAttribute(
      "href",
      "#"
    );
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        position: fixed;
        background: #0A1128;
        color: #ffffff;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        width: 4rem;
        height: 4rem;
        bottom: 2rem;
        right: 2rem;
        z-index: 6;
      }

      <div>
        <a
          aria-label="Go to top"
          class="c0"
          href="#"
          title="Go to top"
        >
          <svg
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.5 15.75l7.5-7.5 7.5 7.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
      </div>
    `);
  });
});
