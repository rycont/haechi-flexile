(function(o,l){typeof exports=="object"&&typeof module!="undefined"?l(exports,require("@stitches/react"),require("react")):typeof define=="function"&&define.amd?define(["exports","@stitches/react","react"],l):(o=typeof globalThis!="undefined"?globalThis:o||self,l(o["@haechi/flexile"]={},o.react,o.require$$0))})(this,function(o,l,x){"use strict";function b(e){return e&&typeof e=="object"&&"default"in e?e:{default:e}}var v=b(x),s={exports:{}},d={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var c=Object.getOwnPropertySymbols,j=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;function O(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function w(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;var n=Object.getOwnPropertyNames(t).map(function(a){return t[a]});if(n.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(a){i[a]=a}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}w();/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _=v.default,g=60103;if(d.Fragment=60107,typeof Symbol=="function"&&Symbol.for){var y=Symbol.for;g=y("react.element"),d.Fragment=y("react.fragment")}var S=_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,C=Object.prototype.hasOwnProperty,I={key:!0,ref:!0,__self:!0,__source:!0};function p(e,t,r){var n,i={},a=null,f=null;r!==void 0&&(a=""+r),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(f=t.ref);for(n in t)C.call(t,n)&&!I.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)i[n]===void 0&&(i[n]=t[n]);return{$$typeof:g,type:e,key:a,ref:f,props:i,_owner:S.current}}d.jsx=p,d.jsxs=p,s.exports=d;const m=s.exports.jsx,P=l.styled("div",{display:"flex",boxSizing:"border-box",variants:{scrolly:{true:{overflowY:"auto"}},scrollx:{true:{overflowX:"auto"}},linebreak:{true:{flexWrap:"wrap"}},fillx:{true:{width:"100%"}},filly:{true:{height:"100%"}},x:{right:{justifyContent:"flex-end"},left:{justifyContent:"flex-start"},center:{justifyContent:"center"},space:{justifyContent:"space-between"}},y:{top:{alignItems:"flex-start"},bottom:{alignItems:"flex-end"},center:{alignItems:"center"}},keepsize:{true:{flexShrink:0}},relative:{true:{position:"relative"}}}}),k=l.styled("div",{display:"flex",flexDirection:"column",boxSizing:"border-box",variants:{scrolly:{true:{overflowY:"auto"}},scrollx:{true:{overflowX:"auto"}},linebreak:{true:{flexWrap:"wrap"}},filly:{true:{height:"100%"}},fillx:{true:{width:"100%"}},x:{left:{alignItems:"flex-start"},right:{alignItems:"flex-end"},center:{alignItems:"center"}},y:{bottom:{justifyContent:"flex-end"},top:{justifyContent:"flex-start"},center:{justifyContent:"center"},space:{justifyContent:"space-between"}},keepsize:{true:{flexShrink:0}},relative:{true:{position:"relative"}}}}),E=e=>m(k,{css:{...e.padding&&{padding:e.padding+"rem"},...e.gap&&{gap:e.gap+"rem"},...e.paddingx&&{paddingLeft:e.paddingx+"rem",paddingRight:e.paddingx+"rem"},...e.paddingy&&{paddingTop:e.paddingy+"rem",paddingBottom:e.paddingy+"rem"}},...e}),R=e=>m(P,{css:{...e.padding&&{padding:e.padding+"rem"},...e.gap&&{gap:e.gap+"rem"},...e.paddingx&&{paddingLeft:e.paddingx+"rem",paddingRight:e.paddingx+"rem"},...e.paddingy&&{paddingTop:e.paddingy+"rem",paddingBottom:e.paddingy+"rem"}},...e});o.Hexile=R,o.Vexile=E,Object.defineProperties(o,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
