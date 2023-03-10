import SectionContainer from "../SectionContainer";
import TextComponent from "../TextComponent";
import Container from "./style";

export default function Footer({ html }: FooterProps) {
  return (
    <Container>
      <SectionContainer>
        <TextComponent>{html}</TextComponent>
      </SectionContainer>
    </Container>
  );
}
