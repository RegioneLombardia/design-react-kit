import { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Col, Collapse, Container, Dropdown, DropdownMenu, DropdownToggle, Icon, LinkList, LinkListItem,
  MegamenuItem, Nav, Navbar, NavbarToggler, NavItem, NavLink, Row } from '../../src';

//Non esiste un componente specifico per cui uso Container come riferimento per la storia
const meta: Meta<typeof Container> = {
  title: "Linee Guida/Componenti Principali/Menu Orizzontale",
  component: Container,
  parameters: {
    docs: {
      story: {
        height: '350px'
      },
      canvas: { sourceState: 'none' }
    }
  },
  args: {
  }
};

export default meta;

type Story = StoryObj<typeof Container>;


function showCloser(show, id) {
  const closer = document.getElementById(id)
  if (show) {
    closer.classList.add("show")
  } else {
    closer.classList.remove("show")
  }
  document.activeElement.blur()
}

const MenuOrizzontaleHooks = () => {
  const [openNav, setOpenNav] = useState(false);
  const toggle = () => {
    setOpenNav(!openNav)
    showCloser(!openNav, "closer01");
  };
  return (
    <div className='it-header-navbar-wrapper theme-light-desk it25-menu-orizzontale'>
      <Navbar expand="lg" className='has-megamenu'>
        <NavbarToggler className='custom-navbar-toggler d-flex d-lg-none' onClick={toggle}>
          <Icon icon='it-burger' color='primary' size='md'/>
          <div className="d-block d-lg-none align-self-center text-primary fw-semibold ms-2">Apri Menu</div>
        </NavbarToggler>
        <NavbarToggler className='custom-navbar-toggler it25-megamenu-closer' id="closer01" onClick={toggle}>
          <Icon icon='it-close-big' size='md'/>
        </NavbarToggler>
        <Collapse isOpen={openNav} navbar header megamenu>
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
            </Nav>
      </Collapse>
    </Navbar>
  </div>
  );
};

export const MenuOrizzontale: Story = {
  render: () => {
    return <MenuOrizzontaleHooks />;
  }
};
