/* eslint jsx-a11y/anchor-is-valid: 0 */
import { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { BarraIstituzionale } from '../../../src/it25/Header/BarraIstituzionale.tsx';
import { TopBar } from '../../../src/it25/Header/TopBar.tsx';
import { MenuVerticale } from '../../../src/it25/MenuVerticale/MenuVerticale.tsx';
import { Footer } from '../../../src/it25/Footer/Footer.tsx';
import { Container, Col, Row, Sidebar, LinkList, LinkListItem, Icon, Collapse, ResponsiveImage } from "../../../src";

const meta: Meta<typeof BarraIstituzionale> = {
  title: "Linee Guida/Componenti Principali/Header/BarraIstituzionale",
  component: BarraIstituzionale,
  args: {
    acronym: 'ACCREDITAS',
    applicationName: 'Sistema di accreditamento',
  }
};

export default meta;

type Story = StoryObj<typeof BarraIstituzionale>;

export const BarraBase: Story = {
  render: ({ acronym, applicationName}) => (
    <BarraIstituzionale acronym={acronym} applicationName={applicationName} />
  )
};

export const BarraSearch: Story = {
  render: ({ acronym, applicationName}) => (
    <BarraIstituzionale acronym={""} applicationName={applicationName} search={true} />
  )
};

export const BottoneHamburger: Story = ({ acronym, applicationName}) => {
  return (
    < >
      <header className="it25-menu">
        <TopBar />
        <BarraIstituzionale acronym={acronym} applicationName={applicationName} hamburgerButton={true} />
      </header>
      <main>
        <Container fluid>
          <Row className="flex-xl-nowrap">
            <Col xs={12} md={3}>
              <MenuVerticale className="collapse">
                <Sidebar>
                  <LinkList>
                    <LinkListItem href="#">
                      <span>Lorem ipsum dolor</span>
                    </LinkListItem>
                    <LinkListItem active href="#">
                      <span>Link Attivo</span>
                    </LinkListItem>
                    <LinkListItem href="#">
                      <span>Lorem ipsum dolor</span>
                    </LinkListItem>
                    <LinkListItem disabled href="#">
                      <span>Disabilitato</span>
                    </LinkListItem>
                    <LinkListItem href="#">
                      <span>Lorem ipsum dolor</span>
                    </LinkListItem>
                    <LinkListItem href="#">
                      <span>Lorem ipsum dolor</span>
                    </LinkListItem>
                    <LinkListItem href="#">
                      <span>Lorem ipsum dolor</span>
                    </LinkListItem>
                    <LinkListItem href="#">
                      <span>Lorem ipsum dolor</span>
                    </LinkListItem>
                  </LinkList>
                </Sidebar>
              </MenuVerticale>
            </Col>
            <Col xs={12} md={9} className="p-3">
              <ResponsiveImage
                alt="Alternative Text"
                src="../static/img/bike-sharing.jpg"
                title="Image Title"
              />
            </Col>
          </Row>
        </Container>
      </main>
      <Footer acronym={acronym} applicationName={applicationName}></Footer>
    </ >
  )
};
