import { mapMenu } from "./map-menu";
import { mapSections } from "./map-sections";

export const mapData = (pagesData: Data[] = []) => {
  return pagesData.map((data) => {
    const {
      footer_text: footerHtml = "",
      slug = "",
      title = "",
      sections = [],
      menu,
    } = data;

    return {
      footerHtml,
      slug,
      title,
      sections: mapSections(sections) as MappedSection[],
      menu: mapMenu(menu),
    };
  });
};
