import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { TopBar } from '../../../src/it25/Header/TopBar';

const meta: Meta<typeof TopBar> = {
  title: "Linee Guida/Componenti Principali/Header/TopBar",
  component: TopBar,
};

export default meta;

type Story = StoryObj<typeof TopBar>;

export const TopBarBase: Story = {
  render: () => (
    <TopBar />
  )
};

export const TopBarAccesso: Story = {
  render: ({ access = "#" }) => (
    <TopBar access={access} />
  )
};

export const TopBarAccessoEffettuato: Story = {
  args: {
    user: "Enzo Ferri",
  },
  render: ({ user, links }) => (
    <TopBar user={user} links={links} />
  )
};


export const TopBarUserSettings: Story = {
  parameters: {
    docs: {
      story: {
        height: '200px'
      },
    }
  },
  args: {
    user: "Enzo Ferri",
    links: [
      { 'href': '#', 'content': 'Dati Profilo'},
      { 'href': '#', 'content': 'Impostazioni'},
      { 'href': '#', 'content': 'Disconnetti'}
    ],
  },
  render: ({ user, links }) => (
    <TopBar user={user} links={links} />
  )
};
