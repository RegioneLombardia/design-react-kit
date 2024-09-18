import React, { FC, HTMLAttributes } from 'react';
import { Col, Container, Icon, Row } from '../../';

export interface TopBarProps extends HTMLAttributes<HTMLElement> {
  /** Bottone di Accesso (autenticazione) */
  access?: boolean;
  /** Dati utente autenticato (es. Nome, Ruolo) */
  user?: string;
  /** Lista di link per dropdwon opzioni profilo */
  links?: object[];
}

export const TopBar: FC<TopBarProps> = ({
  access = false,
  user = "Accesso Effettuato",
  links = [],
}) => {
  return (
    <div className="it-header-slim-wrapper it25-top-bar">
      <Container fluid>
        <Row>
          <Col sm={12}>
            <div className="it-header-slim-wrapper-content">
              <a className="navbar-brand" href="#">
                <img src="../static/img/logo-rl-bianco.png" alt="logo regione lombardia" className="d-md-none" />
              </a>
              <AccessButton access={access} />
              <Impostazioni user={user} links={links} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
};

function AccessButton(access) {
  if (access.access === false) return ""
	return (
    <div className="header-slim-right-zone">
      <a className="btn btn-primary btn-icon btn-full" href="#" title="Accedi all'area personale" aria-label="Accedi all'area personale">
        <Icon icon="it-key" className="icon-white"/>
        <span className="d-none d-md-block">Accedi</span>
      </a>
    </div>
  )
}

function Impostazioni(props) {
  if (props.links.length == 0) return ""
  let keyN = 0
	const linkItems = props.links.map(link =>
    <li key={++keyN}>
      <a className="list-item" href={link.href}><span>{link.content}</span></a>
    </li>
	)
	return (
    <div className="header-slim-right-zone">
      <div className="nav-item dropdown">
        <a aria-expanded="false" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" href="#" data-bs-display="static">
          <span>{props.user}</span>
          <Icon icon="it-user" className="icon-white"/>
          <Icon icon="it-expand" className="icon-white"/>
        </a>
        <div className="dropdown-menu" data-popper-placement="bottom-end">
          <div className="link-list-wrapper">
            <ul className="link-list">{linkItems}</ul>
          </div>
        </div>
      </div>
    </div>
  )
}
