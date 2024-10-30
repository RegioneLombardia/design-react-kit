var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
import { R as React } from "./index-aC1ZMUrs.js";
import { T as TopBar } from "./TopBar-7pl4QLJh.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./Container-BSU_5rqZ.js";
import "./index-C6XlOQIa.js";
import "./index-xoeSAV6i.js";
import "./utils-BToed_Um.js";
import "./Col-sbjB5dMm.js";
import "./Icon-DAq5ZiWt.js";
import "./iframe-BvyWEA8u.js";
import "../sb-preview/runtime.js";
import "./LinkListItem-B69qYNZ5.js";
import "./DropdownToggle-BFxFx-Wp.js";
import "./DropdownToggle-CpBYzZpr.js";
import "./Popper-BdfyK_V7.js";
import "./index-DVdwlR73.js";
import "./DropdownMenu-BVvApC7Y.js";
import "./Button-BqturWaL.js";
const meta = {
  title: "Linee Guida/Componenti Principali/Header/TopBar",
  component: TopBar
};
const TopBarBase = {
  render: () => /* @__PURE__ */ React.createElement(TopBar, null)
};
const TopBarAccesso = {
  render: ({
    access = "#"
  }) => /* @__PURE__ */ React.createElement(TopBar, { access })
};
const TopBarAccessoEffettuato = {
  args: {
    user: "Enzo Ferri"
  },
  render: ({
    user,
    links
  }) => /* @__PURE__ */ React.createElement(TopBar, { user, links })
};
const TopBarUserSettings = {
  parameters: {
    docs: {
      story: {
        height: "200px"
      }
    }
  },
  args: {
    user: "Enzo Ferri",
    links: [{
      "href": "#",
      "content": "Dati Profilo"
    }, {
      "href": "#",
      "content": "Impostazioni"
    }, {
      "href": "#",
      "content": "Disconnetti"
    }]
  },
  render: ({
    user,
    links
  }) => /* @__PURE__ */ React.createElement(TopBar, { user, links })
};
TopBarBase.parameters = {
  ...TopBarBase.parameters,
  docs: {
    ...(_a = TopBarBase.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{\n  render: () => <TopBar />\n}",
      ...(_c = (_b = TopBarBase.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
TopBarAccesso.parameters = {
  ...TopBarAccesso.parameters,
  docs: {
    ...(_d = TopBarAccesso.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: '{\n  render: ({\n    access = "#"\n  }) => <TopBar access={access} />\n}',
      ...(_f = (_e = TopBarAccesso.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
TopBarAccessoEffettuato.parameters = {
  ...TopBarAccessoEffettuato.parameters,
  docs: {
    ...(_g = TopBarAccessoEffettuato.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: '{\n  args: {\n    user: "Enzo Ferri"\n  },\n  render: ({\n    user,\n    links\n  }) => <TopBar user={user} links={links} />\n}',
      ...(_i = (_h = TopBarAccessoEffettuato.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
TopBarUserSettings.parameters = {
  ...TopBarUserSettings.parameters,
  docs: {
    ...(_j = TopBarUserSettings.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: `{
  parameters: {
    docs: {
      story: {
        height: '200px'
      }
    }
  },
  args: {
    user: "Enzo Ferri",
    links: [{
      'href': '#',
      'content': 'Dati Profilo'
    }, {
      'href': '#',
      'content': 'Impostazioni'
    }, {
      'href': '#',
      'content': 'Disconnetti'
    }]
  },
  render: ({
    user,
    links
  }) => <TopBar user={user} links={links} />
}`,
      ...(_l = (_k = TopBarUserSettings.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
const __namedExportsOrder = ["TopBarBase", "TopBarAccesso", "TopBarAccessoEffettuato", "TopBarUserSettings"];
export {
  TopBarAccesso,
  TopBarAccessoEffettuato,
  TopBarBase,
  TopBarUserSettings,
  __namedExportsOrder,
  meta as default
};
