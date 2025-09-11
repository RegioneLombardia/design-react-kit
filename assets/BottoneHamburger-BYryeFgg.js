import { r as reactExports, e } from "./iframe-CywKGv0B.js";
import { I as Icon } from "./Icon-CfKGR1lx.js";
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
  menuType = "horizontal"
}) => {
  const aria_controls = data_bs_target.substring(1, data_bs_target.length);
  const [openNav, setOpenNav] = reactExports.useState(false);
  const toggle = () => {
    setOpenNav(!openNav);
    if (menuType == "vertical") {
      showVertMenu(!openNav, aria_controls);
      setIcon(!openNav);
    }
    if (menuType == "sidebar") {
      setIcon(!openNav);
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
BottoneHamburger.__docgenInfo = { "description": "", "methods": [], "displayName": "BottoneHamburger", "props": { "data_bs_target": { "required": false, "tsType": { "name": "string" }, "description": "id del data-bs-target*", "defaultValue": { "value": '"#it25-main-nav"', "computed": false } }, "menuType": { "required": false, "tsType": { "name": "union", "raw": '"horizontal" | "vertical" | "sidebar"', "elements": [{ "name": "literal", "value": '"horizontal"' }, { "name": "literal", "value": '"vertical"' }, { "name": "literal", "value": '"sidebar"' }] }, "description": "Tipo di menu che il bottone deve aprire *", "defaultValue": { "value": '"horizontal"', "computed": false } } }, "composes": ["HTMLAttributes"] };
export {
  BottoneHamburger as B
};
