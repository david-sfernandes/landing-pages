import Footer from "../components/Footer";
import GoTop from "../components/GoTop";
import Menu from "../components/Menu";
import Container from "./style";

export default function Base({
  links,
  logoData,
  footerHtml,
  children,
}: BaseProps) {
  return (
    <>
      <Menu links={links} logoData={logoData} />
      <Container>
        {children}
        <Footer html={footerHtml} />
      </Container>
      <GoTop />
    </>
  );
}
