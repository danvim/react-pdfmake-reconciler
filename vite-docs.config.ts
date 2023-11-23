import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { version } from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/react-pdfmake-reconciler/",
  plugins: [react()],
  define: {
    __APP_VERSION__: JSON.stringify(version),
  },
});
