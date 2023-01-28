import GridImage from ".";
import mock from './mock';

const story = {
  title: "GridImage",
  component: GridImage,
  args: mock,
};
export default story;

export const Template = (args: any) => <GridImage {...args} />;
