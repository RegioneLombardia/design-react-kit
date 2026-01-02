var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
import { e } from "./iframe-CHwcEDm1.js";
import { T as TopBar } from "./TopBar-CZf4yxvH.js";
import "./preload-helper-CQrtv1eE.js";
import "./Container-B9Jjl3EK.js";
import "./utils-EKL-V6E8.js";
import "./index-BhjGuW_H.js";
import "./Col-BjL_VQHj.js";
import "./DropdownToggle-CEw0lNTS.js";
import "./DropdownToggle-Bz9MvRnP.js";
import "./Popper-DjdUY0jO.js";
import "./index-C581bQpe.js";
import "./DropdownMenu-Cz5TdHwb.js";
import "./HeaderContext-HG8RVn3K.js";
import "./Button-lDcYqNTg.js";
import "./Icon-DoI8qbhT.js";
import "./LinkListItem-C2mmxi8z.js";
import "./track-focus-DbJ2CO43.js";
const meta = {
  title: "Linee Guida/Componenti Principali/Header/TopBar",
  component: TopBar
};
const TopBarBase = {
  render: () => /* @__PURE__ */ e.createElement(TopBar, null)
};
const TopBarAccesso = {
  render: ({
    access = "#"
  }) => /* @__PURE__ */ e.createElement(TopBar, { access })
};
const TopBarAccessoEffettuato = {
  args: {
    user: "Enzo Ferri"
  },
  render: ({
    user,
    links
  }) => /* @__PURE__ */ e.createElement(TopBar, { user, links })
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
  }) => /* @__PURE__ */ e.createElement(TopBar, { user, links })
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
