import { Meta } from '@storybook/react';
import React from 'react';
import { Container, Col, Row } from '../../src';

//Non esiste un componente specifico per cui uso Container come riferimento per la storia
const meta: Meta<typeof Container> = {
  title: "Linee Guida/Utilità/Tipografia",
};

export default meta;

type Story = StoryObj<typeof Container>;

export const TitilliumWeb = () => (
  <Row>
    <Col>
      <div className="tipografia-example">
        <Row>
          <Col>
            <p className="h2">Titillium Web Desktop</p>
          </Col>
          <Col>
            <p className="h1">H1 Bold 48px/60px</p>
            <p className="h2">H2 Bold 40px/48px</p>
            <p className="h3">H3 Bold 32px/40px</p>
            <p className="h4">H4 SemiBold 28px/40px</p>
            <p className="h5">H5 Regular 24px/40px</p>
            <p className="h6">H6 SemiBold 18px/28px</p>
            <p>Body Text Regular 18px</p>
            <p className="small fw-semibold">Caption Small SemiBold 16px</p>
            <p className="x-small">Caption extra small Regular 14px</p>
          </Col>
        </Row>
      </div>
    </Col>
    <Col>
      <div className="tipografia-example">
        <Row>
          <Col>
            <p className="h2">Titillium Web Mobile</p>
          </Col>
          <Col>
            <p className="h1">H1 Bold 40px/48px</p>
            <p className="h2">H2 Bold 32px/40px</p>
            <p className="h3">H3 Bold 28px/32px</p>
            <p className="h4">H4 SemiBold 24px/28px</p>
            <p className="h5">H5 Regular 20px/24px</p>
            <p className="h6">H6 SemiBold 16px/24px</p>
            <p>Body Text Regular 18px</p>
            <p className="small fw-semibold">Caption Small SemiBold 16px</p>
            <p className="x-small">Caption extra small Regular 14px</p>
          </Col>
        </Row>
      </div>
    </Col>
  </Row>
);

export const RobotoMono = () => (
  <Row>
    <Col>
      <div className="tipografia-example">
        <Row>
          <Col md={4}>
            <p class="h2 font-monospace">Roboto Mono</p>
          </Col>
          <Col md={8}>
            <p class="h1 font-monospace">H1 Bold 40px</p>
            <p class="h2 font-monospace">H2 Bold 32px</p>
            <p class="h3 font-monospace">H3 Bold 28px</p>
            <p class="h4 font-monospace">H4 Bold 24px</p>
            <p class="h5 font-monospace">H5 Regular 20px</p>
            <p class="h6 font-monospace">H6 Bold 16px</p>
            <p class="font-monospace">Body Text Regular 18px</p>
            <p class="fw-semibold font-monospace small">Caption Small bold 16px</p>
            <p class="font-monospace x-small">Caption extra small Regular 14px</p>
          </Col>
        </Row>
      </div>
    </Col>
  </Row>
);
