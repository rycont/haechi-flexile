import { styled } from "@stitches/react";
import require$$0 from "react";
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
  if (val === null || val === void 0) {
    throw new TypeError("Object.assign cannot be called with null or undefined");
  }
  return Object(val);
}
function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    }
    var test1 = new String("abc");
    test1[5] = "de";
    if (Object.getOwnPropertyNames(test1)[0] === "5") {
      return false;
    }
    var test2 = {};
    for (var i = 0; i < 10; i++) {
      test2["_" + String.fromCharCode(i)] = i;
    }
    var order2 = Object.getOwnPropertyNames(test2).map(function(n2) {
      return test2[n2];
    });
    if (order2.join("") !== "0123456789") {
      return false;
    }
    var test3 = {};
    "abcdefghijklmnopqrst".split("").forEach(function(letter) {
      test3[letter] = letter;
    });
    if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
      return false;
    }
    return true;
  } catch (err) {
    return false;
  }
}
shouldUseNative() ? Object.assign : function(target, source) {
  var from;
  var to = toObject(target);
  var symbols;
  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);
    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }
    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);
      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }
  return to;
};
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f = require$$0, g = 60103;
reactJsxRuntime_production_min.Fragment = 60107;
if ("function" === typeof Symbol && Symbol.for) {
  var h = Symbol.for;
  g = h("react.element");
  reactJsxRuntime_production_min.Fragment = h("react.fragment");
}
var m = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, n = Object.prototype.hasOwnProperty, p = { key: true, ref: true, __self: true, __source: true };
function q(c, a, k) {
  var b, d = {}, e = null, l = null;
  void 0 !== k && (e = "" + k);
  void 0 !== a.key && (e = "" + a.key);
  void 0 !== a.ref && (l = a.ref);
  for (b in a)
    n.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
  if (c && c.defaultProps)
    for (b in a = c.defaultProps, a)
      void 0 === d[b] && (d[b] = a[b]);
  return { $$typeof: g, type: c, key: e, ref: l, props: d, _owner: m.current };
}
reactJsxRuntime_production_min.jsx = q;
reactJsxRuntime_production_min.jsxs = q;
{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}
const jsx = jsxRuntime.exports.jsx;
const HexileCore = styled("div", {
  display: "flex",
  boxSizing: "border-box",
  variants: {
    scrolly: {
      true: {
        overflowY: "auto"
      }
    },
    scrollx: {
      true: {
        overflowX: "auto"
      }
    },
    linebreak: {
      true: {
        flexWrap: "wrap"
      }
    },
    fillx: {
      true: {
        width: "100%"
      }
    },
    filly: {
      true: {
        height: "100%"
      }
    },
    x: {
      right: {
        justifyContent: "flex-end"
      },
      left: {
        justifyContent: "flex-start"
      },
      center: {
        justifyContent: "center"
      },
      space: {
        justifyContent: "space-between"
      }
    },
    y: {
      top: {
        alignItems: "flex-start"
      },
      bottom: {
        alignItems: "flex-end"
      },
      center: {
        alignItems: "center"
      }
    },
    keepsize: {
      true: {
        flexShrink: 0
      }
    },
    relative: {
      true: {
        position: "relative"
      }
    }
  }
});
const VexileCore = styled("div", {
  display: "flex",
  flexDirection: "column",
  boxSizing: "border-box",
  variants: {
    scrolly: {
      true: {
        overflowY: "auto"
      }
    },
    scrollx: {
      true: {
        overflowX: "auto"
      }
    },
    linebreak: {
      true: {
        flexWrap: "wrap"
      }
    },
    filly: {
      true: {
        height: "100%"
      }
    },
    fillx: {
      true: {
        width: "100%"
      }
    },
    x: {
      left: {
        alignItems: "flex-start"
      },
      right: {
        alignItems: "flex-end"
      },
      center: {
        alignItems: "center"
      }
    },
    y: {
      bottom: {
        justifyContent: "flex-end"
      },
      top: {
        justifyContent: "flex-start"
      },
      center: {
        justifyContent: "center"
      },
      space: {
        justifyContent: "space-between"
      }
    },
    keepsize: {
      true: {
        flexShrink: 0
      }
    },
    relative: {
      true: {
        position: "relative"
      }
    }
  }
});
const Vexile = (props) => /* @__PURE__ */ jsx(VexileCore, {
  css: {
    ...props.padding && {
      padding: props.padding + "rem"
    },
    ...props.gap && {
      gap: props.gap + "rem"
    },
    ...props.paddingx && {
      paddingLeft: props.paddingx + "rem",
      paddingRight: props.paddingx + "rem"
    },
    ...props.paddingy && {
      paddingTop: props.paddingy + "rem",
      paddingBottom: props.paddingy + "rem"
    }
  },
  ...props
});
const Hexile = (props) => /* @__PURE__ */ jsx(HexileCore, {
  css: {
    ...props.padding && {
      padding: props.padding + "rem"
    },
    ...props.gap && {
      gap: props.gap + "rem"
    },
    ...props.paddingx && {
      paddingLeft: props.paddingx + "rem",
      paddingRight: props.paddingx + "rem"
    },
    ...props.paddingy && {
      paddingTop: props.paddingy + "rem",
      paddingBottom: props.paddingy + "rem"
    }
  },
  ...props
});
export { Hexile, Vexile };
