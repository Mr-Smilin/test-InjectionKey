// node_modules/@nolebase/vitepress-plugin-inline-link-preview/dist/client/constants.mjs
var InjectionKey = Symbol("VPNolebaseInlineLinkPreview");

// node_modules/@nolebase/vitepress-plugin-inline-link-preview/dist/client/index.mjs
import InlineLinkPreview from "C:/Users/lion3/OneDrive/桌面/key fix/node_modules/@nolebase/vitepress-plugin-inline-link-preview/dist/client/components/InlineLinkPreview.vue";
import PopupIframe from "C:/Users/lion3/OneDrive/桌面/key fix/node_modules/@nolebase/vitepress-plugin-inline-link-preview/dist/client/components/PopupIframe.vue";
var components = {
  VPNolebaseInlineLinkPreview: InlineLinkPreview
};
var NolebaseInlineLinkPreviewPlugin = {
  install(app, options) {
    if (typeof options !== "undefined" && typeof options === "object")
      app.provide(InjectionKey, options);
    for (const key of Object.keys(components))
      app.component(key, components[key]);
  }
};
export {
  InjectionKey,
  InlineLinkPreview as NolebaseInlineLinkPreview,
  NolebaseInlineLinkPreviewPlugin,
  PopupIframe
};
//# sourceMappingURL=@nolebase_vitepress-plugin-inline-link-preview_client.js.map
