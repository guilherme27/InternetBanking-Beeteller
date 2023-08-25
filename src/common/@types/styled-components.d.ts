import beetellerTheme from '../themes/beeteller.theme';
import 'styled-components';

type Theme = typeof beetellerTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
