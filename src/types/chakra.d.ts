import { BaseThemeTypings } from "@chakra-ui/styled-system"

type DefaultSizes = 'small' | 'medium' | 'large';

declare module "@chakra-ui/styled-system" {
  export interface CustomThemeTypings extends BaseThemeTypings {
    borders: 'none' | 'thin' | 'thick';
    components: {
      Button: {
        sizes: DefaultSizes;
        variants: 'wacky' | 'chill';
      };
    }
  }
}