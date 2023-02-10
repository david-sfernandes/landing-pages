import Heading from "../Heading";
import SectionBackground from "../SectionBackground";
import TextComponent from "../TextComponent";
import Container, { Grid, GridElement, Image } from "./style";

export default function GridImage({title, description, grid, background = false}: GridImageProps) {
  return (
    <SectionBackground background={background}>
      <Container>
        <Heading size="xl" uppercase darkColor={!background} as="h2">
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>
        <Grid>
          {grid?.map((el) => (
            <GridElement key={`${el.srcImg}${el.altText}`}>
              <Image src={el.srcImg} alt={el.altText} />
            </GridElement>
          ))}
        </Grid>
      </Container>
    </SectionBackground>
  )
}