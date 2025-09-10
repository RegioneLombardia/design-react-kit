import { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { BottoneHamburger } from '../../../src/it25/Header/BottoneHamburger';

const meta: Meta<typeof BottoneHamburger> = {
  title: "Linee Guida/Componenti Principali/Header/BottoneHamburger",
  component: BottoneHamburger,
};

export default meta;

type Story = StoryObj<typeof BottoneHamburger>;

export const BottoneHamburgerBase: Story = {
  render: () => (
    <BottoneHamburger menuType="vertical" data_bs_target="#it25-menu-vert" />
  )
};
