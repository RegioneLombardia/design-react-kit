import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Col, Row, LinkList, LinkListItem } from '../../src';
import { Footer } from '../../src/it25/Footer/Footer';

const meta: Meta<typeof Footer> = {
  title: "Linee Guida/Componenti Principali/Footer",
  args: {
    acronym: 'ACCREDITAS',
    applicationName: 'Sistema di accreditamento',
  }
};

export default meta;

type Story = StoryObj<typeof Footer>;

export const Standard: Story = {  args: {
    links: [
      { 'href': '#', 'content': 'Privacy'},
      { 'href': '#', 'content': 'Accessibilità'},
      { 'href': '#', 'content': 'Cookie policy'},
      { 'href': '#', 'content': 'Note legali'},
      { 'href': '#', 'content': 'Contatti'},
      { 'href': '#', 'content': 'Credits'}
    ]
  },
  render: ({ acronym, applicationName, links }) => (
    <Footer acronym={acronym} applicationName={applicationName} links={links}></Footer>
  )
};

export const Minimo: Story = {
  render: ({ acronym, applicationName }) => (
    <Footer acronym={acronym} applicationName={applicationName}></Footer>
  )
};

function Logos() {
  return (
    <>
      <Row>
        <Col sm={3}>
          <div className="it25-footer-logo d-flex justify-content-center align-items-center">
            <img src="/img/logo-saf-lombardia.png" alt="logo scuola alta formazione lombardia" className="img-fluid"/>
          </div>
        </Col>
        <Col sm={3}>
          <div className="it25-footer-logo d-flex justify-content-center align-items-center">
            <img src="/img/logo-cna-lombardia-bianco.png" alt="logo scuola alta formazione lombardia" className="img-fluid"/>
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
    </>
  )
};


export const LoghiMultipli: Story = {
  args: {
    logos: Logos(),
  },
  render: ({ acronym, applicationName, logos}) => (
    <Footer acronym={acronym} applicationName={applicationName} logos={logos}></Footer>
  )
};

export const MultiLink: Story = {  args: {
    links: [
      { 'href': '#', 'content': 'Privacy'},
      { 'href': '#', 'content': 'Accessibilità'},
      { 'href': '#', 'content': 'Cookie policy'},
      { 'href': '#', 'content': 'Note legali'},
      { 'href': '#', 'content': 'Contatti'},
      { 'href': '#', 'content': 'Credits'}
    ],
  },
  render: ({ acronym, applicationName, links }) => (
    <Footer acronym={acronym} applicationName={applicationName} links={links}>
      <div className="it-footer-main">
        <div className="container-fluid">
          <section>
            <Row>
              <Col
                className="pb-2"
                lg={3}
                md={3}
                sm={6}
              >
                <h4>
                  <a
                    href="#"
                    title="Vai alla pagina: Amministrazione"
                  >
                    Amministrazione
                  </a>
                </h4>
                <LinkList className="footer-list clearfix">
                  <LinkListItem
                    href="#"
                    title="Vai alla pagina: Giunta e consiglio"
                  >
                    Giunta e consiglio
                  </LinkListItem>
                  <LinkListItem
                    href="#"
                    title="Vai alla pagina: Aree di competenza"
                  >
                    Aree di competenza
                  </LinkListItem>
                  <LinkListItem
                    href="#"
                    title="Vai alla pagina: Dipendenti"
                  >
                    Dipendenti
                  </LinkListItem>
                  <LinkListItem
                    href="#"
                    title="Vai alla pagina: Luoghi"
                  >
                    Luoghi
                  </LinkListItem>
                  <LinkListItem
                    href="#"
                    title="Vai alla pagina: Associazioni e società partecipate"
                  >
                    Associazioni e società partecipate
                  </LinkListItem>
                </LinkList>
              </Col>
              <Col
                className="pb-2"
                lg={3}
                md={3}
                sm={6}
              >
                <h4>
                  <a
                    href="#"
                    title="Vai alla pagina: Servizi"
                  >
                    Servizi
                  </a>
                </h4>
                <LinkList className="footer-list clearfix">
                  <LinkListItem
                    href="#"
                    title="Vai alla pagina: Pagamenti"
                  >
                    Pagamenti
                  </LinkListItem>
                  <LinkListItem
                    href="#"
                    title="Vai alla pagina: Sostegno"
                  >
                    Sostegno
                  </LinkListItem>
                  <LinkListItem
                    href="#"
                    title="Vai alla pagina: Domande e iscrizioni"
                  >
                    Domande e iscrizioni
                  </LinkListItem>
                  <LinkListItem
                    href="#"
                    title="Vai alla pagina: Segnalazioni"
                  >
                    Segnalazioni
                  </LinkListItem>
                  <LinkListItem
                    href="#"
                    title="Vai alla pagina: Autorizzazioni e concessioni"
                  >
                    Autorizzazioni e concessioni
                  </LinkListItem>
                  <LinkListItem
                    href="#"
                    title="Vai alla pagina: Certificati e dichiarazioni"
                  >
                    Certificati e dichiarazioni
                  </LinkListItem>
                </LinkList>
              </Col>
              <Col
                className="pb-2"
                lg={3}
                md={3}
                sm={6}
              >
                <h4>
                  <a
                    href="#"
                    title="Vai alla pagina: Novità"
                  >
                    Novità
                  </a>
                </h4>
                <LinkList className="footer-list clearfix">
                  <LinkListItem
                    href="#"
                    title="Vai alla pagina: Notizie"
                  >
                    Notizie
                  </LinkListItem>
                  <LinkListItem
                    href="#"
                    title="Vai alla pagina: Eventi"
                  >
                    Eventi
                  </LinkListItem>
                  <LinkListItem
                    href="#"
                    title="Vai alla pagina: Comunicati Stampa"
                  >
                    Comunicati Stampa
                  </LinkListItem>
                </LinkList>
              </Col>
              <Col
                lg={3}
                md={3}
                sm={6}
              >
                <h4>
                  <a
                    href="#"
                    title="Vai alla pagina: Documenti"
                  >
                    Documenti
                  </a>
                </h4>
                <LinkList className="footer-list clearfix">
                  <LinkListItem
                    href="#"
                    title="Vai alla pagina: Progetti e attività"
                  >
                    Progetti e attività
                  </LinkListItem>
                  <LinkListItem
                    href="#"
                    title="Vai alla pagina: Delibere, determine e ordinanze"
                  >
                    Delibere, determine e ordinanze
                  </LinkListItem>
                  <LinkListItem
                    href="#"
                    title="Vai alla pagina: Bandi"
                  >
                    Bandi
                  </LinkListItem>
                  <LinkListItem
                    href="#"
                    title="Vai alla pagina: Concorsi"
                  >
                    Concorsi
                  </LinkListItem>
                  <LinkListItem
                    href="#"
                    title="Vai alla pagina: Albo pretorio"
                  >
                    Albo pretorio
                  </LinkListItem>
                </LinkList>
              </Col>
            </Row>
          </section>
        </div>
      </div>
    </Footer>
  )
};
