/* eslint jsx-a11y/anchor-is-valid: 0 */
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { BarraIstituzionale } from '../../../src/it25/Header/BarraIstituzionale.tsx';

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
  render: ({ acronym, applicationName}) => (
    <BarraIstituzionale acronym={""} applicationName={applicationName} search={true} />
  )
};

export const BottoneHamburger: Story = {
  render: ({ acronym, applicationName}) => (
    <BarraIstituzionale acronym={acronym} applicationName={applicationName} hamburgerButton={true} />
  )
};
