import { Meta, StoryObj } from "@storybook/react";
import React from 'react';
import { Container, Col, Form, FormGroup, Row, Toggle } from "../../src";

const meta: Meta = {
  title: "Linee Guida/Inserimento/Toggle",
};

export default meta;

type Story = StoryObj<typeof Toggle>;

export const Esempio: Story = {
  render: () => {
    return (
      <Form>
        <Container>
          <Row className="row justify-content-between">
            <Col sm={3}>
              <div>Default</div>
              <FormGroup check>
                <Toggle label="Selezionato" defaultChecked disabled={false} />
              </FormGroup>
              <FormGroup check>
                <Toggle label="Non Selezionato" disabled={false} />
              </FormGroup>
            </Col>
            <Col sm={3}>
              <div>Disabilitato</div>
              <FormGroup check>
                <Toggle label="Selezionato" defaultChecked disabled={true} />
              </FormGroup>
              <FormGroup check>
                <Toggle label="Non Selezionato" disabled={true} />
              </FormGroup>
            </Col>
          </Row>
        </Container>
      </Form>
    );
  }
};
