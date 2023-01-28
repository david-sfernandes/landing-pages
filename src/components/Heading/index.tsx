import Container from "./style";

export default function Heading({
  children,
  darkColor = true,
  as = "h1",
  size = "xl",
  uppercase = false,
}: HeadingProps) {
  return (
    <Container darkColor={darkColor} as={as} size={size} uppercase={uppercase}>
      {children}
    </Container>
  );
}
