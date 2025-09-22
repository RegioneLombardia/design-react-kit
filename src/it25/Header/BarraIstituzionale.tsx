import React, {FC, HTMLAttributes, ReactNode } from 'react';
import { Button, Col, Container, Icon, Row } from '../../';
import { BottoneHamburger } from './BottoneHamburger';

export interface BarraIstituzionaleProps extends HTMLAttributes<HTMLElement> {
  /** Acronimo dell'applicativo */
  acronym?: string;
  /** Nome dell'applicativo */
  applicationName: string;
  /** Campo di recerca */
  search?: boolean;
  /** Bottone apertura/chiusura menù verticale **/
  hamburgerButton?: boolean;
  /** id del data-bs-target**/
  data_bs_target?: string;
  /** Stato del menu a comparsa **/
  isOpenSide?: boolean;
  /** Funzione per il menu a comparsa **/
  toggleMenu?: CallableFunction;
  /** Tipo di menu che il bottone dve aprire **/
  menuType?: "horizontal" | "vertical" | "sidebar" ;
  /** Nodo per il menù verticale */
  children?: ReactNode;
}

export const BarraIstituzionale: FC<BarraIstituzionaleProps> = ({
  acronym = "",
  applicationName,
  search = false,
  hamburgerButton = false,
  data_bs_target,
  isOpenSide = false,
  toggleMenu,
  menuType,
  children = "",
}) => {
  if (acronym == "") {
    acronym = applicationName
    applicationName = ""
  }
  let HamburgerButton;
  if (hamburgerButton) {
    HamburgerButton = (
      <BottoneHamburger
        menuType={menuType} data_bs_target={data_bs_target} isOpenSide={isOpenSide} toggleMenu={toggleMenu}
      />
    );
  }
  return (
    < >
    <div className="it-header-center-wrapper it25-barra-ist">
      <Container fluid>
        <Row>
          <Col sm={12}>
            <div className="it-header-center-content-wrapper">
              <div className="it-brand-wrapper">
                {HamburgerButton}
                <a href="#">
                  <img src="img/logo-rl.png" alt="logo regione lombardia" className="it25-header-logo d-none d-md-block" />
                  <div className="it-brand-text">{acronym} <span className="d-none d-md-inline">{applicationName}</span></div>
                </a>
              </div>
              {search && <Search />}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    {children}
    </ >
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
