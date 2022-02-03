import { styled } from "@stitches/react";

export const HexileCore = styled("div", {
  display: "flex",
  boxSizing: "border-box",
  variants: {
    scrolly: {
      true: {
        overflowY: "auto",
      },
    },
    scrollx: {
      true: {
        overflowX: "auto",
      },
    },
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
    relative: {
      true: {
        position: "relative",
      },
    },
  },
});

export const VexileCore = styled("div", {
  display: "flex",
  flexDirection: "column",
  boxSizing: "border-box",
  variants: {
    scrolly: {
      true: {
        overflowY: "auto",
      },
    },
    scrollx: {
      true: {
        overflowX: "auto",
      },
    },
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
      left: {
        alignItems: "flex-start",
      },
      right: {
        alignItems: "flex-end",
      },
      center: {
        alignItems: "center",
      },
    },
    y: {
      bottom: {
        justifyContent: "flex-end",
      },
      top: {
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
    relative: {
      true: {
        position: "relative",
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
  relative?: boolean;
  scrolly?: boolean;
  scrollx?: boolean;
}

interface VexileProps extends FlexileProps {
  x?: "right" | "left" | "center";
  y?: "top" | "bottom" | "center" | "space";
}

interface HexileProps extends FlexileProps {
  x?: "right" | "left" | "center" | "space";
  y?: "top" | "bottom" | "center";
}

export const Vexile: React.FC<
  VexileProps & React.HTMLAttributes<HTMLDivElement>
> = (props) => (
  <VexileCore
    css={{
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

export const Hexile: React.FC<
  HexileProps & React.HTMLAttributes<HTMLDivElement>
> = (props) => (
  <HexileCore
    css={{
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
      ...(props.paddingy && {
        paddingTop: props.paddingy + "rem",
        paddingBottom: props.paddingy + "rem",
      }),
    }}
    {...props}
  />
);
