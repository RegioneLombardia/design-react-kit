import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Col, Container, Row } from '../../src';
import { Footer } from '../../src/it25/Footer/Footer';

//Non esiste un componente specifico per cui uso Container come riferimento per la storia
const meta: Meta<typeof Container> = {
  title: "Linee Guida/Componenti Principali/Gestione Loghi Multipli",
  component: Container,
  args: {
    acronym: 'ACCREDITAS',
    applicationName: 'Sistema di accreditamento',
  }
};

export default meta;

type Story = StoryObj<typeof Container>;

export const GestioneLoghiMultipli: Story = {
  args: {
    links: [
      { 'href': '#', 'content': 'Privacy'},
      { 'href': '#', 'content': 'Accessibilità'},
      { 'href': '#', 'content': 'Cookie policy'},
      { 'href': '#', 'content': 'Note legali'},
      { 'href': '#', 'content': 'Contatti'},
      { 'href': '#', 'content': 'Credits'}
    ]
  },
  render: ({ acronym, applicationName, links}) => (
    < >
    <Container fluid="true">
      <Row className="my-2">
        <Col md={3}>
          <div className="it25-footer-logo d-flex justify-content-center align-items-center">
            <img src="img/logo-aria.png" alt="logo azienda regionale innovazione acquisti" className="img-fluid p-3"/>
          </div>
        </Col>
        <Col md={3}>
          <div className="it25-footer-logo d-flex justify-content-center align-items-center">
            <img src="img/logo_inlombardia.svg" alt="logo inlombardia" className="img-fluid p-3"/>
          </div>
        </Col>
        <Col md={3}>
          <div className="it25-footer-logo d-flex justify-content-center align-items-center">
            <img src="img/logo_sost_RL.jpg" alt="logo sostenibilità" className="img-fluid p-3"/>
          </div>
        </Col>
        <Col md={3}>
          <div className="it25-footer-logo d-flex justify-content-center align-items-center">
            <img src="img/logo-difensore-regionale.jpg" alt="logo difensore regionale" className="img-fluid"/>
          </div>
        </Col>
      </Row>
    </Container>
    <Footer acronym={acronym} applicationName={applicationName} links={links}></Footer>
    </>
  )
};

export const VersioneOttoLoghi: Story = {
  args: {
    links: [
      { 'href': '#', 'content': 'Privacy'},
      { 'href': '#', 'content': 'Accessibilità'},
      { 'href': '#', 'content': 'Cookie policy'},
      { 'href': '#', 'content': 'Note legali'},
      { 'href': '#', 'content': 'Contatti'},
      { 'href': '#', 'content': 'Credits'}
    ]
  },
  render: ({ acronym, applicationName, links}) => (
    < >
    <Container fluid="true">
      <Row className="my-2">
        <Col md={3}>
          <div className="it25-footer-logo d-flex justify-content-center align-items-center">
            <img src="img/logo-aria.png" alt="logo azienda regionale innovazione acquisti" className="img-fluid p-3"/>
          </div>
        </Col>
        <Col md={3}>
          <div className="it25-footer-logo d-flex justify-content-center align-items-center">
            <img src="img/logo_inlombardia.svg" alt="logo inlombardia" className="img-fluid p-3"/>
          </div>
        </Col>
        <Col md={3}>
          <div className="it25-footer-logo d-flex justify-content-center align-items-center">
            <img src="img/logo_sost_RL.jpg" alt="logo sostenibilità" className="img-fluid p-3"/>
          </div>
        </Col>
        <Col md={3}>
          <div className="it25-footer-logo d-flex justify-content-center align-items-center">
            <img src="img/logo-difensore-regionale.jpg" alt="logo difensore regionale" className="img-fluid"/>
          </div>
        </Col>
      </Row>
      <Row className="my-2">
        <Col md={3}>
          <div className="rounded-card d-flex justify-content-center align-items-center">
            <h6>Logo 5</h6>
          </div>
        </Col>
        <Col md={3}>
          <div className="rounded-card d-flex justify-content-center align-items-center">
            <h6>Logo 6</h6>
          </div>
        </Col>
        <Col md={3}>
          <div className="rounded-card d-flex justify-content-center align-items-center">
            <h6>Logo 7</h6>
          </div>
        </Col>
        <Col md={3}>
          <div className="rounded-card d-flex justify-content-center align-items-center">
            <h6>Logo 8</h6>
          </div>
        </Col>
      </Row>
    </Container>
    <Footer acronym={acronym} applicationName={applicationName} links={links}></Footer>
    </>
  )
};
