var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o;
import { e } from "./index-BehpJNG5.js";
import { D as Dropdown, a as DropdownToggle } from "./DropdownToggle-Drh8mRjS.js";
import { D as DropdownMenu } from "./DropdownMenu-ByvFgIJX.js";
import { L as LinkList, a as LinkListItem } from "./LinkListItem-E5PaFpui.js";
import "./track-focus-DbJ2CO43.js";
const meta = {
  title: "Linee Guida/Navigazione/DropdownMenu",
  component: DropdownMenu
};
const _Link = {
  parameters: {
    docs: {
      story: {
        height: "230px"
      }
    }
  },
  render: () => {
    return /* @__PURE__ */ e.createElement(Dropdown, null, /* @__PURE__ */ e.createElement(DropdownToggle, { color: "primary", tag: "a", caret: true }, "Apri dropdown"), /* @__PURE__ */ e.createElement(DropdownMenu, null, /* @__PURE__ */ e.createElement(LinkList, null, /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#", active: true }, /* @__PURE__ */ e.createElement("span", null, "Attivo", /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, "Voce attiva"))), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#", disabled: true, "aria-disabled": "true" }, /* @__PURE__ */ e.createElement("span", null, "Disabilitato")), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Normale")))));
  }
};
const _Bottone = {
  parameters: {
    docs: {
      story: {
        height: "230px"
      }
    }
  },
  render: () => {
    return /* @__PURE__ */ e.createElement(Dropdown, null, /* @__PURE__ */ e.createElement(DropdownToggle, { color: "primary", caret: true }, "Apri dropdown"), /* @__PURE__ */ e.createElement(DropdownMenu, null, /* @__PURE__ */ e.createElement(LinkList, null, /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#", active: true }, /* @__PURE__ */ e.createElement("span", null, "Attivo", /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, "Voce attiva"))), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#", disabled: true, "aria-disabled": "true" }, /* @__PURE__ */ e.createElement("span", null, "Disabilitato")), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Normale")))));
  }
};
const _Default = {
  decorators: [(Story) => /* @__PURE__ */ e.createElement("div", { style: {
    backgroundColor: "lightgrey",
    padding: "10px"
  } }, /* @__PURE__ */ e.createElement(Story, null))],
  render: () => /* @__PURE__ */ e.createElement("div", { className: "docs-show-dropdown-open" }, /* @__PURE__ */ e.createElement(DropdownMenu, null, /* @__PURE__ */ e.createElement(LinkList, null, /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#", active: true }, /* @__PURE__ */ e.createElement("span", null, "Attivo", /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, "Voce attiva"))), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#", disabled: true, "aria-disabled": "true" }, /* @__PURE__ */ e.createElement("span", null, "Disabilitato")), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Normale")))))
};
const _BottomEnd = {
  decorators: [(Story) => /* @__PURE__ */ e.createElement("div", { style: {
    backgroundColor: "lightgrey",
    padding: "10px"
  } }, /* @__PURE__ */ e.createElement(Story, null))],
  render: () => /* @__PURE__ */ e.createElement("div", { className: "docs-show-dropdown-open" }, /* @__PURE__ */ e.createElement(DropdownMenu, { "data-popper-placement": "bottom-end" }, /* @__PURE__ */ e.createElement(LinkList, null, /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#", active: true }, /* @__PURE__ */ e.createElement("span", null, "Attivo", /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, "Voce attiva"))), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#", disabled: true, "aria-disabled": "true" }, /* @__PURE__ */ e.createElement("span", null, "Disabilitato")), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Normale")))))
};
const _HeaderEDivider = {
  parameters: {
    docs: {
      story: {
        height: "230px"
      }
    }
  },
  decorators: [(Story) => /* @__PURE__ */ e.createElement("div", { style: {
    backgroundColor: "lightgrey",
    padding: "10px"
  } }, /* @__PURE__ */ e.createElement(Story, null))],
  render: () => /* @__PURE__ */ e.createElement("div", { className: "docs-show-dropdown-open" }, /* @__PURE__ */ e.createElement(DropdownMenu, null, /* @__PURE__ */ e.createElement(LinkList, null, /* @__PURE__ */ e.createElement(LinkListItem, { header: true, inDropdown: true, className: "text-primary fw-bold" }, "Intestazione"), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#", active: true }, /* @__PURE__ */ e.createElement("span", null, "Attivo", /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, "Voce attiva"))), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#", disabled: true, "aria-disabled": "true" }, /* @__PURE__ */ e.createElement("span", null, "Disabilitato")), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Normale")), /* @__PURE__ */ e.createElement(LinkListItem, { divider: true }), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Azione 4")))))
};
_Link.parameters = {
  ..._Link.parameters,
  docs: {
    ...(_a = _Link.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: `{
  parameters: {
    docs: {
      story: {
        height: '230px'
      }
    }
  },
  render: () => {
    return <Dropdown>
        <DropdownToggle color="primary" tag="a" caret>
          Apri dropdown
        </DropdownToggle>
        <DropdownMenu>
          <LinkList>
            <LinkListItem inDropdown href='#' active>
              <span>Attivo<span className="visually-hidden">Voce attiva</span></span>
            </LinkListItem>
            <LinkListItem inDropdown href='#' disabled aria-disabled="true">
              <span>Disabilitato</span>
            </LinkListItem>
            <LinkListItem inDropdown href='#'>
              <span>Normale</span>
            </LinkListItem>
          </LinkList>
        </DropdownMenu>
      </Dropdown>;
  }
}`,
      ...(_c = (_b = _Link.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
_Bottone.parameters = {
  ..._Bottone.parameters,
  docs: {
    ...(_d = _Bottone.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: `{
  parameters: {
    docs: {
      story: {
        height: '230px'
      }
    }
  },
  render: () => {
    return <Dropdown>
        <DropdownToggle color="primary" caret>
          Apri dropdown
        </DropdownToggle>
        <DropdownMenu>
          <LinkList>
            <LinkListItem inDropdown href='#' active>
              <span>Attivo<span className="visually-hidden">Voce attiva</span></span>
            </LinkListItem>
            <LinkListItem inDropdown href='#' disabled aria-disabled="true">
              <span>Disabilitato</span>
            </LinkListItem>
            <LinkListItem inDropdown href='#'>
              <span>Normale</span>
            </LinkListItem>
          </LinkList>
        </DropdownMenu>
      </Dropdown>;
  }
}`,
      ...(_f = (_e = _Bottone.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
_Default.parameters = {
  ..._Default.parameters,
  docs: {
    ...(_g = _Default.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: `{
  decorators: [Story => <div style={{
    backgroundColor: 'lightgrey',
    padding: '10px'
  }}>
        <Story />
      </div>],
  render: () => <div className="docs-show-dropdown-open">
      <DropdownMenu>
        <LinkList>
          <LinkListItem inDropdown href='#' active>
            <span>Attivo<span className="visually-hidden">Voce attiva</span></span>
          </LinkListItem>
          <LinkListItem inDropdown href='#' disabled aria-disabled="true">
            <span>Disabilitato</span>
          </LinkListItem>
          <LinkListItem inDropdown href='#'>
            <span>Normale</span>
          </LinkListItem>
        </LinkList>
      </DropdownMenu>
    </div>
}`,
      ...(_i = (_h = _Default.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
_BottomEnd.parameters = {
  ..._BottomEnd.parameters,
  docs: {
    ...(_j = _BottomEnd.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: `{
  decorators: [Story => <div style={{
    backgroundColor: 'lightgrey',
    padding: '10px'
  }}>
        <Story />
      </div>],
  render: () => <div className="docs-show-dropdown-open">
      <DropdownMenu data-popper-placement="bottom-end">
        <LinkList>
          <LinkListItem inDropdown href='#' active>
            <span>Attivo<span className="visually-hidden">Voce attiva</span></span>
          </LinkListItem>
          <LinkListItem inDropdown href='#' disabled aria-disabled="true">
            <span>Disabilitato</span>
          </LinkListItem>
          <LinkListItem inDropdown href='#'>
            <span>Normale</span>
          </LinkListItem>
        </LinkList>
      </DropdownMenu>
    </div>
}`,
      ...(_l = (_k = _BottomEnd.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
_HeaderEDivider.parameters = {
  ..._HeaderEDivider.parameters,
  docs: {
    ...(_m = _HeaderEDivider.parameters) == null ? void 0 : _m.docs,
    source: {
      originalSource: `{
  parameters: {
    docs: {
      story: {
        height: '230px'
      }
    }
  },
  decorators: [Story => <div style={{
    backgroundColor: 'lightgrey',
    padding: '10px'
  }}>
        <Story />
      </div>],
  render: () => <div className="docs-show-dropdown-open">
      <DropdownMenu>
        <LinkList>
          <LinkListItem header inDropdown className="text-primary fw-bold">
            Intestazione
          </LinkListItem>
          <LinkListItem inDropdown href='#' active>
            <span>Attivo<span className="visually-hidden">Voce attiva</span></span>
          </LinkListItem>
          <LinkListItem inDropdown href='#' disabled aria-disabled="true">
            <span>Disabilitato</span>
          </LinkListItem>
          <LinkListItem inDropdown href='#'>
            <span>Normale</span>
          </LinkListItem>
          <LinkListItem divider />
          <LinkListItem inDropdown href='#'>
            <span>Azione 4</span>
          </LinkListItem>
        </LinkList>
      </DropdownMenu>
    </div>
}`,
      ...(_o = (_n = _HeaderEDivider.parameters) == null ? void 0 : _n.docs) == null ? void 0 : _o.source
    }
  }
};
const __namedExportsOrder = ["_Link", "_Bottone", "_Default", "_BottomEnd", "_HeaderEDivider"];
const DropdownMenuStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  _BottomEnd,
  _Bottone,
  _Default,
  _HeaderEDivider,
  _Link,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  DropdownMenuStories as D,
  _Link as _,
  _Bottone as a,
  _Default as b,
  _BottomEnd as c,
  _HeaderEDivider as d
};
