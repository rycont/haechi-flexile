import { ComponentProps } from "react";
declare const HexileCore: import("@stitches/react/types/styled-component").StyledComponent<"div", {
    scrolly?: boolean | "true" | undefined;
    scrollx?: boolean | "true" | undefined;
    linebreak?: boolean | "true" | undefined;
    fillx?: boolean | "true" | undefined;
    filly?: boolean | "true" | undefined;
    x?: "left" | "right" | "center" | "space" | undefined;
    y?: "bottom" | "top" | "center" | undefined;
    keepsize?: boolean | "true" | undefined;
    relative?: boolean | "true" | undefined;
}, {}, import("@stitches/react/types/css-util").CSS<{}, {}, {}, {}>>;
declare const VexileCore: import("@stitches/react/types/styled-component").StyledComponent<"div", {
    scrolly?: boolean | "true" | undefined;
    scrollx?: boolean | "true" | undefined;
    linebreak?: boolean | "true" | undefined;
    filly?: boolean | "true" | undefined;
    fillx?: boolean | "true" | undefined;
    x?: "left" | "right" | "center" | undefined;
    y?: "bottom" | "top" | "center" | "space" | undefined;
    keepsize?: boolean | "true" | undefined;
    relative?: boolean | "true" | undefined;
}, {}, import("@stitches/react/types/css-util").CSS<{}, {}, {}, {}>>;
interface FlexileProps {
    fillx?: boolean;
    filly?: boolean;
    gap?: number;
    padding?: number;
    linebreak?: boolean;
    paddingx?: number;
    paddingy?: number;
    keepsize?: boolean;
    relative?: boolean;
    scrolly?: boolean;
    scrollx?: boolean;
    as?: string;
}
interface VexileProps extends FlexileProps {
    x?: "right" | "left" | "center";
    y?: "top" | "bottom" | "center" | "space";
}
interface HexileProps extends FlexileProps {
    x?: "right" | "left" | "center" | "space";
    y?: "top" | "bottom" | "center";
}
export declare const Vexile: React.FC<VexileProps & ComponentProps<typeof VexileCore>>;
export declare const Hexile: React.FC<HexileProps & ComponentProps<typeof HexileCore>>;
export {};
