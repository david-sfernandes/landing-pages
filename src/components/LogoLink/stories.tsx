import LogoLink from ".";

const story = {
  title: "LogoLink",
  component: LogoLink,
  args: {
    text: "LogoLink",
    srcImg: "assets/images/logo.svg",
    link: "http://localhost",
  },
};
export default story;

export const ImageOnly = (args: any) => <LogoLink {...args} />;
export const TextOnly = (args: any) => <LogoLink {...args} />;

TextOnly.args = {
  srcImg: "",
};
