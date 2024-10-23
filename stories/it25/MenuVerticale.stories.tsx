import { Meta, StoryObj } from '@storybook/react';
import React, { useState } from "react";
import { Sidebar, LinkList, LinkListItem, Icon, Collapse } from "../../src";
import { MenuVerticale } from '../../src/it25/MenuVerticale/MenuVerticale.tsx';


const meta: Meta<typeof MenuVerticale> = {
  title: "Linee Guida/Componenti Principali/MenuVerticale",
  component: MenuVerticale,
  args: {
  }
};

export default meta;

type Story = StoryObj<typeof MenuVerticale>;

export const Semplice: Story = {
  render: () => (
    <MenuVerticale>
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
  )
};

const _AnnidataWithHooks = () => {
  const [collapseOpen1, toggleCollapse1] = useState(false);
  const [collapseOpen2, toggleCollapse2] = useState(true);
  const [collapseOpen3, toggleCollapse3] = useState(true);
  const [collapseOpen4, toggleCollapse4] = useState(true);
  const [collapseOpen5, toggleCollapse5] = useState(true);

  return (
    <MenuVerticale>
      <Sidebar>
        <LinkList>
          <LinkListItem
            large
            bold
            className="right-icon"
            onClick={(e) => {
              e.preventDefault();
              toggleCollapse1(!collapseOpen1);
            }}
            aria-expanded={collapseOpen1}
          >
            <LinkListItem.TitleIconWrapper>
              <span className="fw-bold">Lorem ipsum dolor</span>
              <Icon className="right" icon="it-expand" color="primary" aria-hidden />
            </LinkListItem.TitleIconWrapper>
          </LinkListItem>
          <Collapse isOpen={collapseOpen1}>
            <LinkList sublist>
              <LinkListItem>
                <span>Lorem ipsum dolor</span>
              </LinkListItem>
              <LinkListItem>
                <span>Lorem ipsum dolor</span>
              </LinkListItem>
              <LinkListItem>
                <span>Lorem ipsum dolor</span>
              </LinkListItem>
            </LinkList>
          </Collapse>
          <LinkListItem
            large
            bold
            className="right-icon"
            onClick={(e) => {
              e.preventDefault();
              toggleCollapse2(!collapseOpen2);
            }}
            aria-expanded={collapseOpen2}
          >
            <LinkListItem.TitleIconWrapper>
              <span className="fw-bold">Lorem ipsum dolor</span>
              <Icon className="right" icon="it-expand" color="primary" aria-hidden />
            </LinkListItem.TitleIconWrapper>
          </LinkListItem>
          <Collapse isOpen={collapseOpen2}>
            <LinkList sublist>
              <LinkListItem>
                <span>Lorem ipsum dolor</span>
              </LinkListItem>
              <LinkListItem>
                <span>Lorem ipsum dolor</span>
              </LinkListItem>
              <LinkListItem>
                <span>Lorem ipsum dolor</span>
              </LinkListItem>
            </LinkList>
          </Collapse>
          <LinkListItem
            large
            bold
            className="right-icon"
            onClick={(e) => {
              e.preventDefault();
              toggleCollapse3(!collapseOpen3);
            }}
            aria-expanded={collapseOpen3}
          >
            <LinkListItem.TitleIconWrapper>
              <span className="fw-bold">Lorem ipsum dolor</span>
              <Icon className="right" icon="it-expand" color="primary" aria-hidden />
            </LinkListItem.TitleIconWrapper>
          </LinkListItem>
          <Collapse isOpen={collapseOpen3}>
            <LinkList sublist>
              <LinkListItem>
                <span>Lorem ipsum dolor</span>
              </LinkListItem>
              <LinkListItem>
                <span>Lorem ipsum dolor</span>
              </LinkListItem>
              <LinkListItem>
                <span>Lorem ipsum dolor</span>
              </LinkListItem>
            </LinkList>
          </Collapse>
          <LinkListItem
            large
            bold
            className="right-icon"
            onClick={(e) => {
              e.preventDefault();
              toggleCollapse4(!collapseOpen4);
            }}
            aria-expanded={collapseOpen4}
          >
            <LinkListItem.TitleIconWrapper>
              <span className="fw-bold">Lorem ipsum dolor</span>
              <Icon className="right" icon="it-expand" color="primary" aria-hidden />
            </LinkListItem.TitleIconWrapper>
          </LinkListItem>
          <Collapse isOpen={collapseOpen4}>
            <LinkList sublist>
              <LinkListItem>
                <span>Lorem ipsum dolor</span>
              </LinkListItem>
              <LinkListItem>
                <span>Lorem ipsum dolor</span>
              </LinkListItem>
              <LinkListItem>
                <span>Lorem ipsum dolor</span>
              </LinkListItem>
            </LinkList>
          </Collapse>
          <LinkListItem
            large
            bold
            className="right-icon"
            onClick={(e) => {
              e.preventDefault();
              toggleCollapse5(!collapseOpen5);
            }}
            aria-expanded={collapseOpen5}
          >
            <LinkListItem.TitleIconWrapper>
              <span className="fw-bold">Lorem ipsum dolor</span>
              <Icon className="right" icon="it-expand" color="primary" aria-hidden />
            </LinkListItem.TitleIconWrapper>
          </LinkListItem>
          <Collapse isOpen={collapseOpen5}>
            <LinkList sublist>
              <LinkListItem>
                <span>Lorem ipsum dolor</span>
              </LinkListItem>
              <LinkListItem>
                <span>Lorem ipsum dolor</span>
              </LinkListItem>
              <LinkListItem>
                <span>Lorem ipsum dolor</span>
              </LinkListItem>
            </LinkList>
          </Collapse>
        </LinkList>
      </Sidebar>
    </MenuVerticale>
  );
};

export const Innestata: Story = {
  render: () => <_AnnidataWithHooks/>
};

