type DefaultSizes = 'small' | 'medium' | 'large';

declare module "@chakra-ui/styled-system" {
  export interface ThemeTypings {
    borders: 'none' | 'thin' | 'thick';
    components: {
      Button: {
        sizes: DefaultSizes;
        variants: 'wacky' | 'chill';
      };
    }
  }
}