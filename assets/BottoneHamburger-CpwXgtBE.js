import { r as reactExports, e } from "./iframe-CCeCdQXR.js";
import { I as Icon } from "./Icon-BE80VWGZ.js";
import "./track-focus-DbJ2CO43.js";
function showVertMenu(show, id) {
  const vMenu = document.getElementById(id);
  if (vMenu) {
    if (show) {
      vMenu.setAttribute("style", "display:block");
    } else {
      vMenu.setAttribute("style", "display:none");
    }
  }
}
function setIcon(show) {
  const opener = document.getElementById("it25-btn-vmenu-opener");
  const closer = document.getElementById("it25-btn-vmenu-closer");
  if (opener && closer) {
    if (show) {
      opener.classList.replace("d-block", "d-none");
      closer.classList.replace("d-none", "d-block");
    } else {
      closer.classList.replace("d-block", "d-none");
      opener.classList.replace("d-none", "d-block");
    }
  }
}
const BottoneHamburger = ({
  data_bs_target = "#it25-main-nav",
  menuType = "horizontal",
  isOpenSide,
  toggleMenu
}) => {
  const aria_controls = data_bs_target.substring(1, data_bs_target.length);
  const [openNav, setOpenNav] = reactExports.useState(isOpenSide);
  const toggle = () => {
    setOpenNav(!openNav);
    if (menuType == "vertical") {
      showVertMenu(!openNav, aria_controls);
      setIcon(!openNav);
    }
    if (menuType == "sidebar") {
      toggleMenu == null ? void 0 : toggleMenu(!isOpenSide);
      setIcon(!openNav);
    }
    if (menuType == "horizontal") {
      toggleMenu == null ? void 0 : toggleMenu(!isOpenSide);
    }
  };
  let data_bs_toggle = "collapse";
  let classNameButton = "btn btn-xs";
  if (menuType == "horizontal") {
    data_bs_toggle = "navbarcollapsible";
    classNameButton = "custom-navbar-toggler ".concat(classNameButton);
  }
  if (menuType == "sidebar") {
    classNameButton = "custom-navbar-toggler ".concat(classNameButton).concat(" d-md-none");
  }
  return /* @__PURE__ */ e.createElement("div", { className: "it25-hamburger-btn-wrapper" }, /* @__PURE__ */ e.createElement(
    "button",
    {
      id: "btn-hamburger",
      "aria-controls": aria_controls,
      "aria-expanded": "false",
      "aria-label": "Apri menù",
      className: classNameButton,
      "data-bs-toggle": data_bs_toggle,
      "data-bs-target": data_bs_target,
      type: "button",
      onClick: toggle
    },
    /* @__PURE__ */ e.createElement(
      Icon,
      {
        className: "d-block",
        id: "it25-btn-vmenu-opener",
        color: "primary",
        icon: "it-burger"
      }
    ),
    /* @__PURE__ */ e.createElement(
      Icon,
      {
        className: "d-none",
        id: "it25-btn-vmenu-closer",
        color: "primary",
        icon: "it-close-big"
      }
    )
  ));
};
BottoneHamburger.__docgenInfo = { "description": "", "methods": [], "displayName": "BottoneHamburger", "props": { "data_bs_target": { "required": false, "tsType": { "name": "string" }, "description": "id del data-bs-target*", "defaultValue": { "value": '"#it25-main-nav"', "computed": false } }, "menuType": { "required": false, "tsType": { "name": "union", "raw": '"horizontal" | "vertical" | "sidebar"', "elements": [{ "name": "literal", "value": '"horizontal"' }, { "name": "literal", "value": '"vertical"' }, { "name": "literal", "value": '"sidebar"' }] }, "description": "Tipo di menu che il bottone deve aprire *", "defaultValue": { "value": '"horizontal"', "computed": false } }, "isOpenSide": { "required": false, "tsType": { "name": "boolean" }, "description": "Stato del menu a comparsa *" }, "toggleMenu": { "required": false, "tsType": { "name": "CallableFunction" }, "description": "Funzione per il menu a comparsa *" } }, "composes": ["HTMLAttributes"] };
export {
  BottoneHamburger as B
};
