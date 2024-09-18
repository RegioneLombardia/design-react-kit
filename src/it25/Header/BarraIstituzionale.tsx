import React, {FC, HTMLAttributes } from 'react';
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
  /** Voci del menù verticale */
  verticalMenu?: object[];
}

export const BarraIstituzionale: FC<BarraIstituzionaleProps> = ({
  acronym = "",
  applicationName,
  search = false,
  hamburgerButton = false,
}) => {
  return (
    <div className="it-header-center-wrapper it25-barra-ist">
      <Container fluid>
        <Row>
          <Col sm={12}>
            <div className="it-header-center-content-wrapper">
              <div className="it-brand-wrapper">
                <HamburgerButton hamburgerButton={hamburgerButton} />
                <a href="#">
                  <img src="../static/img/logo-rl.png" alt="logo regione lombardia" className="it25-header-logo d-none d-md-block" />
                  <div className="it-brand-text">{acronym} {applicationName}</div>
                </a>
              </div>
              <Search search={search} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
};

function Search(search) {
  if (search.search === false) return ""
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

function HamburgerButton(hamburgerButton) {
  if (hamburgerButton.hamburgerButton === false) return ""
	return (
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
      >
        <Icon
          color="primary"
          icon="it-burger"
        />
      </button>
    </div>
  )
}
