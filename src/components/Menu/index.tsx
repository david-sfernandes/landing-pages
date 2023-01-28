import { useState } from "react";
import SectionContainer from "../SectionContainer";
import Container, { Button, MenuContainer } from "./style";
import LogoLink from "../LogoLink";
import NavLinks from "../NavLinks";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";

export default function Menu({links=[], logoData}: MenuProps) {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button
        visible={visible}
        onClick={() => setVisible(true)}
        aria-label="Open/Close menu"
      >
      {visible ? (
          <XMarkIcon aria-label="Close menu" />
        ) : (
          <Bars3Icon aria-label="Open menu" />
        )}
      </Button>
      <Container
        visible={visible}
        onClick={() => setVisible(false)}
      >
        <SectionContainer>
          <MenuContainer>
            <LogoLink {...logoData}/>
            <NavLinks links={links}/>
          </MenuContainer>
        </SectionContainer>
      </Container>
    </>
  )
}