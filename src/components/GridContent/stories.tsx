import TextComponent from ".";
import mock from "../GridTwoColumns/mock";

const story = {
  title: "TextComponent",
  component: TextComponent,
  args: mock,
};
export default story;

export const Template = (args: any) => <TextComponent {...args} />;
