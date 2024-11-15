const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DocsRenderer-CFRXHY34-DtIajwCE.js","./chunk-NUUEMKO5-Bed74jDf.js","./iframe-B3YgkPZF.js","./index-aC1ZMUrs.js","./_commonjsHelpers-CcAunmGO.js","./index-RASuBBme.js","./index-BUuRC3P_.js","./index-DVdwlR73.js","./index-DLlB04eo.js","./inheritsLoose-DBHupcN5.js","./index-CX5rBMF0.js","./index-BdOSk9or.js","./react-18-B8nC4Sv5.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from "./iframe-B3YgkPZF.js";
import "../sb-preview/runtime.js";
const { global } = __STORYBOOK_MODULE_GLOBAL__;
var excludeTags = Object.entries(global.TAGS_OPTIONS ?? {}).reduce((acc, entry) => {
  let [tag, option] = entry;
  return option.excludeFromDocsStories && (acc[tag] = true), acc;
}, {}), parameters = { docs: { renderer: async () => {
  let { DocsRenderer } = await __vitePreload(() => import("./DocsRenderer-CFRXHY34-DtIajwCE.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]) : void 0, import.meta.url);
  return new DocsRenderer();
}, stories: { filter: (story) => {
  var _a;
  return (story.tags || []).filter((tag) => excludeTags[tag]).length === 0 && !((_a = story.parameters.docs) == null ? void 0 : _a.disable);
} } } };
export {
  parameters
};
