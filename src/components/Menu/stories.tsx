import Menu from '.';
import mock from '../NavLinks/mock';

const story = {
  title: 'Menu',
  component: Menu,
  args: {
    links: mock,
    logoData: {
      text: 'Logo',
      link: '#target',
      srcImg: '',
    },
  }
};

export default story;

export const Template = (args: any) => {
  return (
    <div style={{ height: '300vh', background: 'gray' }}>
      <Menu {...args} />
    </div>
  );
}