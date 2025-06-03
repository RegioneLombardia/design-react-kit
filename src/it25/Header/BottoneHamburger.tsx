import React, {FC, HTMLAttributes, useState } from 'react';
import { Icon } from '../../';

export interface BottoneHamburgerProps extends HTMLAttributes<HTMLElement> {
  /** id del data-bs-target**/
  data_bs_target?: string;
  /** Tipo di menu che il bottone deve aprire **/
  menuType?: "horizontal" | "vertical" | "sidebar" ;
}

function showVertMenu(show: boolean, id: string) {
  const vMenu: (HTMLElement | null) = document.getElementById(id)
  if (vMenu) {
    if (show) {
      vMenu.setAttribute('style', "display:block")
    } else {
      vMenu.setAttribute('style', "display:none")
    }
  }
}

function setIcon(show: boolean) {
  const opener: (HTMLElement | null) = document.getElementById("it25-btn-vmenu-opener")
  const closer: (HTMLElement | null) = document.getElementById("it25-btn-vmenu-closer")
  if (opener && closer) {
    if (show) {
      opener.classList.replace("d-block", "d-none")
      closer.classList.replace("d-none", "d-block")
    } else {
      closer.classList.replace("d-block", "d-none")
      opener.classList.replace("d-none", "d-block")
    }
  }
}

export const BottoneHamburger: FC<BottoneHamburgerProps> = ({
  data_bs_target = "#it25-main-nav",
  menuType = "horizontal",
}) => {
  const aria_controls = data_bs_target.substring(1, data_bs_target.length);
  const [openNav, setOpenNav] = useState(false);
  const toggle = () => {
    setOpenNav(!openNav)
    if (menuType=='vertical') {
      showVertMenu(!openNav, aria_controls);
      setIcon(!openNav);
    }
    if (menuType=='sidebar') {
      setIcon(!openNav);
    }
  };
  let data_bs_toggle = "collapse";
  let classNameButton = "btn btn-xs"
  if (menuType == "horizontal") {
    data_bs_toggle = "navbarcollapsible";
    classNameButton = "custom-navbar-toggler ".concat(classNameButton);
  }
  if (menuType == "sidebar") {
    classNameButton = "custom-navbar-toggler ".concat(classNameButton).concat(" d-md-none");
  }
  return (
      <div className="it25-hamburger-btn-wrapper">
        <button
          id="btn-hamburger"
          aria-controls={aria_controls}
          aria-expanded="false"
          aria-label="Apri menù"
          className={classNameButton}
          data-bs-toggle={data_bs_toggle}
          data-bs-target={data_bs_target}
          type="button"
          onClick={toggle}
        >
          <Icon className="d-block" id="it25-btn-vmenu-opener"
            color="primary"
            icon="it-burger"
          />
          <Icon className="d-none" id="it25-btn-vmenu-closer"
            color="primary"
            icon="it-close-big"
          />
        </button>
      </div>
  )
};
