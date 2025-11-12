var _a, _b, _c;
import { e } from "./iframe-CCeCdQXR.js";
import { C as Container } from "./Container-DSg0hrw7.js";
import { R as Row, C as Col } from "./Col-BBB4ywWW.js";
import { N as Navbar } from "./Navbar-Hqtv3WC2.js";
import { N as NavItem, a as NavLink } from "./NavLink-DM_6X4vk.js";
import { C as Collapse } from "./Collapse-CShDFyTU.js";
import { D as Dropdown, a as DropdownToggle } from "./DropdownToggle-rtKGES84.js";
import { D as DropdownMenu } from "./DropdownMenu-fZfCFpSD.js";
import { L as LinkList, a as LinkListItem } from "./LinkListItem-DHARikHd.js";
import { M as MegamenuItem } from "./MegamenuItem-Cobi7yGz.js";
import { N as Nav } from "./Nav-B30C9sAq.js";
import "./track-focus-DbJ2CO43.js";
const meta = {
  title: "Linee Guida/Componenti Principali/Menu Orizzontale",
  component: Container,
  parameters: {
    docs: {
      story: {
        height: "350px"
      }
    }
  },
  args: {}
};
const MenuOrizzontale = {
  render: () => {
    return /* @__PURE__ */ e.createElement("div", { className: "it-header-navbar-wrapper theme-light-desk it25-menu-orizzontale" }, /* @__PURE__ */ e.createElement(Navbar, { expand: "lg", className: "has-megamenu" }, /* @__PURE__ */ e.createElement(Collapse, { navbar: true, header: true, megamenu: true, id: "nav1" }, /* @__PURE__ */ e.createElement(Nav, { navbar: true }, /* @__PURE__ */ e.createElement(NavItem, null, /* @__PURE__ */ e.createElement(NavLink, { href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Link"))), /* @__PURE__ */ e.createElement(NavItem, { active: true }, /* @__PURE__ */ e.createElement(NavLink, { href: "#", active: true }, /* @__PURE__ */ e.createElement("span", null, "Attivo"), /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, "voce selezionata"))), /* @__PURE__ */ e.createElement(NavItem, null, /* @__PURE__ */ e.createElement(NavLink, { href: "#", disabled: true }, /* @__PURE__ */ e.createElement("span", null, "Disabled"))), /* @__PURE__ */ e.createElement(Dropdown, { inNavbar: true, tag: "li", theme: "" }, /* @__PURE__ */ e.createElement(DropdownToggle, { caret: true, inNavbar: true, className: "text-start" }, /* @__PURE__ */ e.createElement("span", null, "Dropdown")), /* @__PURE__ */ e.createElement(DropdownMenu, null, /* @__PURE__ */ e.createElement(LinkList, { header: /* @__PURE__ */ e.createElement("div", { className: "link-list-heading text-primary fw-bold" }, "Heading") }, /* @__PURE__ */ e.createElement(LinkListItem, null, /* @__PURE__ */ e.createElement("span", null, "Link list 1")), /* @__PURE__ */ e.createElement(LinkListItem, null, /* @__PURE__ */ e.createElement("span", null, "Link list 2")), /* @__PURE__ */ e.createElement(LinkListItem, null, /* @__PURE__ */ e.createElement("span", null, "Link list 3")), /* @__PURE__ */ e.createElement(LinkListItem, { divider: true }), /* @__PURE__ */ e.createElement(LinkListItem, null, /* @__PURE__ */ e.createElement("span", null, "Link list 4"))))), /* @__PURE__ */ e.createElement(MegamenuItem, { itemName: "Megamenu" }, /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, { xs: "12", lg: "4" }, /* @__PURE__ */ e.createElement(LinkList, { header: /* @__PURE__ */ e.createElement("div", { className: "link-list-heading text-primary fw-bold" }, "Heading") }, /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Link list 1")), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Link list 2")), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Link list 3")))), /* @__PURE__ */ e.createElement(Col, { xs: "12", lg: "4" }, /* @__PURE__ */ e.createElement(LinkList, { header: /* @__PURE__ */ e.createElement("div", { className: "link-list-heading text-primary fw-bold" }, "Heading") }, /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#", active: true }, /* @__PURE__ */ e.createElement("span", null, "Link list 1")), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Link list 2")), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Link list 3")))), /* @__PURE__ */ e.createElement(Col, { xs: "12", lg: "4" }, /* @__PURE__ */ e.createElement(LinkList, { header: /* @__PURE__ */ e.createElement("div", { className: "link-list-heading text-primary fw-bold" }, "Heading") }, /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Link list 1")), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#", disabled: true }, /* @__PURE__ */ e.createElement("span", null, "Link list 2")), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Link list 3"))))))))));
  }
};
MenuOrizzontale.parameters = {
  ...MenuOrizzontale.parameters,
  docs: {
    ...(_a = MenuOrizzontale.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: `{
  render: () => {
    return <div className="it-header-navbar-wrapper theme-light-desk it25-menu-orizzontale">
        <Navbar expand="lg" className='has-megamenu'>
          <Collapse navbar header megamenu id="nav1">
            <Nav navbar>
              <NavItem>
                <NavLink href="#"><span>Link</span></NavLink>
              </NavItem>
              <NavItem active>
                <NavLink href="#" active>
                  <span>Attivo</span>
                  <span className="visually-hidden">voce selezionata</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" disabled>
                  <span>Disabled</span>
                </NavLink>
              </NavItem>
              <Dropdown inNavbar tag="li" theme="">
                <DropdownToggle caret inNavbar className="text-start">
                  <span>Dropdown</span>
                </DropdownToggle>
                <DropdownMenu>
                  <LinkList header={<div className="link-list-heading text-primary fw-bold">Heading</div>}>
                    <LinkListItem>
                      <span>Link list 1</span>
                    </LinkListItem>
                    <LinkListItem>
                      <span>Link list 2</span>
                    </LinkListItem>
                    <LinkListItem>
                      <span>Link list 3</span>
                    </LinkListItem>
                    <LinkListItem divider />
                    <LinkListItem>
                      <span>Link list 4</span>
                    </LinkListItem>
                  </LinkList>
                </DropdownMenu>
              </Dropdown>
              <MegamenuItem itemName="Megamenu">
                <Row>
                  <Col xs='12' lg='4'>
                    <LinkList header={<div className="link-list-heading text-primary fw-bold">Heading</div>}>
                      <LinkListItem inDropdown href='#'>
                        <span>Link list 1</span>
                      </LinkListItem>
                      <LinkListItem inDropdown href='#'>
                        <span>Link list 2</span>
                      </LinkListItem>
                      <LinkListItem inDropdown href='#'>
                        <span>Link list 3</span>
                      </LinkListItem>
                    </LinkList>
                  </Col>
                  <Col xs='12' lg='4'>
                    <LinkList header={<div className="link-list-heading text-primary fw-bold">Heading</div>}>
                      <LinkListItem inDropdown href='#' active>
                        <span>Link list 1</span>
                      </LinkListItem>
                      <LinkListItem inDropdown href='#'>
                        <span>Link list 2</span>
                      </LinkListItem>
                      <LinkListItem inDropdown href='#'>
                        <span>Link list 3</span>
                      </LinkListItem>
                    </LinkList>
                  </Col>
                  <Col xs='12' lg='4'>
                    <LinkList header={<div className="link-list-heading text-primary fw-bold">Heading</div>}>
                      <LinkListItem inDropdown href='#'>
                        <span>Link list 1</span>
                      </LinkListItem>
                      <LinkListItem inDropdown href='#' disabled>
                        <span>Link list 2</span>
                      </LinkListItem>
                      <LinkListItem inDropdown href='#'>
                        <span>Link list 3</span>
                      </LinkListItem>
                    </LinkList>
                  </Col>
                </Row>
              </MegamenuItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>;
  }
}`,
      ...(_c = (_b = MenuOrizzontale.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
const __namedExportsOrder = ["MenuOrizzontale"];
const MenuOrizzontaleStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  MenuOrizzontale,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  MenuOrizzontaleStories as M,
  MenuOrizzontale as a
};
