var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
import { e } from "./iframe-CMMl7uns.js";
import { F as Form } from "./Form-DpdCseBx.js";
import { F as FormGroup } from "./FormGroup-Cz7ZFUfS.js";
import { P as Pager, a as PaginationItem, b as PaginationLink } from "./Pager-NfVtT77Y.js";
import { I as Icon } from "./Icon-BqdlmApZ.js";
import { I as Input } from "./Input-DuzUnKZk.js";
import "./track-focus-DbJ2CO43.js";
const meta = {
  title: "Linee Guida/Navigazione/Paginatore",
  component: Pager
};
const Default = {
  render: () => /* @__PURE__ */ e.createElement(Pager, { "aria-label": "Esempio di navigazione" }, /* @__PURE__ */ e.createElement(PaginationItem, { disabled: true }, /* @__PURE__ */ e.createElement(PaginationLink, { previous: true, href: "#" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-chevron-left", "aria-hidden": true }))), /* @__PURE__ */ e.createElement(PaginationItem, null, /* @__PURE__ */ e.createElement(PaginationLink, { "aria-current": "page", href: "#" }, "1")), /* @__PURE__ */ e.createElement(PaginationItem, null, /* @__PURE__ */ e.createElement(PaginationLink, { href: "#" }, "2")), /* @__PURE__ */ e.createElement(PaginationItem, null, /* @__PURE__ */ e.createElement(PaginationLink, { href: "#" }, "3")), /* @__PURE__ */ e.createElement(PaginationItem, null, /* @__PURE__ */ e.createElement(PaginationLink, { next: true, href: "#" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-chevron-right", "aria-hidden": true }))))
};
const MoreComponent = {
  render: () => /* @__PURE__ */ e.createElement(Pager, { "aria-label": "Esempio di paginazione" }, /* @__PURE__ */ e.createElement(PaginationItem, null, /* @__PURE__ */ e.createElement(PaginationLink, { previous: true, href: "#" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-chevron-left", "aria-hidden": true }))), /* @__PURE__ */ e.createElement(PaginationItem, { className: "d-none d-sm-block" }, /* @__PURE__ */ e.createElement(PaginationLink, { href: "#" }, "1")), /* @__PURE__ */ e.createElement(PaginationItem, { className: "d-none d-sm-block" }, /* @__PURE__ */ e.createElement(PaginationLink, { tag: "span" }, "…")), /* @__PURE__ */ e.createElement(PaginationItem, { className: "d-none d-sm-block" }, /* @__PURE__ */ e.createElement(PaginationLink, { href: "#" }, "24")), /* @__PURE__ */ e.createElement(PaginationItem, { className: "d-none d-sm-block" }, /* @__PURE__ */ e.createElement(PaginationLink, { href: "#" }, "25")), /* @__PURE__ */ e.createElement(PaginationItem, null, /* @__PURE__ */ e.createElement(PaginationLink, { "aria-current": "page", href: "#" }, "26")), /* @__PURE__ */ e.createElement(PaginationItem, { className: "d-none d-sm-block" }, /* @__PURE__ */ e.createElement(PaginationLink, { href: "#" }, "27")), /* @__PURE__ */ e.createElement(PaginationItem, { className: "d-none d-sm-block" }, /* @__PURE__ */ e.createElement(PaginationLink, { href: "#" }, "28")), /* @__PURE__ */ e.createElement(PaginationItem, { className: "d-none d-sm-block" }, /* @__PURE__ */ e.createElement(PaginationLink, { tag: "span" }, "…")), /* @__PURE__ */ e.createElement(PaginationItem, { className: "d-none d-sm-block" }, /* @__PURE__ */ e.createElement(PaginationLink, { href: "#" }, "50")), /* @__PURE__ */ e.createElement(PaginationItem, null, /* @__PURE__ */ e.createElement(PaginationLink, { next: true, href: "#" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-chevron-right", "aria-hidden": true }))))
};
const JumpToPage = {
  render: () => /* @__PURE__ */ e.createElement(Pager, { "aria-label": "Esempio di paginazione" }, /* @__PURE__ */ e.createElement(PaginationItem, null, /* @__PURE__ */ e.createElement(PaginationLink, { previous: true, href: "#" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-chevron-left", "aria-hidden": true }))), /* @__PURE__ */ e.createElement(PaginationItem, { className: "d-none d-sm-block" }, /* @__PURE__ */ e.createElement(PaginationLink, { href: "#" }, "1")), /* @__PURE__ */ e.createElement(PaginationItem, { className: "d-none d-sm-block" }, /* @__PURE__ */ e.createElement(PaginationLink, { tag: "span" }, "…")), /* @__PURE__ */ e.createElement(PaginationItem, { className: "d-none d-sm-block" }, /* @__PURE__ */ e.createElement(PaginationLink, { href: "#" }, "24")), /* @__PURE__ */ e.createElement(PaginationItem, { className: "d-none d-sm-block" }, /* @__PURE__ */ e.createElement(PaginationLink, { href: "#" }, "25")), /* @__PURE__ */ e.createElement(PaginationItem, null, /* @__PURE__ */ e.createElement(PaginationLink, { "aria-current": "page", href: "#" }, "26")), /* @__PURE__ */ e.createElement(PaginationItem, { className: "d-none d-sm-block" }, /* @__PURE__ */ e.createElement(PaginationLink, { href: "#" }, "27")), /* @__PURE__ */ e.createElement(PaginationItem, { className: "d-none d-sm-block" }, /* @__PURE__ */ e.createElement(PaginationLink, { href: "#" }, "28")), /* @__PURE__ */ e.createElement(PaginationItem, { className: "d-none d-sm-block" }, /* @__PURE__ */ e.createElement(PaginationLink, { tag: "span" }, "…")), /* @__PURE__ */ e.createElement(PaginationItem, { className: "d-none d-sm-block" }, /* @__PURE__ */ e.createElement(PaginationLink, { href: "#" }, "50")), /* @__PURE__ */ e.createElement(PaginationItem, null, /* @__PURE__ */ e.createElement(PaginationLink, { next: true, href: "#" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-chevron-right", "aria-hidden": true }))), /* @__PURE__ */ e.createElement(Form, null, /* @__PURE__ */ e.createElement(FormGroup, null, /* @__PURE__ */ e.createElement(Input, { id: "jumpToPage", type: "text", maxLength: 3, placeholder: "Vai a..", "aria-label": "Indica la pagina desiderata" }))))
};
const SimpleMode = {
  render: () => /* @__PURE__ */ e.createElement(Pager, { "aria-label": "Esempio di paginazione" }, /* @__PURE__ */ e.createElement(PaginationItem, { disabled: true }, /* @__PURE__ */ e.createElement(PaginationLink, { previous: true, href: "#" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-chevron-left", "aria-hidden": true }))), /* @__PURE__ */ e.createElement(PaginationItem, { className: "d-none d-sm-block" }, /* @__PURE__ */ e.createElement(PaginationLink, { tag: "span" }, "1")), /* @__PURE__ */ e.createElement(PaginationItem, { className: "d-none d-sm-block" }, /* @__PURE__ */ e.createElement(PaginationLink, { tag: "span" }, "/")), /* @__PURE__ */ e.createElement(PaginationItem, { className: "d-none d-sm-block" }, /* @__PURE__ */ e.createElement(PaginationLink, { tag: "span" }, "5")), /* @__PURE__ */ e.createElement(PaginationItem, null, /* @__PURE__ */ e.createElement(PaginationLink, { next: true, href: "#" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-chevron-right", "aria-hidden": true }))))
};
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...(_a = Default.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{\n  render: () => <Pager aria-label='Esempio di navigazione'>\n      <PagerItem disabled>\n        <PagerLink previous href='#'>\n          <Icon icon='it-chevron-left' aria-hidden />\n        </PagerLink>\n      </PagerItem>\n      <PagerItem>\n        <PagerLink aria-current='page' href='#'>1</PagerLink>\n      </PagerItem>\n      <PagerItem>\n        <PagerLink href='#'>2</PagerLink>\n      </PagerItem>\n      <PagerItem>\n        <PagerLink href='#'>3</PagerLink>\n      </PagerItem>\n      <PagerItem>\n        <PagerLink next href='#'>\n          <Icon icon='it-chevron-right' aria-hidden />\n        </PagerLink>\n      </PagerItem>\n    </Pager>\n}",
      ...(_c = (_b = Default.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
MoreComponent.parameters = {
  ...MoreComponent.parameters,
  docs: {
    ...(_d = MoreComponent.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "{\n  render: () => <Pager aria-label='Esempio di paginazione'>\n      <PagerItem>\n        <PagerLink previous href='#'>\n          <Icon icon='it-chevron-left' aria-hidden />\n        </PagerLink>\n      </PagerItem>\n      <PagerItem className='d-none d-sm-block'>\n        <PagerLink href='#'>1</PagerLink>\n      </PagerItem>\n      <PagerItem className='d-none d-sm-block'>\n        <PagerLink tag='span'>…</PagerLink>\n      </PagerItem>\n      <PagerItem className='d-none d-sm-block'>\n        <PagerLink href='#'>24</PagerLink>\n      </PagerItem>\n      <PagerItem className='d-none d-sm-block'>\n        <PagerLink href='#'>25</PagerLink>\n      </PagerItem>\n      <PagerItem>\n        <PagerLink aria-current='page' href='#'>\n          26\n        </PagerLink>\n      </PagerItem>\n      <PagerItem className='d-none d-sm-block'>\n        <PagerLink href='#'>27</PagerLink>\n      </PagerItem>\n      <PagerItem className='d-none d-sm-block'>\n        <PagerLink href='#'>28</PagerLink>\n      </PagerItem>\n      <PagerItem className='d-none d-sm-block'>\n        <PagerLink tag='span'>…</PagerLink>\n      </PagerItem>\n      <PagerItem className='d-none d-sm-block'>\n        <PagerLink href='#'>50</PagerLink>\n      </PagerItem>\n      <PagerItem>\n        <PagerLink next href='#'>\n          <Icon icon='it-chevron-right' aria-hidden />\n        </PagerLink>\n      </PagerItem>\n    </Pager>\n}",
      ...(_f = (_e = MoreComponent.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
JumpToPage.parameters = {
  ...JumpToPage.parameters,
  docs: {
    ...(_g = JumpToPage.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: `{
  render: () => <Pager aria-label='Esempio di paginazione'>
      <PagerItem>
        <PagerLink previous href='#'>
          <Icon icon='it-chevron-left' aria-hidden />
        </PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink href='#'>1</PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink tag='span'>…</PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink href='#'>24</PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink href='#'>25</PagerLink>
      </PagerItem>
      <PagerItem>
        <PagerLink aria-current='page' href='#'>
          26
        </PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink href='#'>27</PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink href='#'>28</PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink tag='span'>…</PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink href='#'>50</PagerLink>
      </PagerItem>
      <PagerItem>
        <PagerLink next href='#'>
          <Icon icon='it-chevron-right' aria-hidden />
        </PagerLink>
      </PagerItem>
      <Form>
        <FormGroup>
          <Input id='jumpToPage' type='text' maxLength={3} placeholder="Vai a.." aria-label="Indica la pagina desiderata" />
        </FormGroup>
      </Form>
    </Pager>
}`,
      ...(_i = (_h = JumpToPage.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
SimpleMode.parameters = {
  ...SimpleMode.parameters,
  docs: {
    ...(_j = SimpleMode.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: "{\n  render: () => <Pager aria-label='Esempio di paginazione'>\n      <PagerItem disabled>\n        <PagerLink previous href='#'>\n          <Icon icon='it-chevron-left' aria-hidden />\n        </PagerLink>\n      </PagerItem>\n      <PagerItem className='d-none d-sm-block'>\n        <PagerLink tag='span'>1</PagerLink>\n      </PagerItem>\n      <PagerItem className='d-none d-sm-block'>\n        <PagerLink tag='span'>/</PagerLink>\n      </PagerItem>\n      <PagerItem className='d-none d-sm-block'>\n        <PagerLink tag='span'>5</PagerLink>\n      </PagerItem>\n      <PagerItem>\n        <PagerLink next href='#'>\n          <Icon icon='it-chevron-right' aria-hidden />\n        </PagerLink>\n      </PagerItem>\n    </Pager>\n}",
      ...(_l = (_k = SimpleMode.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
const __namedExportsOrder = ["Default", "MoreComponent", "JumpToPage", "SimpleMode"];
const PaginatoreStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Default,
  JumpToPage,
  MoreComponent,
  SimpleMode,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  Default as D,
  JumpToPage as J,
  MoreComponent as M,
  PaginatoreStories as P,
  SimpleMode as S
};
