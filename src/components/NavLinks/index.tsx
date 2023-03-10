import MenuLink from "../MenuLink";
import Container from "./style";

export default function NavLinks({links = []}: NavLinksProps) {
  return (
    <Container aria-label="Main menu">
      {links.map((link) => (
        <MenuLink key={link.link} {...link}/>
      ))}
    </Container>
  )
}