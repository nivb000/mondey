import { defineConfig } from 'vite'
import { VitePWA } from "vite-plugin-pwa";
import react from '@vitejs/plugin-react'

const manifestForPlugin = {
	registerType: "prompt",
	includeAssets: ["logo.png"],
	manifest: {
		name: "Mondey",
		short_name: "Mondey",
		description: "An app that can show weather forecast for your city.",
		icons: [
			{
				src: "/src/assets/imgs/logo.png",
				sizes: "192x192",
				type: "image/png",
			},
			{
				src: "/src/assets/imgs/logo.png",
				sizes: "512x512",
				type: "image/png",
			},
			{
				src: "/src/assets/imgs/logo.png",
				sizes: "180x180",
				type: "image/png",
				purpose: "apple touch icon",
			},
			{
				src: "/src/assets/imgs/logo.png",
				sizes: "225x225",
				type: "image/png",
				purpose: "any maskable",
			},
		],
		theme_color: "#171717",
		background_color: "#e8ebf2",
		display: "standalone",
		scope: "/",
		start_url: "/",
		orientation: "portrait",
	},
};
// https://vitejs.dev/config/
export default defineConfig({
	base: "./",
	plugins: [react(), VitePWA(manifestForPlugin)],
});

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()]
// })
