import { R as React } from "./index-aC1ZMUrs.js";
import "./_commonjsHelpers-CcAunmGO.js";
const emptyComponents = {};
const MDXContext = React.createContext(emptyComponents);
function useMDXComponents(components) {
  const contextComponents = React.useContext(MDXContext);
  return React.useMemo(
    function() {
      if (typeof components === "function") {
        return components(contextComponents);
      }
      return { ...contextComponents, ...components };
    },
    [contextComponents, components]
  );
}
function MDXProvider(properties) {
  let allComponents;
  if (properties.disableParentContext) {
    allComponents = typeof properties.components === "function" ? properties.components(emptyComponents) : properties.components || emptyComponents;
  } else {
    allComponents = useMDXComponents(properties.components);
  }
  return React.createElement(
    MDXContext.Provider,
    { value: allComponents },
    properties.children
  );
}
export {
  MDXProvider,
  useMDXComponents
};
