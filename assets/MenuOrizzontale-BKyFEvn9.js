import { j as jsxRuntimeExports } from "./jsx-runtime-BKjOVojP.js";
import { useMDXComponents } from "./index-BDy3TOcs.js";
import { ae as Meta, af as Canvas } from "./index-CqkeutgF.js";
import { M as MenuOrizzontaleStories, a as MenuOrizzontale } from "./MenuOrizzontale.stories-DSFrwbV8.js";
import "./index-BehpJNG5.js";
import "./_commonjsHelpers-DWwsNxpa.js";
import "./iframe-CaWOas9z.js";
import "../sb-preview/runtime.js";
import "./index-D7280_ap.js";
import "./index-DmVNLg0t.js";
import "./index-DJdTjTnu.js";
import "./index-dukjSSyv.js";
import "./index-BdOSk9or.js";
import "./Container-DM0Kn0QD.js";
import "./utils-Cs0hNT-B.js";
import "./index-D3ELxcOV.js";
import "./Col-CBduUdZh.js";
import "./Navbar-B1vzUW4q.js";
import "./NavbarToggler-CO2D7-XQ.js";
import "./NavLink-_42ff20l.js";
import "./Icon-CwbcXiv7.js";
import "./Collapse-JUs9UIql.js";
import "./Transition-D-QAwXWC.js";
import "./Nav-NOEIohim.js";
import "./DropdownToggle-DgLnc46H.js";
import "./DropdownToggle-BYY5Lm64.js";
import "./Popper-oXY5zJ3Q.js";
import "./DropdownMenu-DVqROqFZ.js";
import "./Button-DpaK6EQT.js";
import "./LinkListItem-E5PaFpui.js";
import "./MegamenuItem-DDQOytVu.js";
function _createMdxContent(props) {
  const _components = {
    br: "br",
    code: "code",
    em: "em",
    h1: "h1",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      of: MenuOrizzontaleStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "menù-orizzontale",
      children: "Menù Orizzontale"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Il ", jsxRuntimeExports.jsx(_components.strong, {
        children: "Menu orizzontale"
      }), " è il menu principale di navigazione. Esso può contenere, oltre a ", jsxRuntimeExports.jsx(_components.em, {
        children: "semplici link"
      }), ", il ", jsxRuntimeExports.jsx(_components.em, {
        children: "menu dropdown"
      }), " ed il ", jsxRuntimeExports.jsx(_components.em, {
        children: "megamenu"
      }), "."]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Su ", jsxRuntimeExports.jsx(_components.strong, {
        children: "desktop"
      }), " il menu è sempre visualizzato e a scorrimento in basso e rimane posizionato fisso sotto la barra istituzionale. Se la pagina scorre, il menu si sposta di conseguenza, rimanendo sotto la barra istituzionale.", jsxRuntimeExports.jsx(_components.br, {}), "\n", "Questa tipologia di menu viene preferita al ", jsxRuntimeExports.jsx(_components.em, {
        children: "menu verticale"
      }), " quando ", jsxRuntimeExports.jsx(_components.strong, {
        children: "le voci del menu sono al massimo 5 e le label sono brevi"
      }), "."]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Su ", jsxRuntimeExports.jsx(_components.strong, {
        children: "smartphone"
      }), " la visualizzazione del menu orizzontale è comandata dal bottone hamburger sotto la barra istituzionale e le voci sono visualizzate in verticale per questioni di spazio. In questo caso il pannello comparirà con uno scorrimento laterale da sinistra ed oscuramento della pagina sottostante."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: MenuOrizzontale
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-tsx",
        children: `const MenuOrizzontaleHooks = () => {
  const [openNav, setOpenNav] = useState(false);
  const toggle = () => {
    setOpenNav(!openNav)
    showCloser(!openNav, "closer01");
  };
  return (
    <div className='it-header-navbar-wrapper theme-light-desk it25-menu-orizzontale'>
      <Navbar expand="lg" className='has-megamenu'>
        <NavbarToggler className='custom-navbar-toggler d-flex d-lg-none' onClick={toggle}>
          <Icon icon='it-burger' color='primary'/>
          <div className="d-block d-lg-none align-self-center text-primary fw-semibold ms-2">Apri Menu</div>
        </NavbarToggler>
        <NavbarToggler className='custom-navbar-toggler it25-megamenu-closer' id="closer01" onClick={toggle}>
          <Icon icon='it-close-big'/>
        </NavbarToggler>
        <Collapse isOpen={openNav} navbar header megamenu>
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
  </div>
  );
};
`
      })
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Per gestire il bottone di chiusura:"
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-tsx",
        children: 'function showCloser(show: boolean, id: string) {\n  const closer: HTMLElement | null = document.getElementById(id)\n  if (closer) {\n    if (show) {\n      closer.classList.add("show")\n    } else {\n      closer.classList.remove("show")\n    }\n    closer.blur()\n  }\n}\n'
      })
    })]
  });
}
function MDXContent(props = {}) {
  const { wrapper: MDXLayout } = {
    ...useMDXComponents(),
    ...props.components
  };
  return MDXLayout ? jsxRuntimeExports.jsx(MDXLayout, {
    ...props,
    children: jsxRuntimeExports.jsx(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
export {
  MDXContent as default
};