import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), "");

	return {
		plugins: [react()],
		server: {
			proxy: {
				"/api": {
					target: "https://newsapi.org/v2",
					changeOrigin: true,
					rewrite: (path) => path.replace(/^\/api/, ""),
					headers: {
						"X-Api-Key": env.VITE_API_KEY,
					},
				},
			},
		},
	};
});
