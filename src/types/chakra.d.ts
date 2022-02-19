import "@chakra-ui/styled-system";

type DefaultSizes = "small" | "medium" | "large";

declare module "@chakra-ui/styled-system" {
  export interface ThemeTypings {
    borders: "none" | "thin" | "thick";
    components: {
      Button: {
        sizes: "lg" | "md" | "sm" | "xs" | "enormous" | (string & {});
        variants:
          | "ghost"
          | "outline"
          | "solid"
          | "link"
          | "unstyled"
          | "wacky"
          | (string & {});
      };
    };
  }
}
