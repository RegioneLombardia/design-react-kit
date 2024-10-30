import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Col, Icon, Row, icons } from '../../src';

const meta: Meta = {
  title: "Linee Guida/Utilità/Icone",
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const ListaIcone: Story = {
  render: () => {
    return (
      <Row>
        {icons.map((icon) => (
          <Col md={{ size: 6 }} lg={{ size: 4 }} key={icon}>
            <Icon icon={icon} />&nbsp;{icon}
          </Col>
        ))}
      </Row>
    );
  }
}
