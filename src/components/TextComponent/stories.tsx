import TextComponent from ".";

const story = {
  title: "TextComponent",
  component: TextComponent,
  args: {
    children:
      `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
      Quidem minus nulla tenetur numquam rem quisquam id reiciendis 
      magni nobis cumque, veritatis consectetur eveniet provident explicabo impedit. 
      Earum ipsa harum repellendus.`,
  },
  argTypes: {
    children: { type: "string" },
  },
};
export default story;

export const Template = (args: any) => <TextComponent {...args} />;
