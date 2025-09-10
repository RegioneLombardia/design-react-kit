import { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { BarraIstituzionale } from '../../../src/it25/Header/BarraIstituzionale';

const meta: Meta<typeof BarraIstituzionale> = {
  title: "Linee Guida/Componenti Principali/Header/BarraIstituzionale",
  component: BarraIstituzionale,
  args: {
    acronym: 'ACCREDITAS',
    applicationName: 'Sistema di accreditamento',
  }
};

export default meta;

type Story = StoryObj<typeof BarraIstituzionale>;

export const BarraBase: Story = {
  render: ({ acronym, applicationName}) => (
    <BarraIstituzionale acronym={acronym} applicationName={applicationName} />
  )
};

export const BarraSearch: Story = {
  render: ({ applicationName}) => (
    <BarraIstituzionale applicationName={applicationName} search={true} />
  )
};


