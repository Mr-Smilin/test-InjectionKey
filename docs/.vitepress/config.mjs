import { defineConfig } from "vitepress";
import { InlineLinkPreviewElementTransform } from "@nolebase/vitepress-plugin-inline-link-preview/markdown-it";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "My Awesome Project",
	description: "A VitePress Site",
	lang: "zh-TW",
	markdown: {
		config: (md) => {
			md.use(InlineLinkPreviewElementTransform);
		},
	},
});
