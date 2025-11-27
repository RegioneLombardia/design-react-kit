import { r as reactExports, e } from "./iframe-BdFmv8SM.js";
import { A as Autocomplete$1 } from "./react-CHTnrpnK.js";
const tAssistiveHintDefault = () => "Quando i risultati del completamento automatico sono disponibili, usa le frecce su e giù per rivedere e Invio per selezionare. Utenti di dispositivi touch, esplora tramite tocco o con gesti di scorrimento";
const tNoResultsDefault = () => "Nessun risultato trovato";
const tStatusQueryTooShortDefault = (minQueryLength) => `Digita ${minQueryLength} o più caratteri per mostrare le opzioni di ricerca`;
const tStatusNoResultsDefault = () => "Nessun risultato di ricerca";
const tStatusSelectedOptionDefault = (selectedOption, length, index) => `${selectedOption} ${index + 1} di ${length} è sottolineato`;
const tStatusResultsDefault = (length, contentSelectedOption) => {
  const words = {
    result: length === 1 ? "risultato" : "risultati",
    is: length === 1 ? "è" : "sono",
    available: length === 1 ? "disponibile" : "disponibili"
  };
  return `${length} ${words.result} ${words.is} ${words.available}. ${contentSelectedOption}`;
};
const Autocomplete = ({
  tAssistiveHint = tAssistiveHintDefault,
  tNoResults = tNoResultsDefault,
  tStatusQueryTooShort = tStatusQueryTooShortDefault,
  tStatusNoResults = tStatusNoResultsDefault,
  tStatusSelectedOption = tStatusSelectedOptionDefault,
  tStatusResults = tStatusResultsDefault,
  placeholder = "",
  defaultValue = "",
  displayMenu = "inline",
  source,
  validationText,
  onConfirm,
  ...attributes
}) => {
  const { id, valid } = attributes;
  const validityCheck = valid === true || valid === false;
  reactExports.useEffect(() => {
    var _a, _b;
    const inputElement = document.getElementById(id);
    const labelElement = (_b = (_a = inputElement == null ? void 0 : inputElement.parentElement) == null ? void 0 : _a.parentElement) == null ? void 0 : _b.getElementsByTagName("label")[0];
    if (inputElement.value !== "") {
      labelElement == null ? void 0 : labelElement.classList.add("active");
    }
    inputElement == null ? void 0 : inputElement.addEventListener("focus", () => {
      labelElement == null ? void 0 : labelElement.classList.add("active");
    });
    inputElement == null ? void 0 : inputElement.addEventListener("blur", () => {
      if (inputElement.value === "") {
        labelElement == null ? void 0 : labelElement.classList.remove("active");
      }
      if (onConfirm) {
        onConfirm(inputElement.value);
      }
    });
  }, [id]);
  return /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("label", { htmlFor: attributes.id }, attributes.label), /* @__PURE__ */ e.createElement(
    Autocomplete$1,
    {
      source,
      placeholder,
      defaultValue,
      displayMenu,
      tAssistiveHint,
      tNoResults,
      tStatusQueryTooShort,
      tStatusNoResults,
      tStatusSelectedOption,
      tStatusResults,
      onConfirm,
      inputClasses: `form-control ${validityCheck && (valid === false ? "is-invalid" : "just-validate-success-field")}`,
      showNoOptionsFound: true,
      hintClasses: "app-hint",
      autoselect: false,
      showAllValues: false,
      templates: void 0,
      confirmOnBlur: false,
      menuAttributes: null,
      menuClasses: null,
      ...attributes
    }
  ), /* @__PURE__ */ e.createElement("div", { className: "form-feedback just-validate-error-label form-text form-feedback just-validate-error-label" }, !valid && validationText));
};
Autocomplete.__docgenInfo = { "description": "", "methods": [], "displayName": "Autocomplete", "props": { "id": { "required": true, "tsType": { "name": "string" }, "description": "Identificativo" }, "label": { "required": true, "tsType": { "name": "string" }, "description": "Label" }, "source": { "required": true, "tsType": { "name": "signature", "type": "function", "raw": "(query: string, syncResults: () => void) => void", "signature": { "arguments": [{ "type": { "name": "string" }, "name": "query" }, { "type": { "name": "signature", "type": "function", "raw": "() => void", "signature": { "arguments": [], "return": { "name": "void" } } }, "name": "syncResults" }], "return": { "name": "void" } } }, "description": "Valori all'interno della select" }, "onConfirm": { "required": false, "tsType": { "name": "signature", "type": "function", "raw": "(value: string) => void", "signature": { "arguments": [{ "type": { "name": "string" }, "name": "value" }], "return": { "name": "void" } } }, "description": "Valori chiave - valore all'interno della select" }, "placeholder": { "required": false, "tsType": { "name": "string" }, "description": "Placeholder (default: ``)", "defaultValue": { "value": "''", "computed": false } }, "defaultValue": { "required": false, "tsType": { "name": "string" }, "description": "Valore di default (default: ``)", "defaultValue": { "value": "''", "computed": false } }, "displayMenu": { "required": false, "tsType": { "name": "string" }, "description": "Modalità display menu (default: `inline`)", "defaultValue": { "value": "'inline'", "computed": false } }, "valid": { "required": false, "tsType": { "name": "boolean" }, "description": "Utilizzare per mostrare il successo nella validazione del valore nel campo Input" }, "validationText": { "required": false, "tsType": { "name": "string" }, "description": "Testo di validazione per l'elemento del moduleo form." }, "tNoResults": { "required": false, "tsType": { "name": "signature", "type": "function", "raw": "() => string", "signature": { "arguments": [], "return": { "name": "string" } } }, "description": "Funzione ritornante stringa in caso di nessun risultato", "defaultValue": { "value": "() => 'Nessun risultato trovato'", "computed": false } }, "tAssistiveHint": { "required": false, "tsType": { "name": "signature", "type": "function", "raw": "() => string", "signature": { "arguments": [], "return": { "name": "string" } } }, "description": "Funzione ritornante stringa di suggerimento", "defaultValue": { "value": "() =>\n'Quando i risultati del completamento automatico sono disponibili, usa le frecce su e giù per rivedere e Invio per selezionare. Utenti di dispositivi touch, esplora tramite tocco o con gesti di scorrimento'", "computed": false } }, "tStatusQueryTooShort": { "required": false, "tsType": { "name": "signature", "type": "function", "raw": "() => string", "signature": { "arguments": [], "return": { "name": "string" } } }, "description": "Funzione ritornante stringa se la query è troppo corta", "defaultValue": { "value": "(minQueryLength: number) =>\n`Digita ${minQueryLength} o più caratteri per mostrare le opzioni di ricerca`", "computed": false } }, "tStatusNoResults": { "required": false, "tsType": { "name": "signature", "type": "function", "raw": "() => string", "signature": { "arguments": [], "return": { "name": "string" } } }, "description": "Funzione ritornante stringa se non ci sono risultati di ricerca", "defaultValue": { "value": "() => 'Nessun risultato di ricerca'", "computed": false } }, "tStatusSelectedOption": { "required": false, "tsType": { "name": "signature", "type": "function", "raw": "() => string", "signature": { "arguments": [], "return": { "name": "string" } } }, "description": "Funzione ritornante stringa che identifica l'opzione selezionata", "defaultValue": { "value": "(selectedOption: number, length: number, index: number) =>\n`${selectedOption} ${index + 1} di ${length} è sottolineato`", "computed": false } }, "tStatusResults": { "required": false, "tsType": { "name": "signature", "type": "function", "raw": "() => string", "signature": { "arguments": [], "return": { "name": "string" } } }, "description": "Funzione ritornante stringa che identifica i risultati", "defaultValue": { "value": "(length: number, contentSelectedOption: number) => {\n  const words = {\n    result: length === 1 ? 'risultato' : 'risultati',\n    is: length === 1 ? 'è' : 'sono',\n    available: length === 1 ? 'disponibile' : 'disponibili'\n  };\n\n  return `${length} ${words.result} ${words.is} ${words.available}. ${contentSelectedOption}`;\n}", "computed": false } }, "className": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il componente Button" }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" } } };
export {
  Autocomplete as A
};
