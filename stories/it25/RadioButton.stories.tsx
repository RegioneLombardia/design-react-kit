import { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { Container, Col, Form, FormGroup, Input, Label, Row } from "../../src";


const meta: Meta = {
  title: "Linee Guida/Inserimento/Radio button",
};

export default meta;

type Story = StoryObj<typeof Container>;

export const RadioButton: Story = {
  render: () => {
    return (
      <Form>
        <Container>
          <Row>
            <Col>
              <div>Default</div>
              <FormGroup check inline>
                <Input name="gruppo1" type="radio" id="radio1" defaultChecked />
                <Label check htmlFor="radio1">
                    Selezionato
                </Label>
              </FormGroup>
              <FormGroup check inline>
                <Input name="gruppo1" type="radio" id="radio2" />
                <Label check htmlFor="radio2">
                    Non Selezionato
                </Label>
              </FormGroup>
            </Col>
            <Col>
              <div>Disabilitato</div>
              <FormGroup check inline>
                <Input name="gruppo2" type="radio" id="radio3" defaultChecked disabled/>
                <Label check htmlFor="radio3">
                    Selezionato
                </Label>
              </FormGroup>
              <FormGroup check inline>
                <Input name="gruppo2" type="radio" id="radio4" disabled/>
                <Label check htmlFor="radio4">
                    Non Selezionato
                </Label>
              </FormGroup>
            </Col>
          </Row>
        </Container>
      </Form>
    );
  }
};
