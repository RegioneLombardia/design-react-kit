import { Meta, StoryObj } from '@storybook/react';
import React, { useRef } from 'react';
import { Icon, TabContainer, TabContent, TabNav, TabNavItem, TabNavLink, TabPane, Nav, UncontrolledTooltip } from '../../src';

const meta: Meta<typeof Nav> = {
  title: "Linee Guida/Call to action/Tab Bar",
  component: Nav,
};

export default meta;

type Story = StoryObj<typeof Nav>;


export const TabBar: Story = {
  render: () => (
    <TabContainer defaultActiveKey='2'>
      <TabNav>
        <TabNavItem>
          <TabNavLink href="#" eventKey='1'>Label</TabNavLink>
        </TabNavItem>
        <TabNavItem>
          <TabNavLink href="#" eventKey='2'>Label</TabNavLink>
        </TabNavItem>
        <TabNavItem>
          <TabNavLink href="#" eventKey='3'>Label</TabNavLink>
        </TabNavItem>
        <TabNavItem>
          <TabNavLink href="#" eventKey='4' disabled>
            Label
          </TabNavLink>
        </TabNavItem>
      </TabNav>
    </TabContainer>
  )
};


export const SoloTesto: Story = {
  render: () => (
    <TabContainer defaultActiveKey='2'>
      <TabNav>
        <TabNavItem>
          <TabNavLink eventKey='1'>Label</TabNavLink>
        </TabNavItem>
        <TabNavItem>
          <TabNavLink eventKey='2'>Label</TabNavLink>
        </TabNavItem>
        <TabNavItem>
          <TabNavLink eventKey='3'>Label</TabNavLink>
        </TabNavItem>
        <TabNavItem>
          <TabNavLink eventKey='4' disabled>
            Label
          </TabNavLink>
        </TabNavItem>
      </TabNav>
      <TabContent>
        <TabPane eventKey='1' className='p-4'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </TabPane>
        <TabPane eventKey='2' className='p-4'>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </TabPane>
        <TabPane eventKey='3' className='p-4'>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
          qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </TabPane>
        <TabPane eventKey='4' className='p-4'>
          Contenuto 4
        </TabPane>
      </TabContent>
    </TabContainer>
  )
};

const SoloIconeHooks = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  return (
    <TabContainer defaultActiveKey='2'>
      <TabNav>
        <TabNavItem>
          <TabNavLink eventKey='1'>
            <span ref={ref1}>
              <Icon icon='it-link' aria-hidden />
              <span className='visually-hidden'>Descrizione per non vedenti Tab 1</span>
            </span>
          </TabNavLink>
        </TabNavItem>
        <TabNavItem>
          <TabNavLink eventKey='2'>
            <span ref={ref2}>
              <Icon icon='it-calendar' aria-hidden />
              <span className='visually-hidden'>Descrizione per non vedenti Tab 2</span>
            </span>
          </TabNavLink>
        </TabNavItem>
        <TabNavItem>
          <TabNavLink eventKey='3'>
            <span ref={ref3}>
              <Icon icon='it-comment' aria-hidden />
              <span className='visually-hidden'>Descrizione per non vedenti Tab 3</span>
            </span>
          </TabNavLink>
        </TabNavItem>
        <TabNavItem>
          <TabNavLink eventKey='4' disabled>
            <span ref={ref4}>
              <Icon icon='it-copy' aria-hidden />
              <span className='visually-hidden'>Descrizione per non vedenti Tab 4</span>
            </span>
          </TabNavLink>
        </TabNavItem>
      </TabNav>
      <TabContent>
        <TabPane eventKey='1' className='p-4'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </TabPane>
        <TabPane eventKey='2' className='p-4'>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </TabPane>
        <TabPane eventKey='3' className='p-4'>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
          qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </TabPane>
        <TabPane eventKey='4' className='p-4'>
          Contenuto 4
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
    </TabContainer>
  );
};

export const SoloIcone: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'none' }
    }
  },
  render: () => {
    return <SoloIconeHooks />;
  }
};


export const TestoEIcona: Story = {
  render: () => (
    <TabContainer defaultActiveKey='2'>
      <TabNav>
        <TabNavItem>
          <TabNavLink eventKey='1'>
            <Icon icon='it-link' aria-hidden />
            Label
          </TabNavLink>
        </TabNavItem>
        <TabNavItem>
          <TabNavLink eventKey='2'>
            <Icon icon='it-calendar' aria-hidden />
            Label
          </TabNavLink>
        </TabNavItem>
        <TabNavItem>
          <TabNavLink eventKey='3'>
            <Icon icon='it-comment' aria-hidden />
            Label
          </TabNavLink>
        </TabNavItem>
        <TabNavItem>
          <TabNavLink eventKey='4' disabled>
            <Icon icon='it-copy' aria-hidden />
            Label
          </TabNavLink>
        </TabNavItem>
      </TabNav>
      <TabContent>
        <TabPane eventKey='1' className='p-4'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </TabPane>
        <TabPane eventKey='2' className='p-4'>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </TabPane>
        <TabPane eventKey='3' className='p-4'>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
          qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </TabPane>
        <TabPane eventKey='4' className='p-4'>
          Contenuto 4
        </TabPane>
      </TabContent>
    </TabContainer>
  )
};
