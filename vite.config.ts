import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@domain": "/src/domain",
      "@use-cases": "/src/use-cases",
      "@adapters": "/src/adapters",
      "@components": "/src/ui/components",
      "@pages": "/src/ui/pages",
    },
  },
});
