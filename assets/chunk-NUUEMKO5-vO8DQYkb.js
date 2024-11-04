const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-DXHhUSGJ.js","./index-aC1ZMUrs.js","./_commonjsHelpers-CcAunmGO.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from "./iframe-BiDC3_i4.js";
import { R as React, r as reactExports } from "./index-aC1ZMUrs.js";
import { ak as CodeOrSourceMdx, al as AnchorMdx, am as HeadersMdx, an as Docs } from "./index-DT2cdpOB.js";
import { renderElement, unmountElement } from "./react-18-B8nC4Sv5.js";
var defaultComponents = { code: CodeOrSourceMdx, a: AnchorMdx, ...HeadersMdx }, ErrorBoundary = class extends reactExports.Component {
  constructor() {
    super(...arguments);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(err) {
    let { showException } = this.props;
    showException(err);
  }
  render() {
    let { hasError } = this.state, { children } = this.props;
    return hasError ? null : React.createElement(React.Fragment, null, children);
  }
}, DocsRenderer = class {
  constructor() {
    this.render = async (context, docsParameter, element) => {
      let components = { ...defaultComponents, ...docsParameter == null ? void 0 : docsParameter.components }, TDocs = Docs;
      return new Promise((resolve, reject) => {
        __vitePreload(async () => {
          const { MDXProvider } = await import("./index-DXHhUSGJ.js");
          return { MDXProvider };
        }, true ? __vite__mapDeps([0,1,2]) : void 0, import.meta.url).then(({ MDXProvider }) => renderElement(React.createElement(ErrorBoundary, { showException: reject, key: Math.random() }, React.createElement(MDXProvider, { components }, React.createElement(TDocs, { context, docsParameter }))), element)).then(() => resolve());
      });
    }, this.unmount = (element) => {
      unmountElement(element);
    };
  }
};
export {
  DocsRenderer as D,
  defaultComponents as d
};
