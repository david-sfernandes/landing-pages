import Heading from "../Heading";
import SectionBackground from "../SectionBackground";
import TextComponent from "../TextComponent";
import Container, { Image, ImageContainer, TextContainer } from "./style";

export default function GridTwoColumns({
  title,
  text,
  srcImg,
  background = false,
}: GridTwoColumnsProps) {
  return (
    <SectionBackground background={background}>
      <Container>
        <TextContainer>
          <Heading uppercase darkColor={!background} as="h2">{title}</Heading>
          <TextComponent>{text}</TextComponent>
        </TextContainer>
        <ImageContainer>
          <Image src={srcImg} alt={title} />
        </ImageContainer>
      </Container>
    </SectionBackground>
  );
}
