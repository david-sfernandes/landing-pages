import Base from ".";
import mock from "./"

const story = {
  title: "Templates/Base",
  component: Base,
  args: mock
};
export default story;

export const Template = (args: any) => <Base {...args} />;
