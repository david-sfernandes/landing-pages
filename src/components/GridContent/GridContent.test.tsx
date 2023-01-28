import GridContent from '.';
import renderTheme from '../../styles/renderTheme';

import mock from './mock';

describe('<GridContent />', () => {
  it('should render grid content', () => {
    const { container } = renderTheme(<GridContent {...mock} />);
    expect(container).toMatchSnapshot();
  });

  it('should render grid content with background active', () => {
    const { container } = renderTheme(
      <GridContent {...mock} background={true} />,
    );
    expect(container).toMatchSnapshot();
  });
});