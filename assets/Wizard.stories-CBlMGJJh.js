var _a, _b, _c, _d, _e, _f;
import { e } from "./iframe-BFNAXEkx.js";
import { S as StepperContainer } from "./StepperContainer-DpeDs8gS.js";
import { S as StepperHeader, a as StepperHeaderElement } from "./StepperHeaderElement-8GxTvxUy.js";
import "./track-focus-DbJ2CO43.js";
const meta = {
  title: "Linee Guida/Inserimento/Wizard",
  component: StepperContainer
};
const Semplice = () => {
  return /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement(StepperContainer, null, /* @__PURE__ */ e.createElement(StepperHeader, { className: "it25-wizard it25-wizard-pin" }, /* @__PURE__ */ e.createElement(StepperHeaderElement, { variant: "confirmed", prependIcon: "it-calendar", title: "Prenotazione", "aria-label": "Confermato", tabIndex: 0 }), /* @__PURE__ */ e.createElement(StepperHeaderElement, { className: "error", prependIcon: "it-list", title: "Opzioni", "aria-label": "errore", tabIndex: 0 }), /* @__PURE__ */ e.createElement(StepperHeaderElement, { variant: "active", prependIcon: "it-search", title: "Scelta alloggio", "aria-label": "attivo", tabIndex: 0 }), /* @__PURE__ */ e.createElement(StepperHeaderElement, { prependIcon: "it-card", title: "Pagamento", "aria-label": "da fare", tabIndex: 0 })))), /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement(StepperContainer, null, /* @__PURE__ */ e.createElement(StepperHeader, { className: "it25-wizard it25-wizard-pin" }, /* @__PURE__ */ e.createElement(StepperHeaderElement, { variant: "confirmed", title: "Prenotazione", "aria-label": "Confermato", tabIndex: 0 }, "1"), /* @__PURE__ */ e.createElement(StepperHeaderElement, { className: "error", title: "Opzioni", "aria-label": "errore", tabIndex: 0 }, "2"), /* @__PURE__ */ e.createElement(StepperHeaderElement, { variant: "active", title: "Scelta alloggio", "aria-label": "attivo", tabIndex: 0 }, "3"), /* @__PURE__ */ e.createElement(StepperHeaderElement, { title: "Pagamento", "aria-label": "da fare", tabIndex: 0 }, "4")))));
};
const Dettagliato = () => {
  return /* @__PURE__ */ e.createElement(StepperContainer, null, /* @__PURE__ */ e.createElement(StepperHeader, { className: "it25-wizard" }, /* @__PURE__ */ e.createElement(StepperHeaderElement, { variant: "confirmed", appendIcon: "it-check", prependIcon: "it-calendar" }, "Scelta periodo"), /* @__PURE__ */ e.createElement(StepperHeaderElement, { variant: "active", prependIcon: "it-search" }, "Tipologia alloggio"), /* @__PURE__ */ e.createElement(StepperHeaderElement, { prependIcon: "it-list" }, "Opionals"), /* @__PURE__ */ e.createElement(StepperHeaderElement, { variant: "mobile", tag: "span" }, "2/6")));
};
Semplice.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Semplice"
};
Dettagliato.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Dettagliato"
};
Semplice.parameters = {
  ...Semplice.parameters,
  docs: {
    ...(_a = Semplice.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: '() => {\n  return <>\n      <div>\n        <StepperContainer>\n          <StepperHeader className="it25-wizard it25-wizard-pin">\n            <StepperHeaderElement variant="confirmed" prependIcon="it-calendar" title="Prenotazione" aria-label="Confermato" tabIndex={0}>\n            </StepperHeaderElement>\n            <StepperHeaderElement className="error" prependIcon="it-list" title="Opzioni" aria-label="errore" tabIndex={0}></StepperHeaderElement>\n            <StepperHeaderElement variant="active" prependIcon="it-search" title="Scelta alloggio" aria-label="attivo" tabIndex={0}>\n            </StepperHeaderElement>\n            <StepperHeaderElement prependIcon="it-card" title="Pagamento" aria-label="da fare" tabIndex={0}></StepperHeaderElement>\n          </StepperHeader>\n        </StepperContainer>\n      </div>\n      <div>\n        <StepperContainer>\n          <StepperHeader className="it25-wizard it25-wizard-pin">\n            <StepperHeaderElement variant="confirmed" title="Prenotazione" aria-label="Confermato" tabIndex={0}>1</StepperHeaderElement>\n            <StepperHeaderElement className="error" title="Opzioni" aria-label="errore" tabIndex={0}>2</StepperHeaderElement>\n            <StepperHeaderElement variant="active" title="Scelta alloggio" aria-label="attivo" tabIndex={0}>3</StepperHeaderElement>\n            <StepperHeaderElement title="Pagamento" aria-label="da fare" tabIndex={0}>4</StepperHeaderElement>\n          </StepperHeader>\n        </StepperContainer>\n      </div>\n    </>;\n}',
      ...(_c = (_b = Semplice.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
Dettagliato.parameters = {
  ...Dettagliato.parameters,
  docs: {
    ...(_d = Dettagliato.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: '() => {\n  return <StepperContainer>\n      <StepperHeader className="it25-wizard">\n        <StepperHeaderElement variant="confirmed" appendIcon="it-check" prependIcon="it-calendar">\n          Scelta periodo\n        </StepperHeaderElement>\n        <StepperHeaderElement variant="active" prependIcon="it-search">\n          Tipologia alloggio\n        </StepperHeaderElement>\n        <StepperHeaderElement prependIcon="it-list">Opionals</StepperHeaderElement>\n        <StepperHeaderElement variant="mobile" tag={"span"}>\n          2/6\n        </StepperHeaderElement>\n      </StepperHeader>\n    </StepperContainer>;\n}',
      ...(_f = (_e = Dettagliato.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
const __namedExportsOrder = ["Semplice", "Dettagliato"];
const WizardStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Dettagliato,
  Semplice,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  Dettagliato as D,
  Semplice as S,
  WizardStories as W
};
