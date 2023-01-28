import Container from "./style";

export default function MenuLink({children, link, newTab = false}: MenuLinkProps) {
  const target = newTab ? '_blank' : '_self'
  return (
    <Container href={link} target={target}>
      {children}
    </Container>
  )
}