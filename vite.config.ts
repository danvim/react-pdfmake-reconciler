import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";
import { version } from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "ReactPdfMake",
      formats: ["cjs", "es"],
    },
    rollupOptions: {
      external: [
        "react",
        "react/jsx-runtime",
        "pdfmake",
        "pdfmake/build/pdfmake",
        "react-reconciler",
        "react-reconciler/constants",
      ],
    },
  },
  plugins: [
    react(),
    dts({
      copyDtsFiles: true,
      exclude: ["./src/vite-env.d.ts", "**/*.test.{ts,tsx}", "./src/demo/**/*"],
    }),
  ],
  define: {
    __APP_VERSION__: JSON.stringify(version),
  },
});
