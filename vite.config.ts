import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    server: {
      host: "0.0.0.0",
      allowedHosts: true,
    },

    preview: {
      host: "0.0.0.0",
      allowedHosts: true,
    },

    build: {
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            // Split heavy libraries into separate chunks for better caching
            if (id.includes("framer-motion")) return "vendor-framer";
            if (id.includes("embla-carousel")) return "vendor-carousel";
            if (id.includes("yet-another-react-lightbox")) return "vendor-lightbox";
            if (id.includes("lucide-react")) return "vendor-lucide";
            if (id.includes("@radix-ui")) return "vendor-ui";
            return undefined;
          },
        },
      },
    },
  },

  nitro: {
    preset: "node-server",
  },

  tanstackStart: {
    server: {
      entry: "server",
    },
  },
});
