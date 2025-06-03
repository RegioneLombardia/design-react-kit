import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { BarraIstituzionale } from '../../../src/it25/Header/BarraIstituzionale';
import { TopBar } from '../../../src/it25/Header/TopBar';
import { MenuVerticale } from '../../../src/it25/MenuVerticale/MenuVerticale';
import { Footer } from '../../../src/it25/Footer/Footer';
import { Col, Collapse, Container, Dropdown, DropdownMenu, DropdownToggle, LinkList, LinkListItem,
  MegamenuItem, Nav, Navbar, NavItem, NavLink, Row, Sidebar, ResponsiveImage } from '../../../src';


const meta: Meta<typeof Container> = {
  title: "Linee Guida/Componenti Principali/Header/MenuPrincipale",
  component: Container,
  args: {
    acronym: 'ACCREDITAS',
    applicationName: 'Sistema di accreditamento',
  }
};

export default meta;

type Story = StoryObj<typeof Container >;

const _navItems = () => {
  return (
    < >
      <NavItem>
        <NavLink href="#"><span>Link</span></NavLink>
      </NavItem>
      <NavItem active>
        <NavLink href="#" active>
          <span>Attivo</span>
          <span className="visually-hidden">voce selezionata</span>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#" disabled>
          <span>Disabled</span>
        </NavLink>
      </NavItem>
      <Dropdown inNavbar tag="li" theme="">
        <DropdownToggle caret inNavbar className="text-start">
          <span>Dropdown</span>
        </DropdownToggle>
        <DropdownMenu>
          <LinkList header={<div className="link-list-heading text-primary fw-bold">Heading</div>}>
            <LinkListItem>
              <span>Link list 1</span>
            </LinkListItem>
            <LinkListItem>
              <span>Link list 2</span>
            </LinkListItem>
            <LinkListItem>
              <span>Link list 3</span>
            </LinkListItem>
            <LinkListItem divider />
            <LinkListItem>
              <span>Link list 4</span>
            </LinkListItem>
          </LinkList>
        </DropdownMenu>
      </Dropdown>
      <MegamenuItem itemName="Megamenu">
        <Row>
          <Col xs='12' lg='4'>
            <LinkList header={<div className="link-list-heading text-primary fw-bold">Heading</div>}>
              <LinkListItem inDropdown href='#'>
                <span>Link list 1</span>
              </LinkListItem>
              <LinkListItem inDropdown href='#'>
                <span>Link list 2</span>
              </LinkListItem>
              <LinkListItem inDropdown href='#'>
                <span>Link list 3</span>
              </LinkListItem>
            </LinkList>
          </Col>
          <Col xs='12' lg='4'>
            <LinkList header={<div className="link-list-heading text-primary fw-bold">Heading</div>}>
              <LinkListItem inDropdown href='#' active>
                <span>Link list 1</span>
              </LinkListItem>
              <LinkListItem inDropdown href='#'>
                <span>Link list 2</span>
              </LinkListItem>
              <LinkListItem inDropdown href='#'>
                <span>Link list 3</span>
              </LinkListItem>
            </LinkList>
          </Col>
          <Col xs='12' lg='4'>
            <LinkList header={<div className="link-list-heading text-primary fw-bold">Heading</div>}>
              <LinkListItem inDropdown href='#'>
                <span>Link list 1</span>
              </LinkListItem>
              <LinkListItem inDropdown href='#' disabled>
                <span>Link list 2</span>
              </LinkListItem>
              <LinkListItem inDropdown href='#'>
                <span>Link list 3</span>
              </LinkListItem>
            </LinkList>
          </Col>
        </Row>
      </MegamenuItem>
    </ >
  );
};

const _mainContent = () => {
  return (
    < >
      <Container fluid>
        <Row>
          <Col xs={12} className="p-3">
            <ResponsiveImage
              alt="Alternative Text"
              src="img/bike-sharing.jpg"
              title="Image Title"
            />
          </Col>
        </Row>
      </Container>
    </ >
  );
};

const _sidebar = () => {
  return (
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
  );
};


export const MenuOrizzontale: Story = {
  render: ({ acronym, applicationName}) => (
    < >
      <header>
        <TopBar />
        <BarraIstituzionale acronym={acronym} applicationName={applicationName}
            hamburgerButton={true} menuType="horizontal" data_bs_target="#nav1"
        />
        <div className="it-header-navbar-wrapper theme-light-desk it25-menu-orizzontale">
          <Navbar expand="lg" className='has-megamenu'>
            <Collapse navbar header megamenu id="nav1">
              <Nav navbar>
                <_navItems/>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      </header>
      <main>
        <_mainContent/>
      </main>
      <Footer acronym={acronym} applicationName={applicationName}></Footer>
    </ >
  )
};

export const MenuSidebar: Story = {
  render: ({ acronym, applicationName}) => (
    < >
      <header>
        <TopBar />
        <BarraIstituzionale acronym={acronym} applicationName={applicationName}
            hamburgerButton={true} menuType="sidebar" data_bs_target="#it25-main-nav"
        />
      </header>
      <main>
        <Container fluid>
          <Row className="flex-xl-nowrap">
            <Col xs={12} md={3}>
              <MenuVerticale className="collapse">
                <_sidebar/>
              </MenuVerticale>
            </Col>
            <Col xs={12} md={9} className="p-3">
              <ResponsiveImage
                alt="Alternative Text"
                src="img/bike-sharing.jpg"
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

export const MenuVerticaleComparsa: Story = {
  render: ({ acronym, applicationName}) => (
    < >
      <header>
        <TopBar />
        <BarraIstituzionale acronym={acronym} applicationName={applicationName}
            hamburgerButton={true} menuType="vertical" data_bs_target="#it25-menu-vert">
          <div id="it25-menu-vert">
            <MenuVerticale>
              <_sidebar/>
            </MenuVerticale>
          </div>
        </BarraIstituzionale>
      </header>
      <main>
        <_mainContent/>
      </main>
      <Footer acronym={acronym} applicationName={applicationName}></Footer>
    </ >
  )
};
