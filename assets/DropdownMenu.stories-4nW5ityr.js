var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o;
import { R as React } from "./index-aC1ZMUrs.js";
import { D as DropdownMenu } from "./DropdownMenu-BVvApC7Y.js";
import { D as Dropdown, a as DropdownToggle } from "./DropdownToggle-LBwHGDGD.js";
import { L as LinkList, a as LinkListItem } from "./LinkListItem-B69qYNZ5.js";
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
    return /* @__PURE__ */ React.createElement(Dropdown, null, /* @__PURE__ */ React.createElement(DropdownToggle, { color: "primary", tag: "a", caret: true }, "Apri dropdown"), /* @__PURE__ */ React.createElement(DropdownMenu, null, /* @__PURE__ */ React.createElement(LinkList, null, /* @__PURE__ */ React.createElement(LinkListItem, { inDropdown: true, href: "#", active: true }, /* @__PURE__ */ React.createElement("span", null, "Attivo", /* @__PURE__ */ React.createElement("span", { className: "visually-hidden" }, "Voce attiva"))), /* @__PURE__ */ React.createElement(LinkListItem, { inDropdown: true, href: "#", disabled: true, "aria-disabled": "true" }, /* @__PURE__ */ React.createElement("span", null, "Disabilitato")), /* @__PURE__ */ React.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ React.createElement("span", null, "Normale")))));
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
    return /* @__PURE__ */ React.createElement(Dropdown, null, /* @__PURE__ */ React.createElement(DropdownToggle, { color: "primary", caret: true }, "Apri dropdown"), /* @__PURE__ */ React.createElement(DropdownMenu, null, /* @__PURE__ */ React.createElement(LinkList, null, /* @__PURE__ */ React.createElement(LinkListItem, { inDropdown: true, href: "#", active: true }, /* @__PURE__ */ React.createElement("span", null, "Attivo", /* @__PURE__ */ React.createElement("span", { className: "visually-hidden" }, "Voce attiva"))), /* @__PURE__ */ React.createElement(LinkListItem, { inDropdown: true, href: "#", disabled: true, "aria-disabled": "true" }, /* @__PURE__ */ React.createElement("span", null, "Disabilitato")), /* @__PURE__ */ React.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ React.createElement("span", null, "Normale")))));
  }
};
const _Default = {
  decorators: [(Story) => /* @__PURE__ */ React.createElement("div", { style: {
    backgroundColor: "lightgrey",
    padding: "10px"
  } }, /* @__PURE__ */ React.createElement(Story, null))],
  render: () => /* @__PURE__ */ React.createElement("div", { className: "docs-show-dropdown-open" }, /* @__PURE__ */ React.createElement(DropdownMenu, null, /* @__PURE__ */ React.createElement(LinkList, null, /* @__PURE__ */ React.createElement(LinkListItem, { inDropdown: true, href: "#", active: true }, /* @__PURE__ */ React.createElement("span", null, "Attivo", /* @__PURE__ */ React.createElement("span", { className: "visually-hidden" }, "Voce attiva"))), /* @__PURE__ */ React.createElement(LinkListItem, { inDropdown: true, href: "#", disabled: true, "aria-disabled": "true" }, /* @__PURE__ */ React.createElement("span", null, "Disabilitato")), /* @__PURE__ */ React.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ React.createElement("span", null, "Normale")))))
};
const _BottomEnd = {
  decorators: [(Story) => /* @__PURE__ */ React.createElement("div", { style: {
    backgroundColor: "lightgrey",
    padding: "10px"
  } }, /* @__PURE__ */ React.createElement(Story, null))],
  render: () => /* @__PURE__ */ React.createElement("div", { className: "docs-show-dropdown-open" }, /* @__PURE__ */ React.createElement(DropdownMenu, { "data-popper-placement": "bottom-end" }, /* @__PURE__ */ React.createElement(LinkList, null, /* @__PURE__ */ React.createElement(LinkListItem, { inDropdown: true, href: "#", active: true }, /* @__PURE__ */ React.createElement("span", null, "Attivo", /* @__PURE__ */ React.createElement("span", { className: "visually-hidden" }, "Voce attiva"))), /* @__PURE__ */ React.createElement(LinkListItem, { inDropdown: true, href: "#", disabled: true, "aria-disabled": "true" }, /* @__PURE__ */ React.createElement("span", null, "Disabilitato")), /* @__PURE__ */ React.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ React.createElement("span", null, "Normale")))))
};
const _HeaderEDivider = {
  parameters: {
    docs: {
      story: {
        height: "230px"
      }
    }
  },
  decorators: [(Story) => /* @__PURE__ */ React.createElement("div", { style: {
    backgroundColor: "lightgrey",
    padding: "10px"
  } }, /* @__PURE__ */ React.createElement(Story, null))],
  render: () => /* @__PURE__ */ React.createElement("div", { className: "docs-show-dropdown-open" }, /* @__PURE__ */ React.createElement(DropdownMenu, null, /* @__PURE__ */ React.createElement(LinkList, null, /* @__PURE__ */ React.createElement(LinkListItem, { header: true, inDropdown: true, className: "text-primary fw-bold" }, "Intestazione"), /* @__PURE__ */ React.createElement(LinkListItem, { inDropdown: true, href: "#", active: true }, /* @__PURE__ */ React.createElement("span", null, "Attivo", /* @__PURE__ */ React.createElement("span", { className: "visually-hidden" }, "Voce attiva"))), /* @__PURE__ */ React.createElement(LinkListItem, { inDropdown: true, href: "#", disabled: true, "aria-disabled": "true" }, /* @__PURE__ */ React.createElement("span", null, "Disabilitato")), /* @__PURE__ */ React.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ React.createElement("span", null, "Normale")), /* @__PURE__ */ React.createElement(LinkListItem, { divider: true }), /* @__PURE__ */ React.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ React.createElement("span", null, "Azione 4")))))
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
