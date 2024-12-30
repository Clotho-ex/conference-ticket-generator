import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "./", // Set the base path for your project
  plugins: [react()],
  server: {
    host: true, // Allows access from your local network
  },
});
