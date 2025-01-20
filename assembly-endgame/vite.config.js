import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Allows access from your phone using your Mac's IP address
    port: 5173, // Optional: Ensures it runs on port 5173
  },
});
