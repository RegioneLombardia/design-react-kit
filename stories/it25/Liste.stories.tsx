import React, { MouseEventHandler, useState } from "react";

import { Meta, StoryObj } from "@storybook/react-vite";
import {
  Collapse,
  Icon,
  LinkList,
  LinkListItem,
} from "../../src";

const meta: Meta<typeof LinkList> = {
  title: "Linee Guida/Navigazione/Liste",
  component: LinkList
};

export default meta;

type Story = StoryObj<typeof LinkList>;

export const Default: Story = {
  render: () => (
    <LinkList wrapperClassName="it25-linklist-default">
      <LinkListItem>
        <span>Lorem ipsum dolor</span>
      </LinkListItem>
      <LinkListItem active href="#">
        <span>Lorem ipsum dolor</span>
      </LinkListItem>
      <LinkListItem>
        <span>Lorem ipsum dolor</span>
      </LinkListItem>
      <LinkListItem disabled>
        <span>Lorem ipsum dolor</span>
      </LinkListItem>
      <LinkListItem>
        <span>Lorem ipsum dolor</span>
      </LinkListItem>
    </LinkList>
  )
};

export const SenzaDivider: Story = {
  render: () => (
    <LinkList>
      <LinkListItem>
        <span>Lorem ipsum dolor</span>
      </LinkListItem>
      <LinkListItem active href="#">
        <span>Lorem ipsum dolor</span>
      </LinkListItem>
      <LinkListItem>
        <span>Lorem ipsum dolor</span>
      </LinkListItem>
      <LinkListItem disabled>
        <span>Lorem ipsum dolor</span>
      </LinkListItem>
      <LinkListItem>
        <span>Lorem ipsum dolor</span>
      </LinkListItem>
    </LinkList>
  )
};

export const ConHeader: Story = {
  render: () => (
    <LinkList header={<div className="link-list-heading">Lorem ipsum</div>}>
      <LinkListItem>
        <span>Lorem ipsum dolor</span>
      </LinkListItem>
      <LinkListItem active href="#">
        <span>Lorem ipsum dolor</span>
      </LinkListItem>
      <LinkListItem>
        <span>Lorem ipsum dolor</span>
      </LinkListItem>
      <LinkListItem disabled>
        <span>Lorem ipsum dolor</span>
      </LinkListItem>
      <LinkListItem>
        <span>Lorem ipsum dolor</span>
      </LinkListItem>
    </LinkList>
  )
};


const NestedHooks = () => {
  const [collapseOpen1, toggleCollapse1] = useState(false);
  const [collapseOpen2, toggleCollapse2] = useState(false);
  const [collapseOpen3, toggleCollapse3] = useState(false);

  const onToggle1: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();
    toggleCollapse1(!collapseOpen1);
  };

  const onToggle2: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();
    toggleCollapse2(!collapseOpen2);
  };

  const onToggle3: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();
    toggleCollapse3(!collapseOpen3);
  };

  const expanded = {
    "aria-expanded": true,
  };
  return (
    <LinkList>
      <LinkListItem bold large className="icon-right border-bottom" onClick={onToggle1} {...(collapseOpen1 ? expanded : {})}>
        <LinkListItem.TitleIconWrapper>
          <span className="list-item-title">Lorem ipsum dolor</span>
          <Icon className="right" color="primary" icon="it-expand" aria-hidden />
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
      <LinkListItem bold large className="icon-right border-bottom" onClick={onToggle2} {...(collapseOpen2 ? expanded : {})}>
        <LinkListItem.TitleIconWrapper>
          <span className="list-item-title">Lorem ipsum dolor</span>
          <Icon className="right" color="primary" icon="it-expand" aria-hidden />
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
      <LinkListItem bold large className="icon-right border-bottom" onClick={onToggle3} {...(collapseOpen3 ? expanded : {})}>
        <LinkListItem.TitleIconWrapper>
          <span className="list-item-title">Lorem ipsum dolor</span>
          <Icon className="right" color="primary" icon="it-expand" aria-hidden />
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
    </LinkList>
  );

};

export const Nested: Story = {
  render: () => {
    return <NestedHooks />
  }
}
