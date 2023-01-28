import Heading from ".";

const story = {
  title: "Heading",
  component: Heading,
  args: {
    children: "Light heading text.",
    darkColor: true,
    as: "h1",
    size: "lg",
    uppercase: false,
  },
  argTypes: {
    children: { type: "string" },
    as: {
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
      control: { type: "select" },
    },
    size: {
      options: ["3xl", "lg", "md", "sm"],
      control: { type: "option" },
    },
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};
export default story;

export const Light = (args: JSX.IntrinsicAttributes & HeadingProps) => (
  <Heading {...args} />
);
export const Dark = (args: JSX.IntrinsicAttributes & HeadingProps) => (
  <Heading {...args} />
);

Light.parameters = {
  backgrounds: {
    default: "light",
  },
};

Dark.args = {
  children: "Dark heading text",
  darkColor: false,
};
