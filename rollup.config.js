import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import resolve from "@rollup/plugin-node-resolve";
import del from 'rollup-plugin-delete'
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import sourcemaps from "rollup-plugin-sourcemaps";
import babel from "@rollup/plugin-babel";
import dts from 'rollup-plugin-dts';
import pkg from "./package.json";

const extensions = [".js", ".jsx", ".ts", ".tsx"];
const external = ["react", "react-dom", "styled-components"];
const config = [{
  input: pkg.source,
  output: {
    file: "./dist/output.js",
    format: "esm"
  },
    external,
    plugins: [
      resolve({ extensions }),
      babel({ exclude: "node_modules/**" }),
      commonjs({ include: "node_modules/**" }),
      typescript({ tsconfig: "./tsconfig.json", clean: true }),
      peerDepsExternal(),
      sourcemaps(),
      del({ targets: ["dist/*"] }),
    ],
  
}, {
  input: pkg.source,
  output: {
    file: "./dist/output.d.ts",
    format: "cjs"
  },
  plugins: [
    dts()
  ]
}];
export default config;