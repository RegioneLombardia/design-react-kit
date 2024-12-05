import { j as jsxRuntimeExports } from "./jsx-runtime-BKjOVojP.js";
import { useMDXComponents } from "./index-BDy3TOcs.js";
import { ae as Meta, af as Canvas } from "./index-CqkeutgF.js";
import { M as MegamenuStories, C as Classico, a as ConIntestazioneColonne } from "./Megamenu.stories-BP5QgTyU.js";
import "./index-BehpJNG5.js";
import "./_commonjsHelpers-DWwsNxpa.js";
import "./iframe-CaWOas9z.js";
import "../sb-preview/runtime.js";
import "./index-D7280_ap.js";
import "./index-DmVNLg0t.js";
import "./index-DJdTjTnu.js";
import "./index-dukjSSyv.js";
import "./index-BdOSk9or.js";
import "./MegamenuItem-DDQOytVu.js";
import "./DropdownToggle-DgLnc46H.js";
import "./index-D3ELxcOV.js";
import "./DropdownToggle-BYY5Lm64.js";
import "./utils-Cs0hNT-B.js";
import "./Popper-oXY5zJ3Q.js";
import "./DropdownMenu-DVqROqFZ.js";
import "./Button-DpaK6EQT.js";
import "./Icon-CwbcXiv7.js";
import "./Navbar-B1vzUW4q.js";
import "./Col-CBduUdZh.js";
import "./NavbarToggler-CO2D7-XQ.js";
import "./Collapse-JUs9UIql.js";
import "./Transition-D-QAwXWC.js";
import "./Nav-NOEIohim.js";
import "./LinkListItem-E5PaFpui.js";
function _createMdxContent(props) {
  const _components = {
    br: "br",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      of: MegamenuStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "megamenu",
      children: "Megamenu"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Il ", jsxRuntimeExports.jsx(_components.strong, {
        children: "Megamenu"
      }), " è una variante del componente dropdown.", jsxRuntimeExports.jsx(_components.br, {}), "\n", "Presenta un ", jsxRuntimeExports.jsx(_components.strong, {
        children: "sottomenu"
      }), " contenente ", jsxRuntimeExports.jsx(_components.strong, {
        children: "elenchi di link relativi ad una voce del menu di navigazione"
      }), "."]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Si raccomanda l’utilizzo di questo componente nella forma più semplice e pulita, utilizzando il ", jsxRuntimeExports.jsx(_components.strong, {
        children: "megamenu classico"
      }), ", con o senza ", jsxRuntimeExports.jsx(_components.strong, {
        children: "intestazione delle colonne"
      }), " (", jsxRuntimeExports.jsx(_components.em, {
        children: "header"
      }), ")."]
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "classico",
      children: "Classico"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Il megamenu ha una struttura colonnare in cui ogni colonna richiama al suo interno un componente ", jsxRuntimeExports.jsx(_components.em, {
        children: "lista"
      }), " contenente un elenco di link."]
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Classico
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-tsx",
        children: `const ClassicoHooks = () => {
  const [openNav, setOpenNav] = useState(false);
  const toggle = () => {
    setOpenNav(!openNav)
    showCloser(!openNav, "closer01");
  };
  return (
    <Navbar expand="lg" className='has-megamenu'>
      <NavbarToggler className='custom-navbar-toggler' onClick={toggle}>
        <Icon icon='it-burger'/>
      </NavbarToggler>
      <NavbarToggler className='custom-navbar-toggler it25-megamenu-closer' id="closer01" onClick={toggle}>
        <Icon icon='it-close-big'/>
      </NavbarToggler>
      <Collapse isOpen={openNav} navbar header megamenu>
          <Nav className='mt-0' navbar>
            <MegamenuItem itemName="Megamenu">
              <Row>
                <Col xs='12' lg='4'>
                  <LinkList>
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
                  <LinkList>
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
                  <LinkList>
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
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "con-intestazione-colonne",
      children: "Con intestazione colonne"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Questo megamenu viene utilizzato per facilitare la ricerca dei contenuti, raggruppando le voci di menu in liste per categoria."
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: ConIntestazioneColonne
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-tsx",
        children: `const ConIntestazioneColonneHooks = () => {
  const [openNav, setOpenNav] = useState(false);
  const toggle = () => {
    setOpenNav(!openNav)
    showCloser(!openNav, "closer02");
  };
  return (
    <Navbar expand="lg" className='has-megamenu'>
      <NavbarToggler className='custom-navbar-toggler' onClick={toggle}>
        <Icon icon='it-burger'/>
      </NavbarToggler>
      <NavbarToggler className='custom-navbar-toggler it25-megamenu-closer' id="closer02" onClick={toggle}>
        <Icon icon='it-close-big'/>
      </NavbarToggler>
      <Collapse isOpen={openNav} navbar header megamenu>
        <Nav className='mt-0' navbar>
          <MegamenuItem itemName="Megamenu">
            <Row>
              <Col xs='12' lg='4'>
                <LinkList header={<div className="link-list-heading text-primary fw-bold">Sezione 1</div>}>
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
                <LinkList header={<div className="link-list-heading text-primary fw-bold">Sezione 2</div>}>
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
                <LinkList header={<div className="link-list-heading text-primary fw-bold">Sezione 3</div>}>
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
  );
};
`
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
