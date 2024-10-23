import { Meta, StoryObj } from "@storybook/react";
import React, { useRef } from 'react';
import { Container, Row, Col, Icon, Tooltip, UncontrolledTooltip } from "../../src";

const meta: Meta = {
  title: "Linee Guida/Inserimento/Tooltip",
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const EsempioBase: Story = {
  render: () => {
    return (
        <EsempioBaseHook />
    );
  }
};

const EsempioBaseHook = () => {
  const ref1 = useRef(null);

  return (
    < >
      <span ref={ref1} tabindex="0">Testo esempio base
        <sup>
          <Icon color="info" icon="it-info-circle" size="xs"/>
        </sup>
      </span>

      <UncontrolledTooltip placement='top' target={ref1}>
        Primo tooltip
      </UncontrolledTooltip>
    </ >
  );
};


const PosizionamentoHooks = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  return (
    <Container>
      <Row>
        <Col sm={4}>
          <span ref={ref1} tabindex="0">Tooltip in alto
            <sup>
              <Icon color="info" icon="it-info-circle" size="xs"/>
            </sup>
          </span>
        </Col>
        <Col sm={4}>
          <span ref={ref2} tabindex="0">Tooltip a destra
            <sup>
              <Icon color="info" icon="it-info-circle" size="xs"/>
            </sup>
          </span>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col sm={4}>
          <span ref={ref3} tabindex="0">Tooltip in basso
            <sup>
              <Icon color="info" icon="it-info-circle" size="xs"/>
            </sup>
          </span>
        </Col>
        <Col sm={4}>
          <span ref={ref4} tabindex="0">Tooltip a sinistra
            <sup>
              <Icon color="info" icon="it-info-circle" size="xs"/>
            </sup>
          </span>
        </Col>
      </Row>

      <UncontrolledTooltip placement='top' target={ref1}>
        Tooltip on top
      </UncontrolledTooltip>
      <UncontrolledTooltip placement='right' target={ref2}>
        Tooltip on right
      </UncontrolledTooltip>
      <UncontrolledTooltip placement='bottom' target={ref3}>
        Tooltip on bottom
      </UncontrolledTooltip>
      <UncontrolledTooltip placement='left' target={ref4}>
        Tooltip on left
      </UncontrolledTooltip>
    </Container>
  );
};

export const Posizionamento: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: "none" },
    },
  },
  render: () => <PosizionamentoHooks />
};

