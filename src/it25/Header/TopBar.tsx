import React, { FC, HTMLAttributes } from 'react';
import { Col, Container, Icon, Row, Dropdown, DropdownToggle, DropdownMenu, LinkList, LinkListItem } from '../../';

export interface TopBarProps extends HTMLAttributes<HTMLElement> {
  /** Bottone di Accesso (autenticazione) */
  access?: string;
  /** Dati utente autenticato (es. Nome, Ruolo) */
  user?: string;
  /** Lista di link per dropdwon opzioni profilo */
  links?: myLink[],
}

interface myLink {
  href: string;
  content: string;
}

export const TopBar: FC<TopBarProps> = ({
  access = false,
  user = "",
  links,
}) => {
  return (
    <div className="it-header-slim-wrapper it25-top-bar">
      <Container fluid>
        <Row>
          <Col sm={12}>
            <div className="it-header-slim-wrapper-content">
              <a className="navbar-brand" href="#">
                <img src="img/logo-rl-bianco.png" alt="logo regione lombardia" className="d-md-none" />
              </a>
              {access && <AccessButton />}
              {user && <UserSettings user={user} links={links}/>}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
};

const AccessButton: React.FC<TopBarProps> = ({access}) => {
	return (
    <div className="header-slim-right-zone">
      <a className="btn btn-primary btn-icon btn-full" href={access} title="Accedi all'area personale" aria-label="Accedi all'area personale">
        <Icon icon="it-key" className="icon-white"/>
        <span className="d-none d-md-block">Accedi</span>
      </a>
    </div>
  )
}

const UserSettings: React.FC<TopBarProps> = ({ user, links }) => {
  if (links) {
    const linkItems = links.map(link =>
      <LinkListItem href={link.href} inDropdown>
        <span>{link.content}</span>
      </LinkListItem>
    )
    return (
      <div className="header-slim-right-zone">
        <Dropdown inNavbar>
          <DropdownToggle caret inNavbar>
            <Icon icon="it-user" size="xs" className="icon-white"/>
            {user}
          </DropdownToggle>
          <DropdownMenu>
            <Row>
              <Col size="12">
                <LinkList>
                  {linkItems}
                </LinkList>
              </Col>
            </Row>
          </DropdownMenu>
        </Dropdown>
      </div>
    )
  } else {
    return (
      <div className="header-slim-right-zone">
        <Icon icon="it-user" size="xs" className="icon-white"/>
        <span className="text-white">{user}</span>
      </div>
    )
  }
}
