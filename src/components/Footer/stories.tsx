import Footer from ".";

const story = {
  title: "Footer",
  component: Footer,
  args: {
    html: "Hello World!",
  }
};
export default story;

export const Template = (args: any) => <Footer {...args} />;
