import Heading from "../Heading";
import Container from "./style";

export default function LogoLink({ text, srcImg="", link }: LogoLinkProps) {
  return (
    <Container href={link}>
      {!!srcImg && <img src={srcImg} alt={text} />}
      {!srcImg && <Heading size="sm" uppercase>{text}</Heading>}
    </Container>
  );
}
