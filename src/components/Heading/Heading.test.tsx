import { screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Heading from ".";
import renderTheme from "../../styles/renderTheme";
import { theme } from "../../styles/theme";

describe("<Heading />", () => {
  it("should render with default values.", () => {
    renderTheme(<Heading>Text</Heading>);
    const heading = screen.getByRole("heading", { name: "Text" });

    expect(heading).toHaveStyle({
      color: theme.colors.primary,
      "font-size": theme.font.sizes["3xl"],
      "text-transform": "none",
    });
  });

  it("should render with white color", () => {
    renderTheme(<Heading darkColor={false}>Text</Heading>);
    const heading = screen.getByRole("heading", { name: "Text" });

    expect(heading).toHaveStyle({
      color: theme.colors.white,
    });
  });

  it("should render correct heading sizes", () => {
    // sm
    const { rerender } = renderTheme(<Heading size="sm">Text</Heading>);
    const heading = screen.getByRole("heading", { name: "Text" });

    expect(heading).toHaveStyle({
      "font-size": theme.font.sizes.md,
    });

    // md
    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="md">texto</Heading>
      </ThemeProvider>
    );

    expect(screen.getByRole("heading", { name: "texto" })).toHaveStyle({
      "font-size": theme.font.sizes.lg,
    });

    // lg
    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="lg">texto</Heading>
      </ThemeProvider>
    );

    expect(screen.getByRole("heading", { name: "texto" })).toHaveStyle({
      "font-size": theme.font.sizes.xl,
    });
  });

  it("should render correct font-size when using mobile", () => {
    renderTheme(<Heading size="xl">Text</Heading>);
    const heading = screen.getByRole("heading", { name: "Text" });

    expect(heading).toHaveStyleRule("font-size", theme.font.sizes.lg, {
      media: theme.media.lteMedium,
    });
  });

  it('should render with uppercase letters', () => {
    renderTheme(<Heading uppercase>texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyle({
      'text-transform': 'uppercase',
    });
  });

  it('should render correct heading element', () => {
    renderTheme(<Heading as="h6">texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading.tagName.toLowerCase()).toBe('h6');
  });
});
