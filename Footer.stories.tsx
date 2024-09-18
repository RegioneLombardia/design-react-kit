/* eslint jsx-a11y/anchor-is-valid: 0 */
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button, Col, Container, Form, Icon, Input, Label, LinkList, LinkListItem, Row, ResponsiveImage } from '../../src';

//Non esiste un componente specifico per cui uso Container come riferimento per la storia
const meta: Meta<typeof Container> = {
  title: "Linee Guida/Componenti Principali/Footer",
  component: Container,
  args: {
    acronym: 'ACCREDITAS',
    applicationName: 'Sistema di accreditamento'
  }
};

export default meta;

type Story = StoryObj<typeof Container>;

export const Footer: Story = {
  render: ({ acronym, applicationName }) => (
    <footer className="footer">
      <Container fluid="true">
        <Row className="my-4 fw-bold">
          <Col sm={12}>
            {acronym} {applicationName}
          </Col>
        </Row>
        <Row className="mt-3">
          <Col sm={12}>
            <ul class="it-footer-small-prints-list list-inline mb-0 d-flex flex-column flex-md-row">
              <li className="list-inline-item"><a href="#">Privacy</a></li>
              <li className="list-inline-item"><a href="#">Accessibilità</a></li>
              <li className="list-inline-item"><a href="#">Cookie policy</a></li>
              <li className="list-inline-item"><a href="#">Note legali</a></li>
              <li className="list-inline-item"><a href="#">Contatti</a></li>
              <li className="list-inline-item"><a href="#">Credits</a></li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <span className="d-inline-block">&copy; Copyright Regione Lombardia</span>
            <span className="d-inline-block ms-1">- tutti i diritti riservati</span>
            <span className="d-inline-block ms-1">- C.F. 80050050154</span>
            <span className="d-inline-block ms-1">- Piazza Città di Lombardia 1</span>
            <span className="d-inline-block ms-1">- 20124 Milano</span>
          </Col>
        </Row>
      </Container>
    </footer>
  )
};

export const FooterMinimo: Story = {
  render: ({ acronym, applicationName }) => (
    <footer className="footer">
      <Container fluid="true">
        <Row className="my-4 fw-bold">
          <Col sm={12}>
            {acronym} {applicationName}
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <span className="d-inline-block">&copy; Copyright Regione Lombardia</span>
            <span className="d-inline-block ms-1">- tutti i diritti riservati</span>
            <span className="d-inline-block ms-1">- C.F. 80050050154</span>
            <span className="d-inline-block ms-1">- Piazza Città di Lombardia 1</span>
            <span className="d-inline-block ms-1">- 20124 Milano</span>
          </Col>
        </Row>
      </Container>
    </footer>
  )
};

export const FooterLoghiMultipli: Story = {
  render: ({ acronym, applicationName }) => (
    <footer className="footer">
      <Container fluid="true">
        <Row>
          <Col sm={3}>
            <div className="it25-footer-logo">
              <img src="../static/img/logo-saf-lombardia.png" alt="logo scuola alta formazione lombardia" className="img-fluid p-3"/>
            </div>
          </Col>
          <Col sm={3}>
            <div className="it25-footer-logo">
              <img src="../static/img/logo-cna-lombardia-bianco.png" alt="logo scuola alta formazione lombardia" className="img-fluid p-3"/>
            </div>
          </Col>
          <Col sm={3}>
            <div className="rounded-card-negative d-flex justify-content-center align-items-center">
              <h6>Logo 3 al negativo</h6>
            </div>
          </Col>
          <Col sm={3}>
            <div className="rounded-card-negative d-flex justify-content-center align-items-center">
              <h6>Logo 4 al negativo</h6>
            </div>
          </Col>
        </Row>
        <Row className="my-4 fw-bold">
          <Col sm={12}>
            {acronym} {applicationName}
          </Col>
        </Row>
        <Row className="mt-3">
          <Col sm={12}>
            <ul class="it-footer-small-prints-list list-inline mb-0 d-flex flex-column flex-md-row">
              <li className="list-inline-item"><a href="#">Privacy</a></li>
              <li className="list-inline-item"><a href="#">Accessibilità</a></li>
              <li className="list-inline-item"><a href="#">Cookie policy</a></li>
              <li className="list-inline-item"><a href="#">Note legali</a></li>
              <li className="list-inline-item"><a href="#">Contatti</a></li>
              <li className="list-inline-item"><a href="#">Credits</a></li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <span className="d-inline-block">&copy; Copyright Regione Lombardia</span>
            <span className="d-inline-block ms-1">- tutti i diritti riservati</span>
            <span className="d-inline-block ms-1">- C.F. 80050050154</span>
            <span className="d-inline-block ms-1">- Piazza Città di Lombardia 1</span>
            <span className="d-inline-block ms-1">- 20124 Milano</span>
          </Col>
        </Row>
      </Container>
    </footer>
  )
};
