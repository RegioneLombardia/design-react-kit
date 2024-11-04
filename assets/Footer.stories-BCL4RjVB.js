var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
import { R as React } from "./index-aC1ZMUrs.js";
import { F as Footer } from "./Footer-BiKzUMw3.js";
import { R as Row, C as Col } from "./Col-sbjB5dMm.js";
import { L as LinkList, a as LinkListItem } from "./LinkListItem-B69qYNZ5.js";
const meta = {
  title: "Linee Guida/Componenti Principali/Footer",
  args: {
    acronym: "ACCREDITAS",
    applicationName: "Sistema di accreditamento"
  }
};
const Standard = {
  args: {
    links: [{
      "href": "#",
      "content": "Privacy"
    }, {
      "href": "#",
      "content": "Accessibilità"
    }, {
      "href": "#",
      "content": "Cookie policy"
    }, {
      "href": "#",
      "content": "Note legali"
    }, {
      "href": "#",
      "content": "Contatti"
    }, {
      "href": "#",
      "content": "Credits"
    }]
  },
  render: ({
    acronym,
    applicationName,
    links
  }) => /* @__PURE__ */ React.createElement(Footer, { acronym, applicationName, links })
};
const Minimo = {
  render: ({
    acronym,
    applicationName
  }) => /* @__PURE__ */ React.createElement(Footer, { acronym, applicationName })
};
function Logos() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Row, null, /* @__PURE__ */ React.createElement(Col, { sm: 3 }, /* @__PURE__ */ React.createElement("div", { className: "it25-footer-logo d-flex justify-content-center align-items-center" }, /* @__PURE__ */ React.createElement("img", { src: "img/logo-saf-lombardia.png", alt: "logo scuola alta formazione lombardia", className: "img-fluid" }))), /* @__PURE__ */ React.createElement(Col, { sm: 3 }, /* @__PURE__ */ React.createElement("div", { className: "it25-footer-logo d-flex justify-content-center align-items-center" }, /* @__PURE__ */ React.createElement("img", { src: "img/logo-cna-lombardia-bianco.png", alt: "logo scuola alta formazione lombardia", className: "img-fluid" }))), /* @__PURE__ */ React.createElement(Col, { sm: 3 }, /* @__PURE__ */ React.createElement("div", { className: "rounded-card-negative d-flex justify-content-center align-items-center" }, /* @__PURE__ */ React.createElement("h6", null, "Logo 3 al negativo"))), /* @__PURE__ */ React.createElement(Col, { sm: 3 }, /* @__PURE__ */ React.createElement("div", { className: "rounded-card-negative d-flex justify-content-center align-items-center" }, /* @__PURE__ */ React.createElement("h6", null, "Logo 4 al negativo")))));
}
const LoghiMultipli = {
  args: {
    logos: Logos()
  },
  render: ({
    acronym,
    applicationName,
    logos
  }) => /* @__PURE__ */ React.createElement(Footer, { acronym, applicationName, logos })
};
const MultiLink = {
  args: {
    links: [{
      "href": "#",
      "content": "Privacy"
    }, {
      "href": "#",
      "content": "Accessibilità"
    }, {
      "href": "#",
      "content": "Cookie policy"
    }, {
      "href": "#",
      "content": "Note legali"
    }, {
      "href": "#",
      "content": "Contatti"
    }, {
      "href": "#",
      "content": "Credits"
    }]
  },
  render: ({
    acronym,
    applicationName,
    links
  }) => /* @__PURE__ */ React.createElement(Footer, { acronym, applicationName, links }, /* @__PURE__ */ React.createElement("div", { className: "it-footer-main" }, /* @__PURE__ */ React.createElement("div", { className: "container-fluid" }, /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement(Row, null, /* @__PURE__ */ React.createElement(Col, { className: "pb-2", lg: 3, md: 3, sm: 6 }, /* @__PURE__ */ React.createElement("h4", null, /* @__PURE__ */ React.createElement("a", { href: "#", title: "Vai alla pagina: Amministrazione" }, "Amministrazione")), /* @__PURE__ */ React.createElement(LinkList, { className: "footer-list clearfix" }, /* @__PURE__ */ React.createElement(LinkListItem, { href: "#", title: "Vai alla pagina: Giunta e consiglio" }, "Giunta e consiglio"), /* @__PURE__ */ React.createElement(LinkListItem, { href: "#", title: "Vai alla pagina: Aree di competenza" }, "Aree di competenza"), /* @__PURE__ */ React.createElement(LinkListItem, { href: "#", title: "Vai alla pagina: Dipendenti" }, "Dipendenti"), /* @__PURE__ */ React.createElement(LinkListItem, { href: "#", title: "Vai alla pagina: Luoghi" }, "Luoghi"), /* @__PURE__ */ React.createElement(LinkListItem, { href: "#", title: "Vai alla pagina: Associazioni e società partecipate" }, "Associazioni e società partecipate"))), /* @__PURE__ */ React.createElement(Col, { className: "pb-2", lg: 3, md: 3, sm: 6 }, /* @__PURE__ */ React.createElement("h4", null, /* @__PURE__ */ React.createElement("a", { href: "#", title: "Vai alla pagina: Servizi" }, "Servizi")), /* @__PURE__ */ React.createElement(LinkList, { className: "footer-list clearfix" }, /* @__PURE__ */ React.createElement(LinkListItem, { href: "#", title: "Vai alla pagina: Pagamenti" }, "Pagamenti"), /* @__PURE__ */ React.createElement(LinkListItem, { href: "#", title: "Vai alla pagina: Sostegno" }, "Sostegno"), /* @__PURE__ */ React.createElement(LinkListItem, { href: "#", title: "Vai alla pagina: Domande e iscrizioni" }, "Domande e iscrizioni"), /* @__PURE__ */ React.createElement(LinkListItem, { href: "#", title: "Vai alla pagina: Segnalazioni" }, "Segnalazioni"), /* @__PURE__ */ React.createElement(LinkListItem, { href: "#", title: "Vai alla pagina: Autorizzazioni e concessioni" }, "Autorizzazioni e concessioni"), /* @__PURE__ */ React.createElement(LinkListItem, { href: "#", title: "Vai alla pagina: Certificati e dichiarazioni" }, "Certificati e dichiarazioni"))), /* @__PURE__ */ React.createElement(Col, { className: "pb-2", lg: 3, md: 3, sm: 6 }, /* @__PURE__ */ React.createElement("h4", null, /* @__PURE__ */ React.createElement("a", { href: "#", title: "Vai alla pagina: Novità" }, "Novità")), /* @__PURE__ */ React.createElement(LinkList, { className: "footer-list clearfix" }, /* @__PURE__ */ React.createElement(LinkListItem, { href: "#", title: "Vai alla pagina: Notizie" }, "Notizie"), /* @__PURE__ */ React.createElement(LinkListItem, { href: "#", title: "Vai alla pagina: Eventi" }, "Eventi"), /* @__PURE__ */ React.createElement(LinkListItem, { href: "#", title: "Vai alla pagina: Comunicati Stampa" }, "Comunicati Stampa"))), /* @__PURE__ */ React.createElement(Col, { lg: 3, md: 3, sm: 6 }, /* @__PURE__ */ React.createElement("h4", null, /* @__PURE__ */ React.createElement("a", { href: "#", title: "Vai alla pagina: Documenti" }, "Documenti")), /* @__PURE__ */ React.createElement(LinkList, { className: "footer-list clearfix" }, /* @__PURE__ */ React.createElement(LinkListItem, { href: "#", title: "Vai alla pagina: Progetti e attività" }, "Progetti e attività"), /* @__PURE__ */ React.createElement(LinkListItem, { href: "#", title: "Vai alla pagina: Delibere, determine e ordinanze" }, "Delibere, determine e ordinanze"), /* @__PURE__ */ React.createElement(LinkListItem, { href: "#", title: "Vai alla pagina: Bandi" }, "Bandi"), /* @__PURE__ */ React.createElement(LinkListItem, { href: "#", title: "Vai alla pagina: Concorsi" }, "Concorsi"), /* @__PURE__ */ React.createElement(LinkListItem, { href: "#", title: "Vai alla pagina: Albo pretorio" }, "Albo pretorio"))))))))
};
Standard.parameters = {
  ...Standard.parameters,
  docs: {
    ...(_a = Standard.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{\n  args: {\n    links: [{\n      'href': '#',\n      'content': 'Privacy'\n    }, {\n      'href': '#',\n      'content': 'Accessibilità'\n    }, {\n      'href': '#',\n      'content': 'Cookie policy'\n    }, {\n      'href': '#',\n      'content': 'Note legali'\n    }, {\n      'href': '#',\n      'content': 'Contatti'\n    }, {\n      'href': '#',\n      'content': 'Credits'\n    }]\n  },\n  render: ({\n    acronym,\n    applicationName,\n    links\n  }) => <Footer acronym={acronym} applicationName={applicationName} links={links}></Footer>\n}",
      ...(_c = (_b = Standard.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
Minimo.parameters = {
  ...Minimo.parameters,
  docs: {
    ...(_d = Minimo.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "{\n  render: ({\n    acronym,\n    applicationName\n  }) => <Footer acronym={acronym} applicationName={applicationName}></Footer>\n}",
      ...(_f = (_e = Minimo.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
LoghiMultipli.parameters = {
  ...LoghiMultipli.parameters,
  docs: {
    ...(_g = LoghiMultipli.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: "{\n  args: {\n    logos: Logos()\n  },\n  render: ({\n    acronym,\n    applicationName,\n    logos\n  }) => <Footer acronym={acronym} applicationName={applicationName} logos={logos}></Footer>\n}",
      ...(_i = (_h = LoghiMultipli.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
MultiLink.parameters = {
  ...MultiLink.parameters,
  docs: {
    ...(_j = MultiLink.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: `{
  args: {
    links: [{
      'href': '#',
      'content': 'Privacy'
    }, {
      'href': '#',
      'content': 'Accessibilità'
    }, {
      'href': '#',
      'content': 'Cookie policy'
    }, {
      'href': '#',
      'content': 'Note legali'
    }, {
      'href': '#',
      'content': 'Contatti'
    }, {
      'href': '#',
      'content': 'Credits'
    }]
  },
  render: ({
    acronym,
    applicationName,
    links
  }) => <Footer acronym={acronym} applicationName={applicationName} links={links}>
      <div className="it-footer-main">
        <div className="container-fluid">
          <section>
            <Row>
              <Col className="pb-2" lg={3} md={3} sm={6}>
                <h4>
                  <a href="#" title="Vai alla pagina: Amministrazione">
                    Amministrazione
                  </a>
                </h4>
                <LinkList className="footer-list clearfix">
                  <LinkListItem href="#" title="Vai alla pagina: Giunta e consiglio">
                    Giunta e consiglio
                  </LinkListItem>
                  <LinkListItem href="#" title="Vai alla pagina: Aree di competenza">
                    Aree di competenza
                  </LinkListItem>
                  <LinkListItem href="#" title="Vai alla pagina: Dipendenti">
                    Dipendenti
                  </LinkListItem>
                  <LinkListItem href="#" title="Vai alla pagina: Luoghi">
                    Luoghi
                  </LinkListItem>
                  <LinkListItem href="#" title="Vai alla pagina: Associazioni e società partecipate">
                    Associazioni e società partecipate
                  </LinkListItem>
                </LinkList>
              </Col>
              <Col className="pb-2" lg={3} md={3} sm={6}>
                <h4>
                  <a href="#" title="Vai alla pagina: Servizi">
                    Servizi
                  </a>
                </h4>
                <LinkList className="footer-list clearfix">
                  <LinkListItem href="#" title="Vai alla pagina: Pagamenti">
                    Pagamenti
                  </LinkListItem>
                  <LinkListItem href="#" title="Vai alla pagina: Sostegno">
                    Sostegno
                  </LinkListItem>
                  <LinkListItem href="#" title="Vai alla pagina: Domande e iscrizioni">
                    Domande e iscrizioni
                  </LinkListItem>
                  <LinkListItem href="#" title="Vai alla pagina: Segnalazioni">
                    Segnalazioni
                  </LinkListItem>
                  <LinkListItem href="#" title="Vai alla pagina: Autorizzazioni e concessioni">
                    Autorizzazioni e concessioni
                  </LinkListItem>
                  <LinkListItem href="#" title="Vai alla pagina: Certificati e dichiarazioni">
                    Certificati e dichiarazioni
                  </LinkListItem>
                </LinkList>
              </Col>
              <Col className="pb-2" lg={3} md={3} sm={6}>
                <h4>
                  <a href="#" title="Vai alla pagina: Novità">
                    Novità
                  </a>
                </h4>
                <LinkList className="footer-list clearfix">
                  <LinkListItem href="#" title="Vai alla pagina: Notizie">
                    Notizie
                  </LinkListItem>
                  <LinkListItem href="#" title="Vai alla pagina: Eventi">
                    Eventi
                  </LinkListItem>
                  <LinkListItem href="#" title="Vai alla pagina: Comunicati Stampa">
                    Comunicati Stampa
                  </LinkListItem>
                </LinkList>
              </Col>
              <Col lg={3} md={3} sm={6}>
                <h4>
                  <a href="#" title="Vai alla pagina: Documenti">
                    Documenti
                  </a>
                </h4>
                <LinkList className="footer-list clearfix">
                  <LinkListItem href="#" title="Vai alla pagina: Progetti e attività">
                    Progetti e attività
                  </LinkListItem>
                  <LinkListItem href="#" title="Vai alla pagina: Delibere, determine e ordinanze">
                    Delibere, determine e ordinanze
                  </LinkListItem>
                  <LinkListItem href="#" title="Vai alla pagina: Bandi">
                    Bandi
                  </LinkListItem>
                  <LinkListItem href="#" title="Vai alla pagina: Concorsi">
                    Concorsi
                  </LinkListItem>
                  <LinkListItem href="#" title="Vai alla pagina: Albo pretorio">
                    Albo pretorio
                  </LinkListItem>
                </LinkList>
              </Col>
            </Row>
          </section>
        </div>
      </div>
    </Footer>
}`,
      ...(_l = (_k = MultiLink.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
const __namedExportsOrder = ["Standard", "Minimo", "LoghiMultipli", "MultiLink"];
const FooterStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  LoghiMultipli,
  Minimo,
  MultiLink,
  Standard,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  FooterStories as F,
  LoghiMultipli as L,
  Minimo as M,
  Standard as S,
  MultiLink as a
};
