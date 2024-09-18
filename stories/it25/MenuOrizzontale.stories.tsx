/* eslint jsx-a11y/anchor-is-valid: 0 */
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Col, Container, Dropdown, DropdownMenu, DropdownToggle, Icon, LinkList, LinkListItem,
  MegamenuItem, Nav, Navbar, NavItem, NavLink, Row } from '../../src';

//Non esiste un componente specifico per cui uso Container come riferimento per la storia
const meta: Meta<typeof Container> = {
  title: "Linee Guida/Componenti Principali/Menu Orizzontale",
  component: Container,
  parameters: {
    docs: {
      story: {
        height: '350px'
      },
    }
  },
  args: {
  }
};

export default meta;

type Story = StoryObj<typeof Container>;

export const MenuOrizzontale: Story = {
  args: {
  },
  render: () => (
    <div className='it-header-navbar-wrapper theme-light-desk it25-menu-orizzontale'>
      <Navbar expand="lg" className='has-megamenu'>
        <div className="d-inline-flex">
          <button className="custom-navbar-toggler" type="button" aria-controls="nav1" aria-expanded="false"
          aria-label="Mostra/Nascondi la navigazione" data-bs-toggle="navbarcollapsible" data-bs-target="#nav1">
            <Icon color="primary" icon="it-burger" />
          </button>
          <div className="d-block d-lg-none align-self-center text-primary fw-semibold ms-2">Apri Menu</div>
        </div>
        <div className="navbar-collapsable" id="nav1">
          <div className="overlay"></div>
          <div className="close-div">
            <button className="btn close-menu" type="button">
              <span className="visually-hidden">Nascondi la navigazione</span>
              <Icon icon="it-close-big" />
            </button>
          </div>
          <div className="menu-wrapper">
            <Nav navbar>
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
                <DropdownToggle caret inNavbar>
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
            </Nav>
          </div>
        </div>
      </Navbar>
    </div>
  )
};
