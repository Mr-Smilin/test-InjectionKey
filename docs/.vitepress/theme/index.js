// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import DefaultTheme from "vitepress/theme";
import "./style.css";

import {
	NolebaseInlineLinkPreviewPlugin,
	InjectionKey,
} from "@nolebase/vitepress-plugin-inline-link-preview/client";
import "@nolebase/vitepress-plugin-inline-link-preview/client/style.css";

/** @type {import('vitepress').Theme} */
export default {
	extends: DefaultTheme,
	Layout: () => {
		return h(DefaultTheme.Layout, null, {
			// https://vitepress.dev/guide/extending-default-theme#layout-slots
		});
	},
	enhanceApp({ app, router, siteData }) {
		app.use(NolebaseInlineLinkPreviewPlugin);
		app.provide(InjectionKey, {
			popupWidth: 500,
			popupHeight: 470,
			locales: {
				"zh-TW": {
					popup: {
						loading: "加載中...",
						loadingAriaLabel: "加載中",
						iframeAriaLabel: "連結預覽",
					},
				},
			},
		});
	},
};
