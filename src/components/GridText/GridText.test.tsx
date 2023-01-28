import GridText from '.';
import renderTheme from '../../styles/renderTheme';

import mock from './mock';

describe('<GridText />', () => {
  it('should render with background inactive', () => {
    const { container } = renderTheme(<GridText {...mock} />);
    expect(container).toMatchSnapshot();
  });

  it('should render with background active', () => {
    const { container } = renderTheme(
      <GridText {...mock} background/>,
    );
    expect(container).toMatchSnapshot();
  });
});