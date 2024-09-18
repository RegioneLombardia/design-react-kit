import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import {
  Col,
  Icon,
  LinkList,
  LinkListItem,
  MegamenuItem,
  Nav,
  Navbar,
  Row
} from '../../src';

const meta: Meta<typeof MegamenuItem> = {
  title: "Linee Guida/Navigazione/Megamenu",
  component: MegamenuItem,
  parameters: {
    docs: {
      story: {
        height: '350px'
      },
    }
  }
};

export default meta;

type Story = StoryObj<typeof MegamenuItem>;

export const Classico: Story = {
  render: () => (
    <div className='it-header-navbar-wrapper'>
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
            <Nav className='mt-0' navbar>
              <MegamenuItem itemName="Megamenu">
                <Row>
                  <Col xs='12' lg='4'>
                    <LinkList>
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
                    <LinkList>
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
                    <LinkList>
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

export const ConIntestazioneColonne: Story = {
  render: () => (
    <div className='it-header-navbar-wrapper'>
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
        <Nav className='mt-0' navbar>
          <MegamenuItem itemName="Megamenu">
            <Row>
              <Col xs='12' lg='4'>
                <LinkList header={<div className="link-list-heading text-primary fw-bold">Sezione 1</div>}>
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
                <LinkList header={<div className="link-list-heading text-primary fw-bold">Sezione 2</div>}>
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
                <LinkList header={<div className="link-list-heading text-primary fw-bold">Sezione 3</div>}>
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

