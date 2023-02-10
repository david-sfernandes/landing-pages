import { useEffect, useState } from "react";
import { mapData } from "./api/map-data";
import Base from "./Base";
import GridContent from "./components/GridContent";
import GridImage from "./components/GridImage";
import GridText from "./components/GridText";
import GridTwoColumns from "./components/GridTwoColumns";
// import mockBase from "./Base/mock";
import Loading from "./components/Loading";
import PageNotFound from "./components/PageNotFound";
import pageData from "./api/dados.json"

export default function App() {
  const [data, setData] = useState<MappedData>();
  useEffect(() => {
    const load = async () => {
      try {
        // const data = await fetch(
        //   "http://localhost:1337/api/pages/?filters[slug]=landing-page&populate=deep"
        // )
        //   .then((res) => res.json())
        //   .then(({ attributes }) => mapData([attributes]))
        //   .then((res) => setData(res[0]));
        const mapped = mapData(pageData)
        setData(mapped[0])
        
        // return data;
      } catch (e) {
        console.error("%cError on load page: ", "color: yellow");
        console.error(e);
      }
    };

    load();
  }, []);

  if (data === undefined) {
    return <PageNotFound />;
  }

  if (data && !data.slug) {
    return <Loading />;
  }

  const { menu, sections, footerHtml, slug } = data;
  const { links, text, link, srcImg } = menu;

  // return <Base {...mockBase} />;
  return (
    <Base
      links={links}
      footerHtml={footerHtml}
      logoData={{ text, link, srcImg }}
    >
      {sections.map((section, index) => {
        const { component } = section;
        const key = `${slug}-${index}`

        if (component === 'section.section-two-columns') {
          return <GridTwoColumns key={key} {...section} />;
        }

        if (component === 'section.section-content') {
          return <GridContent key={key} {...section} />;
        }

        if (component === 'section.section-grid-text') {
          return <GridText key={key} {...section} />;
        }

        if (component === 'section.section-grid-image') {
          return <GridImage key={key} {...section} />;
        }
        return null;
      })}
    </Base>
  );
}
