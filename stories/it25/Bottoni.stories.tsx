import { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { Button, Icon, Container, Col, Row } from '../../src';

const meta: Meta = {
  title: "Linee Guida/Call to action/Bottoni",
};

export default meta;

type Story = StoryObj<typeof Container>;

export const Dimensioni: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: "none" },
    },
  },
  render: () => {
    return (
      <Container fluid>
        <Row className="my-3">
          <Col sm={3}>
            <strong>Dimensione small</strong>
          </Col>
          <Col sm={3} className="text-center">
            <Button color="primary" size="sm">Lorem ipsum</Button>
          </Col>
          <Col sm={3} className="text-center">
            <Button color="primary" size="sm" outline>Lorem ipsum</Button>
          </Col>
          <Col sm={3} className="text-center">
            <Button color="secondary" size="sm">Lorem ipsum</Button>
          </Col>
        </Row>
        <Row className="my-3">
          <Col sm={3}>
            <strong>Dimensione medium</strong>
          </Col>
          <Col sm={3} className="text-center">
            <Button color="primary">Lorem ipsum</Button>
          </Col>
          <Col sm={3} className="text-center">
            <Button color="primary" outline>Lorem ipsum</Button>
          </Col>
          <Col sm={3} className="text-center">
            <Button color="secondary">Lorem ipsum</Button>
          </Col>
        </Row>
        <Row className="my-3">
          <Col sm={3}>
            <strong>Dimensione large</strong>
          </Col>
          <Col sm={3} className="text-center">
            <Button color="primary" size="lg">Lorem ipsum</Button>
          </Col>
          <Col sm={3} className="text-center">
            <Button color="primary" size="lg" outline>Lorem ipsum</Button>
          </Col>
          <Col sm={3} className="text-center">
            <Button color="secondary" size="lg">Lorem ipsum</Button>
          </Col>
        </Row>
        <Row className="my-3">
          <Col sm={3}>
            <strong>Due righe</strong>
          </Col>
          <Col sm={3} className="text-center">
            <Button color="primary" size="lg" style={{width: "160px"}}>Lorem ipsum dolor sit</Button>
          </Col>
          <Col sm={3} className="text-center">
            <Button color="primary" size="lg" outline style={{width: "160px"}}>Lorem ipsum dolor sit</Button>
          </Col>
          <Col sm={3} className="text-center">
            <Button color="secondary" size="lg" style={{width: "160px"}} >Lorem ipsum dolor sit</Button>
          </Col>
        </Row>
      </Container>
    );
  }
};


export const Nomenclatura: Story = {
  render: () => {
    return (
      <>
        <div className="btn-example">
          <Button color="primary">Primario</Button>
          <Button color="primary" outline>Secondario</Button>
          <Button color="secondary">Terziario</Button>
          <Button color="secondary" outline>Quaternario</Button>
        </div>
        <div className="btn-example">
          <Button color="primary" disabled>Disabled</Button>
          <Button color="primary" outline disabled>Disabled</Button>
          <Button color="secondary" disabled>Disabled</Button>
          <Button color="secondary" outline disabled>Disabled</Button>
        </div>
      </>
    );
  }
};

export const Distanziamento: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: "none" },
    },
  },
  render: () => {
    return (
      <Container fluid>
        <Row className="my-3">
          <Col md={3}>
            <strong>Verticale | 16px</strong>
          </Col>
          <Col md={9}>
            <Button color="primary" size="sm" className="my-3">Lorem ipsum</Button>
            <br />
            <Button color="primary" size="sm" outline>Lorem ipsum</Button>
          </Col>
        </Row>
        <Row className="my-3">
          <Col md={3}>
            <strong>Orizzontale | 16px</strong>
          </Col>
          <Col md={9}>
            <Button color="primary" size="sm" className="me-3">Lorem ipsum</Button>
            <Button color="primary" size="sm" outline>Lorem ipsum</Button>
          </Col>
        </Row>
      </Container>
    );
  }
};

export const BottoniConIcona: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: "none" },
    },
  },
  render: () => {
    return (
      <Container fluid>
        <Row className="my-3">
          <Col sm={4} className="text-center">
            <Button color="primary" size="sm" icon>
              <Icon
                color="white"
                icon="it-check-circle"
              />
              <span>Lorem ipsum</span>
            </Button>
          </Col>
          <Col sm={4} className="text-center">
            <Button color="primary" size="sm" outline icon>
              <Icon
                color="primary"
                icon="it-check-circle"
              />
              <span>Lorem ipsum</span>
            </Button>
          </Col>
          <Col sm={4} className="text-center">
            <Button color="secondary" size="sm" icon>
              <Icon
                color="white"
                icon="it-check-circle"
              />
              <span>Lorem ipsum</span>
          </Button>
          </Col>
        </Row>
        <Row className="my-3">
          <Col sm={4} className="text-center">
            <Button color="primary" icon>
              <Icon
                color="white"
                icon="it-check-circle"
              />
              <span>Lorem ipsum</span>
            </Button>
          </Col>
          <Col sm={4} className="text-center">
            <Button color="primary" outline icon>
              <Icon
                color="primary"
                icon="it-check-circle"
              />
              <span>Lorem ipsum</span>
            </Button>
          </Col>
          <Col sm={4} className="text-center">
            <Button color="secondary" icon>
              <Icon
                color="white"
                icon="it-check-circle"
              />
              <span>Lorem ipsum</span>
            </Button>
          </Col>
        </Row>
        <Row className="my-3">
          <Col sm={4} className="text-center">
            <Button color="primary" size="lg" icon>
              <Icon
                color="white"
                icon="it-check-circle"
              />
              <span>Lorem ipsum</span>
            </Button>
          </Col>
          <Col sm={4} className="text-center">
            <Button color="primary" size="lg" outline icon>
              <Icon
                color="primary"
                icon="it-check-circle"
              />
              <span>Lorem ipsum</span>
            </Button>
          </Col>
          <Col sm={4} className="text-center">
            <Button color="secondary" size="lg" icon>
              <Icon
                color="white"
                icon="it-check-circle"
              />
              <span>Lorem ipsum</span>
            </Button>
          </Col>
        </Row>
        <Row className="my-3">
          <Col sm={4} className="text-center">
            <Button color="primary" size="lg" style={{width: "200px"}} >
              <div className="d-flex justify-content-center">
                <Icon
                  color="white"
                  icon="it-check-circle"
                  size="lg"
                  className="me-1"
                />
                <span className="text-start">Lorem ipsum dolor sit</span>
              </div>
            </Button>
          </Col>
          <Col sm={4} className="text-center">
            <Button color="primary" size="lg" outline style={{width: "200px"}}>
              <div className="d-flex justify-content-center">
                <Icon
                  color="primary"
                  icon="it-check-circle"
                  size="lg"
                  className="me-1"
                />
                <span className="text-start">Lorem ipsum dolor sit</span>
              </div>
            </Button>
          </Col>
          <Col sm={4} className="text-center">
            <Button color="secondary" size="lg" style={{width: "200px"}}>
              <div className="d-flex justify-content-center">
                <Icon
                  color="white"
                  icon="it-check-circle"
                  size="lg"
                  className="me-1"
                />
                <span className="text-start">Lorem ipsum dolor sit</span>
              </div>
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
};

export const BottoniMini: Story = {
  render: () => {
    return (
      <Container fluid>
        <Row>
          <Col>
            <Button color="primary" size="xs" className="me-2">Lorem ipsum</Button>
            <Button color="primary" outline size="xs">Lorem ipsum</Button>
          </Col>
        </Row>
      </Container>
    );
  }
};


export const TextButton: Story = {
  render: () => {
    return (
      <div>
        <Button tag="a" href="#" role="button" className="btn-link" active >Link</Button>
        <Button size="lg" type="submit" className="btn-link">Button</Button>
        <Button tag="input" type="button" value="Input" className="btn-link" />
        <Button size="sm" tag="input" type="submit" value="Submit" className="btn-link" />
        <Button size="xs"tag="input" type="reset" value="Reset" className="btn-link" />
      </div>
    );
  }
};



export const Tag: Story = {
  render: () => {
    return (
      <div>
       <Button color="primary" className="btn-tag btn-me">Tag button</Button>
       <Button color="primary" outline className="btn-tag">Tag button</Button>
      </div>
    );
  }
};
