import SectionContainer from ".";

const story = {
  title: "SectionContainer",
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>SectionContainer</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa
          temporibus soluta harum dolores consequuntur ab minima id, quis neque,
          quisquam ipsa accusamus quia non veritatis ipsum. Ipsam libero in
          necessitatibus.
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { type: "" },
  },
};
export default story;

export const Template = (args: any) => <SectionContainer {...args} />;
