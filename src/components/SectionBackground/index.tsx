import { ReactNode } from "react";
import SectionContainer from "../SectionContainer";
import Container from "./style";

export default function SectionBackground({children, background = false}: {
  children: ReactNode;
  background?: boolean;
}) {
  return (
    <Container background={background}>
      <SectionContainer>
        {children}
      </SectionContainer>
    </Container>
  )
}