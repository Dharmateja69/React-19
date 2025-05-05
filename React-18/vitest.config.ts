import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom", // Use jsdom as the test environment
    globals: true, // Make global variables like `describe`, `it`, etc., available
    setupFiles: "tests/setup.ts", // Optional setup file
  },
});
