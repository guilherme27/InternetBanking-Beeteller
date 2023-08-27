import { BeetellerTheme } from '../themes';
import 'styled-components';

type Theme = typeof BeetellerTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
