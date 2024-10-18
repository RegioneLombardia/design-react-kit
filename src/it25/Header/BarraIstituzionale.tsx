import React, {FC, HTMLAttributes, useState } from 'react';
import { Button, Col, Container, Icon, Row } from '../../';

export interface BarraIstituzionaleProps extends HTMLAttributes<HTMLElement> {
  /** Acronimo dell'applicativo */
  acronym?: string;
  /** Nome dell'applicativo */
  applicationName: string;
  /** Campo di recerca */
  search?: boolean;
  /** Bottone apertura/chiusura menù verticale **/
  hamburgerButton?: boolean;
}

function showVertMenu(show: boolean, id: string) {
  const vMenu: (HTMLElement | null) = document.getElementById(id)
  const opener: (HTMLElement | null) = document.getElementById("it25-btn-vmenu-opener")
  const closer: (HTMLElement | null) = document.getElementById("it25-btn-vmenu-closer")
  if (vMenu && opener && closer) {
    if (show) {
      vMenu.classList.add("show")
      opener.classList.replace("d-block", "d-none")
      closer.classList.replace("d-none", "d-block")
    } else {
      vMenu.classList.remove("show")
      closer.classList.replace("d-block", "d-none")
      opener.classList.replace("d-none", "d-block")
    }
    (document.activeElement as HTMLElement).blur()!
  }
}

export const BarraIstituzionale: FC<BarraIstituzionaleProps> = ({
  acronym = "",
  applicationName,
  search = false,
  hamburgerButton = false,
}) => {
  const [openNav, setOpenNav] = useState(false);
  const toggle = () => {
    setOpenNav(!openNav)
    showVertMenu(!openNav, "it25-main-nav");
  };
  let HamburgerButton;
  if (hamburgerButton) {
    HamburgerButton = (
      <div className="it25-hamburger-btn-wrapper">
        <button
          id="btn-hamburger"
          aria-controls="it25-main-nav"
          aria-expanded="false"
          aria-label="Apri menù"
          className="btn btn-xs d-md-none"
          data-bs-toggle="collapse"
          data-bs-target="#it25-main-nav"
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
    );
  }
  return (
    <div className="it-header-center-wrapper it25-barra-ist">
      <Container fluid>
        <Row>
          <Col sm={12}>
            <div className="it-header-center-content-wrapper">
              <div className="it-brand-wrapper">
                {HamburgerButton}
                <a href="#">
                  <img src="../static/img/logo-rl.png" alt="logo regione lombardia" className="it25-header-logo d-none d-md-block" />
                  <div className="it-brand-text">{acronym} <span className="d-none d-md-inline">{applicationName}</span></div>
                </a>
              </div>
              {search && <Search />}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
};

const Search = () => {
	return (
    <div className="it-right-zone">
      <form>
        <div className="it-search-wrapper">
          <input id="search-input99" className="form-control d-none d-lg-flex mr-sm-2 ml-auto" type="search" placeholder="Cerca..." aria-label="Testo per ricerca"/>
            <Button className="btn p-0 m-1" type="submit" aria-label="Esegui ricerca">
              <Icon icon="it-search" />
            </Button>
        </div>
      </form>
    </div>
  )
}
