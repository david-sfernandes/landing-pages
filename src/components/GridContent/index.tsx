import Heading from "../Heading";
import SectionBackground from "../SectionBackground";
import TextComponent from "../TextComponent";
import Container, { Html } from "./style";

export default function GridContent({
  title,
  html,
  background = false,
}: GridContentProps) {
  return (
    <SectionBackground background={background}>
      <Container>
        <Heading uppercase darkColor={!background} as="h2">
          {title}
        </Heading>
        <Html>
          <TextComponent>{html}</TextComponent>
        </Html>
      </Container>
    </SectionBackground>
  );
}
