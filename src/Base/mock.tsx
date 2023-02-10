/* eslint-disable import/no-anonymous-default-export */
import links from '../components/NavLinks/mock';
import gridMock from "../components/GridText/mock";
import GridText from "../components/GridText";

export default {
  children: (
    <>
      <GridText {...gridMock}/>
      <GridText {...gridMock} background/>
    </>
  ),
  links: links,
  logoData: {
    text: 'Logo',
    link: '#'
  },
  footerHtml: '<p>Footer test</p>',
}