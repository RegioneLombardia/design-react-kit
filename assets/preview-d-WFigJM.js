const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DocsRenderer-CFRXHY34-BSpi4ts1.js","./iframe-CkfUY0Fy.js","./index-CkHlViRq.js","./_commonjsHelpers-CcAunmGO.js","./index-DoFZ2GT_.js","./index-CHqOcmVC.js","./jsx-runtime-85EhGj5b.js","./index-rIQx-mDE.js","./index-9xAnpW0o.js","./index-BdOSk9or.js","./client-C212XDUy.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from "./iframe-CkfUY0Fy.js";
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, { get: all[name], enumerable: true });
};
var preview_exports = {};
__export(preview_exports, { parameters: () => parameters });
var excludeTags = Object.entries(globalThis.TAGS_OPTIONS ?? {}).reduce((acc, entry) => {
  let [tag, option] = entry;
  return option.excludeFromDocsStories && (acc[tag] = true), acc;
}, {}), parameters = { docs: { renderer: async () => {
  let { DocsRenderer } = await __vitePreload(() => import("./DocsRenderer-CFRXHY34-BSpi4ts1.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]) : void 0, import.meta.url);
  return new DocsRenderer();
}, stories: { filter: (story) => {
  var _a;
  return (story.tags || []).filter((tag) => excludeTags[tag]).length === 0 && !((_a = story.parameters.docs) == null ? void 0 : _a.disable);
} } } };
export {
  parameters
};
