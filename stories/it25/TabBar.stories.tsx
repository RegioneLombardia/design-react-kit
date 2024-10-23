import { Meta } from '@storybook/react';
import React, { useRef, useState } from 'react';
import { Nav, NavItem, NavLink, TabContent, TabPane, Icon, UncontrolledTooltip } from '../../src';

const meta: Meta = {
  title: "Linee Guida/Call to action/Tab Bar",
};

export default meta;

export const TabBar: Story = {
  render: () => {
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink href="#">Label</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" active>Label</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Label</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" disabled>Label</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
};

export const SoloTesto: Story = {
  render: () => {
    const [activeTab, toggleTab] = useState("2");
    return (
      <div>
        <Nav tabs className="mb-3">
          <NavItem>
            <NavLink
              href="#"
              active={activeTab === "1"}
              onClick={() => {
                if (activeTab !== "1") {
                  toggleTab("1");
                }
              }}
            >
              <span>Label</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="#"
              active={activeTab === "2"}
              onClick={() => {
                if (activeTab !== "2") {
                  toggleTab("2");
                }
              }}
            >
              <span>Label</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="#"
              active={activeTab === "3"}
              onClick={() => {
                if (activeTab !== "3") {
                  toggleTab("3");
                }
              }}
            >
              <span>Label</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" disabled>Label</NavLink>
          </NavItem>
        </Nav>

        <TabContent activeTab={activeTab}>
          <TabPane tabId="1" className="p-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
          </TabPane>
          <TabPane tabId="2" className="p-3">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur.
          </TabPane>
          <TabPane tabId="3" className="p-3">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
            qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.
          </TabPane>
        </TabContent>
      </div>
    );
  }
};

export const SoloIcone: Story = {
  render: () => {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const [activeTab, toggleTab] = useState("2");
    return (
      <div>
        <Nav tabs className="mb-3">
          <NavItem>
            <NavLink
              href="#"
              active={activeTab === "1"}
              onClick={() => {
                if (activeTab !== "1") {
                  toggleTab("1");
                }
              }}
            >
              <span ref={ref1}>
                <Icon icon="it-link" aria-hidden title=""/>
                <i className="it-ico-lg it-link d-block text-center" aria-label="Descrizione per non vedenti" />
              </span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="#"
              active={activeTab === "2"}
              onClick={() => {
                if (activeTab !== "2") {
                  toggleTab("2");
                }
              }}
            >
              <span ref={ref2}>
                <Icon icon="it-calendar" aria-hidden title="" />
                <i className="it-ico-lg it-calendar d-block text-center" aria-label="Descrizione per non vedenti" />
              </span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="#"
              active={activeTab === "3"}
              onClick={() => {
                if (activeTab !== "3") {
                  toggleTab("3");
                }
              }}
            >
              <span ref={ref3}>
                <Icon icon="it-comment" aria-hidden title="" />
                <i className="it-ico-lg it-comment d-block text-center" aria-label="Descrizione per non vedenti" />
              </span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              disabled
              href="#"
              active={activeTab === "4"}
              onClick={() => {
                if (activeTab !== "4") {
                  toggleTab("4");
                }
              }}
            >
              <span ref={ref4}>
                <Icon icon="it-copy" aria-hidden title="" />
                <i className="it-ico-lg it-copy d-block text-center" aria-label="Descrizione per non vedenti" />
              </span>
            </NavLink>
          </NavItem>
        </Nav>

        <TabContent activeTab={activeTab}>
          <TabPane tabId="1" className="p-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
          </TabPane>
          <TabPane tabId="2" className="p-3">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur.
          </TabPane>
          <TabPane tabId="3" className="p-3">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
            qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.
          </TabPane>
          <TabPane tabId="4" className="p-3">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt
          </TabPane>
        </TabContent>
        <UncontrolledTooltip placement='top' target={ref1}>
          Spiegazione icona 1 (per tutti)
        </UncontrolledTooltip>
        <UncontrolledTooltip placement='top' target={ref2}>
          Spiegazione icona 2 (per tutti)
        </UncontrolledTooltip>
        <UncontrolledTooltip placement='top' target={ref3}>
          Spiegazione icona 3 (per tutti)
        </UncontrolledTooltip>
        <UncontrolledTooltip placement='top' target={ref4}>
          Spiegazione icona 4 (per tutti)
        </UncontrolledTooltip>
      </div>
    );
  }
};

export const TestoEIcona: Story = {
  render: () => {
    const [activeTab, toggleTab] = useState("2");
    return (
      <div>
        <Nav tabs className="mb-3">
          <NavItem>
            <NavLink
              href="#"
              active={activeTab === "1"}
              onClick={() => {
                if (activeTab !== "1") {
                  toggleTab("1");
                }
              }}
            >
              <span>
                <Icon icon="it-link" aria-hidden />
              </span>
              <span>Label</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="#"
              active={activeTab === "2"}
              onClick={() => {
                if (activeTab !== "2") {
                  toggleTab("2");
                }
              }}
            >
              <span>
                <Icon icon="it-calendar" aria-hidden />
              </span>
              <span>Label</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="#"
              active={activeTab === "3"}
              onClick={() => {
                if (activeTab !== "3") {
                  toggleTab("3");
                }
              }}
            >
              <span>
                <Icon icon="it-comment" aria-hidden />
              </span>
              <span>Label</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              disabled
              href="#"
              active={activeTab === "4"}
              onClick={() => {
                if (activeTab !== "4") {
                  toggleTab("4");
                }
              }}
            >
              <span>
                <Icon icon="it-copy" aria-hidden />
              </span>
              <span>Label</span>
            </NavLink>
          </NavItem>
        </Nav>

        <TabContent activeTab={activeTab}>
          <TabPane tabId="1" className="p-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
          </TabPane>
          <TabPane tabId="2" className="p-3">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur.
          </TabPane>
          <TabPane tabId="3" className="p-3">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
            qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.
          </TabPane>
          <TabPane tabId="4" className="p-3">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt
          </TabPane>
        </TabContent>
      </div>
    );
  }
};
