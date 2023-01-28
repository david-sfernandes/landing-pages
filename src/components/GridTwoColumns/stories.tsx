import GridTwoColumns from ".";
import mock from './mock';

const story = {
  title: "GridTwoColumns",
  component: GridTwoColumns,
  args: mock
};
export default story;

export const Template = (args: any) => <GridTwoColumns {...args} />;
