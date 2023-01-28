import GridText from ".";
import mock from "./mock";

const story = {
  title: "GridText",
  component: GridText,
  args: mock,
};
export default story;

export const Template = (args: any) => <GridText {...args} />;
