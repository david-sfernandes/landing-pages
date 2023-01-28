import MenuLink from ".";

const story = {
  title: "MenuLink",
  component: MenuLink,
  args: {
    children: "MenuLink",
    link: 'https://www.google.com.br'
  },
  argTypes: {
    children: { type: "string" }
  }
};
export default story;

export const Template = (args: any) => (
  <div style={{ display: 'flex'}}>
    <MenuLink {...args} />
  </div>
);
