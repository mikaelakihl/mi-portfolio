import { defineConfig } from "vite";

export default defineConfig({
  base: "/mi-portfolio/",
    
  build: {
    outDir: 'dist', // här kan du ändra var builden hamnar
    assetsDir: 'assets', // här hamnar t.ex. bilder och fonts
    rollupOptions: {
      input: '/index.html', // vilken fil som är startfil
      output: {
        manualChunks: undefined, // hur du delar upp JS-paket
      }
    }
  }
});