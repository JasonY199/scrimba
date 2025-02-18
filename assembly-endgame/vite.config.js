import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  console.log("Vite Mode:", mode); // This should log "development" or "production"

  return {
    plugins: [react()],
    base: mode === "production" ? "/assembly-endgame/" : "/",
    server: {
      host: true,
      port: 5173,
    },
  };
});
