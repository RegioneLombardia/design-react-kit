import React, { FC, HTMLAttributes } from 'react';
import { Col, Row } from '../../';

export interface FooterProps extends HTMLAttributes<HTMLElement> {
  /** Eventuali loghi in negaivo (massimo 4) */
  logos?: object | string | React.jsx;
  /** Acronimo dell'applicativo */
  acronym?: string;
  /** Nome dell'applicativo */
  applicationName: string;
  /** Inserire righe nel container con contenuto personalizzato */
  children?: object | string | React.jsx;
  /** Lista di link per Privacy, Contatti, ecc. */
  links?: object[];
}

export const Footer: FC<FooterProps> = ({
  logos = "",
  acronym = "",
  applicationName,
  children = "",
  links = [],
}) => {
  return (
    <footer className="footer">
      <div className="container-fluid">
        {logos}
        <Row>
          <Col sm={12} className="my-4 fw-bold title">
            {acronym} {applicationName}
          </Col>
        </Row>
        {children}
        <LinkList links={links} />
        <Row>
          <Col sm={12} className="my-3 copyright">
            <span className="d-inline-block">&copy; Copyright Regione Lombardia</span>
            <span className="d-inline-block ms-1">- tutti i diritti riservati</span>
            <span className="d-inline-block ms-1">- C.F. 80050050154</span>
            <span className="d-inline-block ms-1">- Piazza Città di Lombardia 1</span>
            <span className="d-inline-block ms-1">- 20124 Milano</span>
          </Col>
        </Row>
      </div>
    </footer>
  )
};

function LinkList(links) {
  if (links.links.length === 0) return ""
  let keyN = 0
	const linkItems = links.links.map(link =>
    <span className="d-inline-block mt-3 me-2" key={++keyN}>
			<a href={link.href}>{link.content}</a>
    </span>
	)
	return (
    <Row>
      <Col sm={12} className="mt-3">
        {linkItems}
      </Col>
    </Row>
  )
}
