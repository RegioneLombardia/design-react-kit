import { create } from '@storybook/theming';

const theme = create({
  base: 'light',
  // Typography
  fontBase: '"Titillium web", sans-serif',

  colorPrimary: '#00C5CA',
  colorSecondary: '#297A38',

  // UI
  appBg: '#F3F3F5',
  appContentBg: '#FFF',
  appBorderColor: 'grey',
  appBorderRadius: 4,

  brandTitle: 'Design React Kit Lombardia',
  brandUrl: 'https://github.com/RegioneLombardia/design-react-kit'
});

export default theme;
