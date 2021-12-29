# @haechi/flexile

```bash
yarn add @haechi/flexile
```

Easy layout for React. Easy flex layout without css, just write with simple component props. Inspired by Figma Auto Layout.

```ts
import { styled } from "@stitches/react";
import { Hexile } from "./flexile";

const Box1 = styled("div", {
  backgroundColor: "#ED6F6F",
  width: "100px",
  height: "100px",
});

const Box2 = styled("div", {
  backgroundColor: "#6FA9ED",
  width: "100px",
  height: "200px",
});

export const Example = () => (
  <Hexile gap={1} padding={1} y="center" x="space">
    <Box1 />
    <Box2 />
  </Hexile>
);
```

## How to use

Use `Vexile`(Vertical Layout), `Hexile`(Horizontal Layout) instead of Flex Container. and just write flex attributes as component props.

### gap / space

```
<Vexile
    gap={4}
    padding={2}
>
    ...
</Vexile>
```

**⚠️Unit of gap / padding is `rem`⚠️**

`gap` is for setting space between children
`padding` is for setting padding of Flexile container

### x / y

```
<Vexile
    x="center"
    y="bottom">
    ...
</Vexile>
```

The way how children would be aligned.

```
x: left, right, center, space (Vexile only)
y: bottom, top, center, space (Hexile only)
```

### fillx / filly

```
<Hexile fillx filly>
    ...
</Hexile>
```

fill parent. that's it.

### linebreak

```
<Vexile linebreak>
    ...
</Vexile>
```

sams as `flex-wrap: wrap`. Break line when inner space is not enough.
