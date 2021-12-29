import { styled } from "@stitches/react";

export const HexileCore = styled("div", {
  display: "flex",
  boxSizing: "border-box",
  variants: {
    linebreak: {
      true: {
        flexWrap: "wrap",
      },
    },
    fillx: {
      true: {
        width: "100%",
      },
    },
    filly: {
      true: {
        height: "100%",
      },
    },
    x: {
      right: {
        justifyContent: "flex-end",
      },
      left: {
        justifyContent: "flex-start",
      },
      center: {
        justifyContent: "center",
      },
      space: {
        justifyContent: "space-between",
      },
    },
    y: {
      top: {
        alignItems: "flex-start",
      },
      bottom: {
        alignItems: "flex-end",
      },
      center: {
        alignItems: "center",
      },
    },
    keepsize: {
      true: {
        flexShrink: 0,
      },
    },
  },
});

export const VexileCore = styled("div", {
  display: "flex",
  flexDirection: "column",
  boxSizing: "border-box",
  variants: {
    linebreak: {
      true: {
        flexWrap: "wrap",
      },
    },
    filly: {
      true: {
        height: "100%",
      },
    },
    fillx: {
      true: {
        width: "100%",
      },
    },
    x: {
      top: {
        alignItems: "flex-start",
      },
      bottom: {
        alignItems: "flex-end",
      },
      center: {
        alignItems: "center",
      },
    },
    y: {
      right: {
        justifyContent: "flex-end",
      },
      left: {
        justifyContent: "flex-start",
      },
      center: {
        justifyContent: "center",
      },
      space: {
        justifyContent: "space-between",
      },
    },
    keepsize: {
      true: {
        flexShrink: 0,
      },
    },
  },
});

interface FlexileProps {
  fillx?: boolean;
  filly?: boolean;
  gap?: number;
  padding?: number;
  linebreak?: boolean;
  paddingx?: number;
  paddingy?: number;
  keepsize?: boolean;
  css?: Record<string, string | number>;
}

interface VexileProps extends FlexileProps {
  x?: "top" | "bottom" | "center";
  y?: "right" | "left" | "center" | "space";
}

interface HexileProps extends FlexileProps {
  x?: "right" | "left" | "center" | "space";
  y?: "top" | "bottom" | "center";
}

export const Vexile: React.FC<
  VexileProps & React.HTMLAttributes<HTMLDivElement>
> = (props) => (
  <VexileCore
    {...props}
    css={{
      ...{
        "--gap": props.gap ? props.gap + "rem" : "0rem",
      },
      ...(props.padding && {
        padding: props.padding + "rem",
      }),
      ...(props.gap && {
        gap: props.gap + "rem",
      }),
      ...(props.paddingx && {
        paddingLeft: props.paddingx + "rem",
        paddingRight: props.paddingx + "rem",
      }),
      ...props.css,
    }}
  />
);

export const Hexile: React.FC<
  HexileProps & React.HTMLAttributes<HTMLDivElement>
> = (props) => (
  <HexileCore
    css={{
      ...{
        "--gap": props.gap ? props.gap + "rem" : "0rem",
      },
      ...(props.padding && {
        padding: props.padding + "rem",
      }),
      ...(props.gap && {
        gap: props.gap + "rem",
      }),
      ...(props.paddingx && {
        paddingLeft: props.paddingx + "rem",
        paddingRight: props.paddingx + "rem",
      }),
    }}
    {...props}
  />
);
