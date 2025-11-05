var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D;
import { e } from "./iframe-bYA1CaqE.js";
import { F as Form } from "./Form-CgPiSfoT.js";
import { F as FormGroup } from "./FormGroup-DM22xfTi.js";
import { L as Label } from "./Label-Bic_h4oo.js";
import { P as Pager, a as PaginationItem, b as PaginationLink } from "./Pager-C8P83cXg.js";
import { D as Dropdown, a as DropdownToggle } from "./DropdownToggle-CgpH25xi.js";
import { D as DropdownMenu } from "./DropdownMenu-BsXLOHK8.js";
import { I as Icon } from "./Icon-DeQEcrNU.js";
import { I as Input } from "./Input-CXUjzcOq.js";
import { L as LinkList, a as LinkListItem } from "./LinkListItem-rUKnlsqr.js";
import "./track-focus-DbJ2CO43.js";
const meta = {
  title: "Documentazione/Componenti/Pager",
  component: Pager
};
const Esempi = {
  render: () => /* @__PURE__ */ e.createElement(Pager, { "aria-label": "Esempio di navigazione" }, /* @__PURE__ */ e.createElement(PaginationItem, null, /* @__PURE__ */ e.createElement(PaginationLink, { previous: true, href: "#" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-chevron-left", "aria-hidden": true }))), /* @__PURE__ */ e.createElement(PaginationItem, null, /* @__PURE__ */ e.createElement(PaginationLink, { href: "#" }, "1")), /* @__PURE__ */ e.createElement(PaginationItem, null, /* @__PURE__ */ e.createElement(PaginationLink, { href: "#" }, "2")), /* @__PURE__ */ e.createElement(PaginationItem, null, /* @__PURE__ */ e.createElement(PaginationLink, { href: "#" }, "3")), /* @__PURE__ */ e.createElement(PaginationItem, null, /* @__PURE__ */ e.createElement(PaginationLink, { next: true, href: "#" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-chevron-right", "aria-hidden": true }))))
};
const StatoDisabilitatoEAttivo = {
  render: () => /* @__PURE__ */ e.createElement(Pager, { "aria-label": "Esempio di navigazione" }, /* @__PURE__ */ e.createElement(PaginationItem, { disabled: true }, /* @__PURE__ */ e.createElement(PaginationLink, { previous: true, href: "#" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-chevron-left", "aria-hidden": true }))), /* @__PURE__ */ e.createElement(PaginationItem, null, /* @__PURE__ */ e.createElement(PaginationLink, { "aria-current": "page", href: "#" }, "1")), /* @__PURE__ */ e.createElement(PaginationItem, null, /* @__PURE__ */ e.createElement(PaginationLink, { href: "#" }, "2")), /* @__PURE__ */ e.createElement(PaginationItem, { disabled: true }, /* @__PURE__ */ e.createElement(PaginationLink, { href: "#" }, "3")), /* @__PURE__ */ e.createElement(PaginationItem, { disabled: true }, /* @__PURE__ */ e.createElement(PaginationLink, { next: true, href: "#" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-chevron-right", "aria-hidden": true }))))
};
const Allineamento = {
  render: () => /* @__PURE__ */ e.createElement("section", null, /* @__PURE__ */ e.createElement(Pager, { className: "justify-content-center", "aria-label": "Esempio di navigazione" }, /* @__PURE__ */ e.createElement(PaginationItem, { disabled: true }, /* @__PURE__ */ e.createElement(PaginationLink, { previous: true, href: "#" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-chevron-left", "aria-hidden": true }))), /* @__PURE__ */ e.createElement(PaginationItem, null, /* @__PURE__ */ e.createElement(PaginationLink, { "aria-current": "page", href: "#" }, "1")), /* @__PURE__ */ e.createElement(PaginationItem, null, /* @__PURE__ */ e.createElement(PaginationLink, { href: "#" }, "2")), /* @__PURE__ */ e.createElement(PaginationItem, null, /* @__PURE__ */ e.createElement(PaginationLink, { href: "#" }, "3")), /* @__PURE__ */ e.createElement(PaginationItem, null, /* @__PURE__ */ e.createElement(PaginationLink, { next: true, href: "#" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-chevron-right", "aria-hidden": true })))), /* @__PURE__ */ e.createElement(Pager, { className: "justify-content-end", "aria-label": "Esempio di navigazione" }, /* @__PURE__ */ e.createElement(PaginationItem, { disabled: true }, /* @__PURE__ */ e.createElement(PaginationLink, { previous: true, href: "#" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-chevron-left", "aria-hidden": true }))), /* @__PURE__ */ e.createElement(PaginationItem, null, /* @__PURE__ */ e.createElement(PaginationLink, { "aria-current": "page", href: "#" }, "1")), /* @__PURE__ */ e.createElement(PaginationItem, null, /* @__PURE__ */ e.createElement(PaginationLink, { href: "#" }, "2")), /* @__PURE__ */ e.createElement(PaginationItem, null, /* @__PURE__ */ e.createElement(PaginationLink, { href: "#" }, "3")), /* @__PURE__ */ e.createElement(PaginationItem, null, /* @__PURE__ */ e.createElement(PaginationLink, { next: true, href: "#" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-chevron-right", "aria-hidden": true })))))
};
const Responsive = {
  render: () => /* @__PURE__ */ e.createElement(Pager, { "aria-label": "Esempio di navigazione" }, /* @__PURE__ */ e.createElement(PaginationItem, null, /* @__PURE__ */ e.createElement(PaginationLink, { previous: true, href: "#" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-chevron-left", "aria-hidden": true }))), /* @__PURE__ */ e.createElement(PaginationItem, { className: "d-sm-block" }, /* @__PURE__ */ e.createElement(PaginationLink, { href: "#" }, "9")), /* @__PURE__ */ e.createElement(PaginationItem, { className: "d-sm-block" }, /* @__PURE__ */ e.createElement(PaginationLink, { href: "#" }, "10")), /* @__PURE__ */ e.createElement(PaginationItem, null, /* @__PURE__ */ e.createElement(PaginationLink, { "aria-current": "page", href: "#" }, /* @__PURE__ */ e.createElement("span", { className: "d-sm-none" }, "Pagina "), "11")), /* @__PURE__ */ e.createElement(PaginationItem, { className: "d-sm-block" }, /* @__PURE__ */ e.createElement(PaginationLink, { href: "#" }, "12")), /* @__PURE__ */ e.createElement(PaginationItem, { className: "d-sm-block" }, /* @__PURE__ */ e.createElement(PaginationLink, { href: "#" }, "13")), /* @__PURE__ */ e.createElement(PaginationItem, null, /* @__PURE__ */ e.createElement(PaginationLink, { next: true, href: "#" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-chevron-right", "aria-hidden": true }))))
};
const MoreComponent = {
  render: () => /* @__PURE__ */ e.createElement(Pager, { className: "mb-3", "aria-label": "Esempio di paginazione" }, /* @__PURE__ */ e.createElement(PaginationItem, null, /* @__PURE__ */ e.createElement(PaginationLink, { previous: true, href: "#" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-chevron-left", "aria-hidden": true }))), /* @__PURE__ */ e.createElement(PaginationItem, { className: "d-none d-sm-block" }, /* @__PURE__ */ e.createElement(PaginationLink, { href: "#" }, "1")), /* @__PURE__ */ e.createElement(PaginationItem, { className: "d-none d-sm-block" }, /* @__PURE__ */ e.createElement(PaginationLink, { tag: "span" }, "…")), /* @__PURE__ */ e.createElement(PaginationItem, { className: "d-none d-sm-block" }, /* @__PURE__ */ e.createElement(PaginationLink, { href: "#" }, "24")), /* @__PURE__ */ e.createElement(PaginationItem, { className: "d-none d-sm-block" }, /* @__PURE__ */ e.createElement(PaginationLink, { href: "#" }, "25")), /* @__PURE__ */ e.createElement(PaginationItem, null, /* @__PURE__ */ e.createElement(PaginationLink, { "aria-current": "page", href: "#" }, "26")), /* @__PURE__ */ e.createElement(PaginationItem, { className: "d-none d-sm-block" }, /* @__PURE__ */ e.createElement(PaginationLink, { href: "#" }, "27")), /* @__PURE__ */ e.createElement(PaginationItem, { className: "d-none d-sm-block" }, /* @__PURE__ */ e.createElement(PaginationLink, { href: "#" }, "28")), /* @__PURE__ */ e.createElement(PaginationItem, { className: "d-none d-sm-block" }, /* @__PURE__ */ e.createElement(PaginationLink, { tag: "span" }, "…")), /* @__PURE__ */ e.createElement(PaginationItem, { className: "d-none d-sm-block" }, /* @__PURE__ */ e.createElement(PaginationLink, { href: "#" }, "50")), /* @__PURE__ */ e.createElement(PaginationItem, null, /* @__PURE__ */ e.createElement(PaginationLink, { next: true, href: "#" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-chevron-right", "aria-hidden": true }))))
};
const PageChanger = {
  render: () => /* @__PURE__ */ e.createElement(Pager, { className: "mb-3", "aria-label": "Esempio di paginazione" }, /* @__PURE__ */ e.createElement(PaginationItem, null, /* @__PURE__ */ e.createElement(PaginationLink, { previous: true, href: "#" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-chevron-left", "aria-hidden": true }))), /* @__PURE__ */ e.createElement(PaginationItem, { className: "d-none d-sm-block" }, /* @__PURE__ */ e.createElement(PaginationLink, { href: "#" }, "1")), /* @__PURE__ */ e.createElement(PaginationItem, { className: "d-none d-sm-block" }, /* @__PURE__ */ e.createElement(PaginationLink, { tag: "span" }, "…")), /* @__PURE__ */ e.createElement(PaginationItem, { className: "d-none d-sm-block" }, /* @__PURE__ */ e.createElement(PaginationLink, { href: "#" }, "24")), /* @__PURE__ */ e.createElement(PaginationItem, { className: "d-none d-sm-block" }, /* @__PURE__ */ e.createElement(PaginationLink, { href: "#" }, "25")), /* @__PURE__ */ e.createElement(PaginationItem, null, /* @__PURE__ */ e.createElement(PaginationLink, { "aria-current": "page", href: "#" }, "26")), /* @__PURE__ */ e.createElement(PaginationItem, { className: "d-none d-sm-block" }, /* @__PURE__ */ e.createElement(PaginationLink, { href: "#" }, "27")), /* @__PURE__ */ e.createElement(PaginationItem, { className: "d-none d-sm-block" }, /* @__PURE__ */ e.createElement(PaginationLink, { href: "#" }, "28")), /* @__PURE__ */ e.createElement(PaginationItem, { className: "d-none d-sm-block" }, /* @__PURE__ */ e.createElement(PaginationLink, { tag: "span" }, "…")), /* @__PURE__ */ e.createElement(PaginationItem, { className: "d-none d-sm-block" }, /* @__PURE__ */ e.createElement(PaginationLink, { href: "#" }, "50")), /* @__PURE__ */ e.createElement(PaginationItem, null, /* @__PURE__ */ e.createElement(PaginationLink, { next: true, href: "#" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-chevron-right", "aria-hidden": true }))), /* @__PURE__ */ e.createElement(Dropdown, null, /* @__PURE__ */ e.createElement(DropdownToggle, { id: "pagerChanger", "aria-label": "Salta alla pagina", caret: true }, "10/pagina", /* @__PURE__ */ e.createElement(Icon, { className: "icon icon-primary icon-sm", icon: "it-expand" })), /* @__PURE__ */ e.createElement(DropdownMenu, null, /* @__PURE__ */ e.createElement(LinkList, null, /* @__PURE__ */ e.createElement(LinkListItem, { active: true }, "pag. 10"), /* @__PURE__ */ e.createElement(LinkListItem, null, "pag. 20"), /* @__PURE__ */ e.createElement(LinkListItem, null, "pag. 30"), /* @__PURE__ */ e.createElement(LinkListItem, null, "pag. 40"), /* @__PURE__ */ e.createElement(LinkListItem, null, "pag. 50")))))
};
const JumpToPage = {
  render: () => /* @__PURE__ */ e.createElement(Pager, { className: "mb-3", "aria-label": "Esempio di paginazione" }, /* @__PURE__ */ e.createElement(PaginationItem, null, /* @__PURE__ */ e.createElement(PaginationLink, { previous: true, href: "#" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-chevron-left", "aria-hidden": true }))), /* @__PURE__ */ e.createElement(PaginationItem, { className: "d-none d-sm-block" }, /* @__PURE__ */ e.createElement(PaginationLink, { href: "#" }, "1")), /* @__PURE__ */ e.createElement(PaginationItem, { className: "d-none d-sm-block" }, /* @__PURE__ */ e.createElement(PaginationLink, { tag: "span" }, "…")), /* @__PURE__ */ e.createElement(PaginationItem, { className: "d-none d-sm-block" }, /* @__PURE__ */ e.createElement(PaginationLink, { href: "#" }, "24")), /* @__PURE__ */ e.createElement(PaginationItem, { className: "d-none d-sm-block" }, /* @__PURE__ */ e.createElement(PaginationLink, { href: "#" }, "25")), /* @__PURE__ */ e.createElement(PaginationItem, null, /* @__PURE__ */ e.createElement(PaginationLink, { "aria-current": "page", href: "#" }, "26")), /* @__PURE__ */ e.createElement(PaginationItem, { className: "d-none d-sm-block" }, /* @__PURE__ */ e.createElement(PaginationLink, { href: "#" }, "27")), /* @__PURE__ */ e.createElement(PaginationItem, { className: "d-none d-sm-block" }, /* @__PURE__ */ e.createElement(PaginationLink, { href: "#" }, "28")), /* @__PURE__ */ e.createElement(PaginationItem, { className: "d-none d-sm-block" }, /* @__PURE__ */ e.createElement(PaginationLink, { tag: "span" }, "…")), /* @__PURE__ */ e.createElement(PaginationItem, { className: "d-none d-sm-block" }, /* @__PURE__ */ e.createElement(PaginationLink, { href: "#" }, "50")), /* @__PURE__ */ e.createElement(PaginationItem, null, /* @__PURE__ */ e.createElement(PaginationLink, { next: true, href: "#" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-chevron-right", "aria-hidden": true }))), /* @__PURE__ */ e.createElement(Form, null, /* @__PURE__ */ e.createElement(FormGroup, null, /* @__PURE__ */ e.createElement(Input, { id: "jumpToPage", type: "text", className: "form-control", maxLength: 2 }), /* @__PURE__ */ e.createElement(Label, { for: "jumpToPage" }, "Vai a ..."))))
};
const SimpleMode = {
  render: () => /* @__PURE__ */ e.createElement(Pager, { className: "mb-3", "aria-label": "Esempio di paginazione" }, /* @__PURE__ */ e.createElement(PaginationItem, { disabled: true }, /* @__PURE__ */ e.createElement(PaginationLink, { previous: true, href: "#" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-chevron-left", "aria-hidden": true }))), /* @__PURE__ */ e.createElement(PaginationItem, { className: "d-none d-sm-block" }, /* @__PURE__ */ e.createElement(PaginationLink, { tag: "span" }, "1")), /* @__PURE__ */ e.createElement(PaginationItem, { className: "d-none d-sm-block" }, /* @__PURE__ */ e.createElement(PaginationLink, { tag: "span" }, "/")), /* @__PURE__ */ e.createElement(PaginationItem, { className: "d-none d-sm-block" }, /* @__PURE__ */ e.createElement(PaginationLink, { tag: "span" }, "5")), /* @__PURE__ */ e.createElement(PaginationItem, null, /* @__PURE__ */ e.createElement(PaginationLink, { next: true, href: "#" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-chevron-right", "aria-hidden": true }))))
};
const LinkTestuali = {
  render: () => /* @__PURE__ */ e.createElement(Pager, { className: "mb-3", "aria-label": "Esempio di paginazione" }, /* @__PURE__ */ e.createElement(PaginationItem, null, /* @__PURE__ */ e.createElement(PaginationLink, { previous: true, href: "#", className: "text" }, "Precedente")), /* @__PURE__ */ e.createElement(PaginationItem, { className: "d-none d-sm-block" }, /* @__PURE__ */ e.createElement(PaginationLink, { href: "#" }, "1")), /* @__PURE__ */ e.createElement(PaginationItem, { className: "d-none d-sm-block" }, /* @__PURE__ */ e.createElement(PaginationLink, { tag: "span" }, "…")), /* @__PURE__ */ e.createElement(PaginationItem, { className: "d-none d-sm-block" }, /* @__PURE__ */ e.createElement(PaginationLink, { href: "#" }, "24")), /* @__PURE__ */ e.createElement(PaginationItem, { className: "d-none d-sm-block" }, /* @__PURE__ */ e.createElement(PaginationLink, { href: "#" }, "25")), /* @__PURE__ */ e.createElement(PaginationItem, null, /* @__PURE__ */ e.createElement(PaginationLink, { "aria-current": "page", href: "#" }, "26")), /* @__PURE__ */ e.createElement(PaginationItem, { className: "d-none d-sm-block" }, /* @__PURE__ */ e.createElement(PaginationLink, { href: "#" }, "27")), /* @__PURE__ */ e.createElement(PaginationItem, { className: "d-none d-sm-block" }, /* @__PURE__ */ e.createElement(PaginationLink, { href: "#" }, "28")), /* @__PURE__ */ e.createElement(PaginationItem, { className: "d-none d-sm-block" }, /* @__PURE__ */ e.createElement(PaginationLink, { tag: "span" }, "…")), /* @__PURE__ */ e.createElement(PaginationItem, { className: "d-none d-sm-block" }, /* @__PURE__ */ e.createElement(PaginationLink, { href: "#" }, "50")), /* @__PURE__ */ e.createElement(PaginationItem, null, /* @__PURE__ */ e.createElement(PaginationLink, { next: true, href: "#", className: "text" }, "Successiva")))
};
const TotalNumber = {
  render: () => /* @__PURE__ */ e.createElement(Pager, { total: {
    ariaLabel: "Pagina",
    label: " 24 di 50"
  }, "aria-label": "Esempio di paginazione" }, /* @__PURE__ */ e.createElement(PaginationItem, null, /* @__PURE__ */ e.createElement(PaginationLink, { previous: true, href: "#" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-chevron-left", "aria-hidden": true }))), /* @__PURE__ */ e.createElement(PaginationItem, { className: "d-none d-sm-block" }, /* @__PURE__ */ e.createElement(PaginationLink, { href: "#" }, "1")), /* @__PURE__ */ e.createElement(PaginationItem, { className: "d-none d-sm-block" }, /* @__PURE__ */ e.createElement(PaginationLink, { tag: "span" }, "…")), /* @__PURE__ */ e.createElement(PaginationItem, { className: "d-none d-sm-block" }, /* @__PURE__ */ e.createElement(PaginationLink, { "aria-current": "page", href: "#" }, "24")), /* @__PURE__ */ e.createElement(PaginationItem, { className: "d-none d-sm-block" }, /* @__PURE__ */ e.createElement(PaginationLink, { href: "#" }, "25")), /* @__PURE__ */ e.createElement(PaginationItem, null, /* @__PURE__ */ e.createElement(PaginationLink, { href: "#" }, "26")), /* @__PURE__ */ e.createElement(PaginationItem, { className: "d-none d-sm-block" }, /* @__PURE__ */ e.createElement(PaginationLink, { href: "#" }, "27")), /* @__PURE__ */ e.createElement(PaginationItem, { className: "d-none d-sm-block" }, /* @__PURE__ */ e.createElement(PaginationLink, { href: "#" }, "28")), /* @__PURE__ */ e.createElement(PaginationItem, { className: "d-none d-sm-block" }, /* @__PURE__ */ e.createElement(PaginationLink, { tag: "span" }, "…")), /* @__PURE__ */ e.createElement(PaginationItem, { className: "d-none d-sm-block" }, /* @__PURE__ */ e.createElement(PaginationLink, { href: "#" }, "50")), /* @__PURE__ */ e.createElement(PaginationItem, null, /* @__PURE__ */ e.createElement(PaginationLink, { next: true, href: "#" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-chevron-right", "aria-hidden": true }))))
};
Esempi.parameters = {
  ...Esempi.parameters,
  docs: {
    ...(_a = Esempi.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{\n  render: () => <Pager aria-label='Esempio di navigazione'>\n      <PagerItem>\n        <PagerLink previous href='#'>\n          <Icon icon='it-chevron-left' aria-hidden />\n        </PagerLink>\n      </PagerItem>\n      <PagerItem>\n        <PagerLink href='#'>1</PagerLink>\n      </PagerItem>\n      <PagerItem>\n        <PagerLink href='#'>2</PagerLink>\n      </PagerItem>\n      <PagerItem>\n        <PagerLink href='#'>3</PagerLink>\n      </PagerItem>\n      <PagerItem>\n        <PagerLink next href='#'>\n          <Icon icon='it-chevron-right' aria-hidden />\n        </PagerLink>\n      </PagerItem>\n    </Pager>\n}",
      ...(_c = (_b = Esempi.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
StatoDisabilitatoEAttivo.parameters = {
  ...StatoDisabilitatoEAttivo.parameters,
  docs: {
    ...(_d = StatoDisabilitatoEAttivo.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "{\n  render: () => <Pager aria-label='Esempio di navigazione'>\n      <PagerItem disabled>\n        <PagerLink previous href='#'>\n          <Icon icon='it-chevron-left' aria-hidden />\n        </PagerLink>\n      </PagerItem>\n      <PagerItem>\n        <PagerLink aria-current='page' href='#'>\n          1\n        </PagerLink>\n      </PagerItem>\n      <PagerItem>\n        <PagerLink href='#'>2</PagerLink>\n      </PagerItem>\n      <PagerItem disabled>\n        <PagerLink href='#'>3</PagerLink>\n      </PagerItem>\n      <PagerItem disabled>\n        <PagerLink next href='#'>\n          <Icon icon='it-chevron-right' aria-hidden />\n        </PagerLink>\n      </PagerItem>\n    </Pager>\n}",
      ...(_f = (_e = StatoDisabilitatoEAttivo.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
Allineamento.parameters = {
  ...Allineamento.parameters,
  docs: {
    ...(_g = Allineamento.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: "{\n  render: () => <section>\n      <Pager className='justify-content-center' aria-label='Esempio di navigazione'>\n        <PagerItem disabled>\n          <PagerLink previous href='#'>\n            <Icon icon='it-chevron-left' aria-hidden />\n          </PagerLink>\n        </PagerItem>\n        <PagerItem>\n          <PagerLink aria-current='page' href='#'>\n            1\n          </PagerLink>\n        </PagerItem>\n        <PagerItem>\n          <PagerLink href='#'>2</PagerLink>\n        </PagerItem>\n        <PagerItem>\n          <PagerLink href='#'>3</PagerLink>\n        </PagerItem>\n        <PagerItem>\n          <PagerLink next href='#'>\n            <Icon icon='it-chevron-right' aria-hidden />\n          </PagerLink>\n        </PagerItem>\n      </Pager>\n\n      <Pager className='justify-content-end' aria-label='Esempio di navigazione'>\n        <PagerItem disabled>\n          <PagerLink previous href='#'>\n            <Icon icon='it-chevron-left' aria-hidden />\n          </PagerLink>\n        </PagerItem>\n        <PagerItem>\n          <PagerLink aria-current='page' href='#'>\n            1\n          </PagerLink>\n        </PagerItem>\n        <PagerItem>\n          <PagerLink href='#'>2</PagerLink>\n        </PagerItem>\n        <PagerItem>\n          <PagerLink href='#'>3</PagerLink>\n        </PagerItem>\n        <PagerItem>\n          <PagerLink next href='#'>\n            <Icon icon='it-chevron-right' aria-hidden />\n          </PagerLink>\n        </PagerItem>\n      </Pager>\n    </section>\n}",
      ...(_i = (_h = Allineamento.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
Responsive.parameters = {
  ...Responsive.parameters,
  docs: {
    ...(_j = Responsive.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: "{\n  render: () => <Pager aria-label='Esempio di navigazione'>\n      <PagerItem>\n        <PagerLink previous href='#'>\n          <Icon icon='it-chevron-left' aria-hidden />\n        </PagerLink>\n      </PagerItem>\n      <PagerItem className='d-sm-block'>\n        <PagerLink href='#'>9</PagerLink>\n      </PagerItem>\n      <PagerItem className='d-sm-block'>\n        <PagerLink href='#'>10</PagerLink>\n      </PagerItem>\n      <PagerItem>\n        <PagerLink aria-current='page' href='#'>\n          <span className='d-sm-none'>Pagina&nbsp;</span>11\n        </PagerLink>\n      </PagerItem>\n      <PagerItem className='d-sm-block'>\n        <PagerLink href='#'>12</PagerLink>\n      </PagerItem>\n      <PagerItem className='d-sm-block'>\n        <PagerLink href='#'>13</PagerLink>\n      </PagerItem>\n      <PagerItem>\n        <PagerLink next href='#'>\n          <Icon icon='it-chevron-right' aria-hidden />\n        </PagerLink>\n      </PagerItem>\n    </Pager>\n}",
      ...(_l = (_k = Responsive.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
MoreComponent.parameters = {
  ...MoreComponent.parameters,
  docs: {
    ...(_m = MoreComponent.parameters) == null ? void 0 : _m.docs,
    source: {
      originalSource: "{\n  render: () => <Pager className='mb-3' aria-label='Esempio di paginazione'>\n      <PagerItem>\n        <PagerLink previous href='#'>\n          <Icon icon='it-chevron-left' aria-hidden />\n        </PagerLink>\n      </PagerItem>\n      <PagerItem className='d-none d-sm-block'>\n        <PagerLink href='#'>1</PagerLink>\n      </PagerItem>\n      <PagerItem className='d-none d-sm-block'>\n        <PagerLink tag='span'>…</PagerLink>\n      </PagerItem>\n      <PagerItem className='d-none d-sm-block'>\n        <PagerLink href='#'>24</PagerLink>\n      </PagerItem>\n      <PagerItem className='d-none d-sm-block'>\n        <PagerLink href='#'>25</PagerLink>\n      </PagerItem>\n      <PagerItem>\n        <PagerLink aria-current='page' href='#'>\n          26\n        </PagerLink>\n      </PagerItem>\n      <PagerItem className='d-none d-sm-block'>\n        <PagerLink href='#'>27</PagerLink>\n      </PagerItem>\n      <PagerItem className='d-none d-sm-block'>\n        <PagerLink href='#'>28</PagerLink>\n      </PagerItem>\n      <PagerItem className='d-none d-sm-block'>\n        <PagerLink tag='span'>…</PagerLink>\n      </PagerItem>\n      <PagerItem className='d-none d-sm-block'>\n        <PagerLink href='#'>50</PagerLink>\n      </PagerItem>\n      <PagerItem>\n        <PagerLink next href='#'>\n          <Icon icon='it-chevron-right' aria-hidden />\n        </PagerLink>\n      </PagerItem>\n    </Pager>\n}",
      ...(_o = (_n = MoreComponent.parameters) == null ? void 0 : _n.docs) == null ? void 0 : _o.source
    }
  }
};
PageChanger.parameters = {
  ...PageChanger.parameters,
  docs: {
    ...(_p = PageChanger.parameters) == null ? void 0 : _p.docs,
    source: {
      originalSource: "{\n  render: () => <Pager className='mb-3' aria-label='Esempio di paginazione'>\n      <PagerItem>\n        <PagerLink previous href='#'>\n          <Icon icon='it-chevron-left' aria-hidden />\n        </PagerLink>\n      </PagerItem>\n      <PagerItem className='d-none d-sm-block'>\n        <PagerLink href='#'>1</PagerLink>\n      </PagerItem>\n      <PagerItem className='d-none d-sm-block'>\n        <PagerLink tag='span'>…</PagerLink>\n      </PagerItem>\n      <PagerItem className='d-none d-sm-block'>\n        <PagerLink href='#'>24</PagerLink>\n      </PagerItem>\n      <PagerItem className='d-none d-sm-block'>\n        <PagerLink href='#'>25</PagerLink>\n      </PagerItem>\n      <PagerItem>\n        <PagerLink aria-current='page' href='#'>\n          26\n        </PagerLink>\n      </PagerItem>\n      <PagerItem className='d-none d-sm-block'>\n        <PagerLink href='#'>27</PagerLink>\n      </PagerItem>\n      <PagerItem className='d-none d-sm-block'>\n        <PagerLink href='#'>28</PagerLink>\n      </PagerItem>\n      <PagerItem className='d-none d-sm-block'>\n        <PagerLink tag='span'>…</PagerLink>\n      </PagerItem>\n      <PagerItem className='d-none d-sm-block'>\n        <PagerLink href='#'>50</PagerLink>\n      </PagerItem>\n      <PagerItem>\n        <PagerLink next href='#'>\n          <Icon icon='it-chevron-right' aria-hidden />\n        </PagerLink>\n      </PagerItem>\n      <Dropdown>\n        <DropdownToggle id='pagerChanger' aria-label='Salta alla pagina' caret>\n          10/pagina\n          <Icon className='icon icon-primary icon-sm' icon='it-expand' />\n        </DropdownToggle>\n        <DropdownMenu>\n          <LinkList>\n            <LinkListItem active>pag. 10</LinkListItem>\n            <LinkListItem>pag. 20</LinkListItem>\n            <LinkListItem>pag. 30</LinkListItem>\n            <LinkListItem>pag. 40</LinkListItem>\n            <LinkListItem>pag. 50</LinkListItem>\n          </LinkList>\n        </DropdownMenu>\n      </Dropdown>\n    </Pager>\n}",
      ...(_r = (_q = PageChanger.parameters) == null ? void 0 : _q.docs) == null ? void 0 : _r.source
    }
  }
};
JumpToPage.parameters = {
  ...JumpToPage.parameters,
  docs: {
    ...(_s = JumpToPage.parameters) == null ? void 0 : _s.docs,
    source: {
      originalSource: "{\n  render: () => <Pager className='mb-3' aria-label='Esempio di paginazione'>\n      <PagerItem>\n        <PagerLink previous href='#'>\n          <Icon icon='it-chevron-left' aria-hidden />\n        </PagerLink>\n      </PagerItem>\n      <PagerItem className='d-none d-sm-block'>\n        <PagerLink href='#'>1</PagerLink>\n      </PagerItem>\n      <PagerItem className='d-none d-sm-block'>\n        <PagerLink tag='span'>…</PagerLink>\n      </PagerItem>\n      <PagerItem className='d-none d-sm-block'>\n        <PagerLink href='#'>24</PagerLink>\n      </PagerItem>\n      <PagerItem className='d-none d-sm-block'>\n        <PagerLink href='#'>25</PagerLink>\n      </PagerItem>\n      <PagerItem>\n        <PagerLink aria-current='page' href='#'>\n          26\n        </PagerLink>\n      </PagerItem>\n      <PagerItem className='d-none d-sm-block'>\n        <PagerLink href='#'>27</PagerLink>\n      </PagerItem>\n      <PagerItem className='d-none d-sm-block'>\n        <PagerLink href='#'>28</PagerLink>\n      </PagerItem>\n      <PagerItem className='d-none d-sm-block'>\n        <PagerLink tag='span'>…</PagerLink>\n      </PagerItem>\n      <PagerItem className='d-none d-sm-block'>\n        <PagerLink href='#'>50</PagerLink>\n      </PagerItem>\n      <PagerItem>\n        <PagerLink next href='#'>\n          <Icon icon='it-chevron-right' aria-hidden />\n        </PagerLink>\n      </PagerItem>\n      <Form>\n        <FormGroup>\n          <Input id='jumpToPage' type='text' className='form-control' maxLength={2} />\n          <Label for='jumpToPage'>Vai a ...</Label>\n        </FormGroup>\n      </Form>\n    </Pager>\n}",
      ...(_u = (_t = JumpToPage.parameters) == null ? void 0 : _t.docs) == null ? void 0 : _u.source
    }
  }
};
SimpleMode.parameters = {
  ...SimpleMode.parameters,
  docs: {
    ...(_v = SimpleMode.parameters) == null ? void 0 : _v.docs,
    source: {
      originalSource: "{\n  render: () => <Pager className='mb-3' aria-label='Esempio di paginazione'>\n      <PagerItem disabled>\n        <PagerLink previous href='#'>\n          <Icon icon='it-chevron-left' aria-hidden />\n        </PagerLink>\n      </PagerItem>\n      <PagerItem className='d-none d-sm-block'>\n        <PagerLink tag='span'>1</PagerLink>\n      </PagerItem>\n      <PagerItem className='d-none d-sm-block'>\n        <PagerLink tag='span'>/</PagerLink>\n      </PagerItem>\n      <PagerItem className='d-none d-sm-block'>\n        <PagerLink tag='span'>5</PagerLink>\n      </PagerItem>\n      <PagerItem>\n        <PagerLink next href='#'>\n          <Icon icon='it-chevron-right' aria-hidden />\n        </PagerLink>\n      </PagerItem>\n    </Pager>\n}",
      ...(_x = (_w = SimpleMode.parameters) == null ? void 0 : _w.docs) == null ? void 0 : _x.source
    }
  }
};
LinkTestuali.parameters = {
  ...LinkTestuali.parameters,
  docs: {
    ...(_y = LinkTestuali.parameters) == null ? void 0 : _y.docs,
    source: {
      originalSource: "{\n  render: () => <Pager className='mb-3' aria-label='Esempio di paginazione'>\n      <PagerItem>\n        <PagerLink previous href='#' className='text'>\n          Precedente\n        </PagerLink>\n      </PagerItem>\n      <PagerItem className='d-none d-sm-block'>\n        <PagerLink href='#'>1</PagerLink>\n      </PagerItem>\n      <PagerItem className='d-none d-sm-block'>\n        <PagerLink tag='span'>…</PagerLink>\n      </PagerItem>\n      <PagerItem className='d-none d-sm-block'>\n        <PagerLink href='#'>24</PagerLink>\n      </PagerItem>\n      <PagerItem className='d-none d-sm-block'>\n        <PagerLink href='#'>25</PagerLink>\n      </PagerItem>\n      <PagerItem>\n        <PagerLink aria-current='page' href='#'>\n          26\n        </PagerLink>\n      </PagerItem>\n      <PagerItem className='d-none d-sm-block'>\n        <PagerLink href='#'>27</PagerLink>\n      </PagerItem>\n      <PagerItem className='d-none d-sm-block'>\n        <PagerLink href='#'>28</PagerLink>\n      </PagerItem>\n      <PagerItem className='d-none d-sm-block'>\n        <PagerLink tag='span'>…</PagerLink>\n      </PagerItem>\n      <PagerItem className='d-none d-sm-block'>\n        <PagerLink href='#'>50</PagerLink>\n      </PagerItem>\n      <PagerItem>\n        <PagerLink next href='#' className='text'>\n          Successiva\n        </PagerLink>\n      </PagerItem>\n    </Pager>\n}",
      ...(_A = (_z = LinkTestuali.parameters) == null ? void 0 : _z.docs) == null ? void 0 : _A.source
    }
  }
};
TotalNumber.parameters = {
  ...TotalNumber.parameters,
  docs: {
    ...(_B = TotalNumber.parameters) == null ? void 0 : _B.docs,
    source: {
      originalSource: "{\n  render: () => <Pager total={{\n    ariaLabel: 'Pagina',\n    label: ' 24 di 50'\n  }} aria-label='Esempio di paginazione'>\n      <PagerItem>\n        <PagerLink previous href='#'>\n          <Icon icon='it-chevron-left' aria-hidden />\n        </PagerLink>\n      </PagerItem>\n      <PagerItem className='d-none d-sm-block'>\n        <PagerLink href='#'>1</PagerLink>\n      </PagerItem>\n      <PagerItem className='d-none d-sm-block'>\n        <PagerLink tag='span'>…</PagerLink>\n      </PagerItem>\n      <PagerItem className='d-none d-sm-block'>\n        <PagerLink aria-current='page' href='#'>\n          24\n        </PagerLink>\n      </PagerItem>\n      <PagerItem className='d-none d-sm-block'>\n        <PagerLink href='#'>25</PagerLink>\n      </PagerItem>\n      <PagerItem>\n        <PagerLink href='#'>26</PagerLink>\n      </PagerItem>\n      <PagerItem className='d-none d-sm-block'>\n        <PagerLink href='#'>27</PagerLink>\n      </PagerItem>\n      <PagerItem className='d-none d-sm-block'>\n        <PagerLink href='#'>28</PagerLink>\n      </PagerItem>\n      <PagerItem className='d-none d-sm-block'>\n        <PagerLink tag='span'>…</PagerLink>\n      </PagerItem>\n      <PagerItem className='d-none d-sm-block'>\n        <PagerLink href='#'>50</PagerLink>\n      </PagerItem>\n      <PagerItem>\n        <PagerLink next href='#'>\n          <Icon icon='it-chevron-right' aria-hidden />\n        </PagerLink>\n      </PagerItem>\n    </Pager>\n}",
      ...(_D = (_C = TotalNumber.parameters) == null ? void 0 : _C.docs) == null ? void 0 : _D.source
    }
  }
};
const __namedExportsOrder = ["Esempi", "StatoDisabilitatoEAttivo", "Allineamento", "Responsive", "MoreComponent", "PageChanger", "JumpToPage", "SimpleMode", "LinkTestuali", "TotalNumber"];
const PagerStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Allineamento,
  Esempi,
  JumpToPage,
  LinkTestuali,
  MoreComponent,
  PageChanger,
  Responsive,
  SimpleMode,
  StatoDisabilitatoEAttivo,
  TotalNumber,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  Allineamento as A,
  Esempi as E,
  JumpToPage as J,
  LinkTestuali as L,
  MoreComponent as M,
  PagerStories as P,
  Responsive as R,
  StatoDisabilitatoEAttivo as S,
  TotalNumber as T,
  PageChanger as a,
  SimpleMode as b
};
