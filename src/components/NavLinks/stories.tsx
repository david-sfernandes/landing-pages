import NavLinks from ".";
import links from "./mock";

const story = {
  title: "NavLinks",
  component: NavLinks,
  args: {
    links: links,
  },
  argTypes: {
    children: { type: "" }
  }
};
export default story;

export const Template = (args: any) => <NavLinks {...args} />;
