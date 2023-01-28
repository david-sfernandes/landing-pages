import { ReactNode } from "react";
import Container from "./style";

export default function SectionContainer({
  children,
}: {
  children: ReactNode;
}) {
  return <Container>{children}</Container>;
}
