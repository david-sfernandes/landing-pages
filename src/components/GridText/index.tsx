import Heading from "../Heading";
import SectionBackground from "../SectionBackground";
import TextComponent from "../TextComponent";
import Container, { Grid, GridElement } from "./style";

export default function GridText({
  title,
  description,
  grid,
  background = false,
}: GridTextProps) {
  return (
    <SectionBackground background={background}>
      <Container>
        <Heading size="xl" uppercase darkColor={!background} as="h2">
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>
        <Grid>
          {grid.map((el) => (
            <GridElement key={el.title}>
              <Heading size="md" darkColor={!background} as="h3">
                {el.title}
              </Heading>
              <TextComponent>{el.description}</TextComponent>
            </GridElement>
          ))}
        </Grid>
      </Container>
    </SectionBackground>
  );
}
