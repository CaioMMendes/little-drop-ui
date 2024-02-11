declare const colors: {
    readonly white: "#fff";
    readonly black: "#000";
    readonly zinc50: "#fafafa";
    readonly zinc100: "#f4f4f5";
    readonly zinc200: "#e4e4e7";
    readonly zinc300: "#d4d4d8";
    readonly zinc400: "#a1a1aa";
    readonly zinc500: "#71717a";
    readonly zinc600: "#52525b";
    readonly zinc700: "#3f3f46";
    readonly zinc800: "#27272a";
    readonly zinc900: "#18181b";
    readonly zinc950: "#09090b";
    readonly onyx300: "#82978d";
    readonly onyx400: "#6f8078";
    readonly onyx500: "#5d6963";
    readonly onyx600: "#515c56";
    readonly onyx700: "#3e4742";
    readonly onyx800: "#2e3532";
    readonly onyx900: "#262c29";
    readonly resedagreen: "#739181";
    readonly frenchgray: "#c7cedb";
    readonly cadetgray: "#ADAAB2";
    readonly mountbattenpink300: "##a694ad";
    readonly mountbattenpink400: "#94849b";
    readonly mountbattenpink500: "#8e7f94";
    readonly mountbattenpink600: "#7c6e81";
    readonly mountbattenpink700: "#685a6c";
    readonly mountbattenpink800: "#4b404f";
    readonly mountbattenpink900: "#352e38";
};

declare const space: {
    readonly 1: "0.25rem";
    readonly 2: "0.5rem";
    readonly 3: "0.75rem";
    readonly 4: "1rem";
    readonly 5: "1.25rem";
    readonly 6: "1.5rem";
    readonly 7: "1.75rem";
    readonly 8: "2rem";
    readonly 10: "2.5rem";
    readonly 12: "3rem";
    readonly 16: "4rem";
    readonly 20: "5rem";
    readonly 40: "10rem";
    readonly 64: "16rem";
    readonly 80: "20rem";
};

declare const radii: {
    readonly px: "1px";
    readonly xs: "2px";
    readonly sm: "4px";
    readonly md: "6px";
    readonly lg: "8px";
    readonly xl: "12px";
    readonly "2xl": "16px";
    readonly "3xl": "24px";
    readonly full: "99999px";
};

declare const fonts: {
    readonly default: "Roboto, sans-serif";
    readonly code: "monospace";
};

declare const fontSizes: {
    readonly xxs: "0.625rem";
    readonly xs: "0.75rem";
    readonly sm: "0.875rem";
    readonly md: "1rem";
    readonly lg: "1.125rem";
    readonly xl: "1.25rem";
    readonly "2xl": "1.5rem";
    readonly "4xl": "2rem";
    readonly "5xl": "2.25rem";
    readonly "6xl": "3rem";
    readonly "7xl": "4rem";
    readonly "8xl": "4.5rem";
    readonly "9xl": "6rem";
};

declare const fontWeights: {
    readonly regular: "400";
    readonly medium: "500";
    readonly semibold: "600";
    readonly bold: "700";
};

declare const lineHeights: {
    readonly shorter: "125%";
    readonly short: "140%";
    readonly base: "160%";
    readonly tall: "180%";
};

export { colors, fontSizes, fontWeights, fonts, lineHeights, radii, space };
