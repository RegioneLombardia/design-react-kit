import { Meta } from '@storybook/react';
import React, { useRef, useState } from 'react';
import { Container, Col, Form, FormGroup, FormText, Input, Label, Row } from "../../src";


const meta: Meta = {
  title: "Linee Guida/Inserimento/Check box",
};

export default meta;

export const CheckBox: Story = {
  render: () => {
    return (
      <Form>
        <Container>
          <Row>
            <Col>Default</Col>
            <Col>Disabilitato</Col>
          </Row>
          <Row>
            <Col>
              <FormGroup check>
                <Input id="check1" type="checkbox" defaultChecked />
                <Label for="check1" check>Selezionato</Label>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup check>
                <Input id="check2" type="checkbox" defaultChecked disabled/>
                <Label for="check2" check>Selezionato</Label>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup check>
              <input type="checkbox" class="semi-checked form-control" id="check3" value=""/>
              <Label for="check3" check>Mixed</Label>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup check>
                <input type="checkbox" class="semi-checked form-control" id="check4" value="" disabled/>
                <Label for="check4" check>Mixed</Label>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup check>
              <Input id="check5" type="checkbox"/>
              <Label for="check5" check>Non Selezionato</Label>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup check>
                <Input id="check6" type="checkbox" disabled/>
                <Label for="check6" check>Non Selezionato</Label>
              </FormGroup>
            </Col>
          </Row>
        </Container>
      </Form>
    );
  }
};
