import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    react(),
    dts({
      skipDiagnostics: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/lib.tsx"),
      name: "@haechi/flexile",
      fileName: "haechi-flexile",
    },
    rollupOptions: {
      external: ["react", "@stitches/react"],
    },
    minify: true,
  },
});
