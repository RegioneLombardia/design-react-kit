import { Meta, StoryObj } from "@storybook/react";
// @ts-ignore per il momento questo modulo non ha types
import Autocomplete from "accessible-autocomplete/react"; // Reference to https://www.npmjs.com/package/accessible-autocomplete
import React, { useState } from "react";
import { FormGroup, Icon, Input, TextArea, Form, Container, Row, Col } from "../../src";

const meta: Meta<typeof Input> = {
    title: "Linee Guida/Inserimento/Input fields",
    component: Input,
};

export default meta;

type Story = StoryObj<typeof Input>;

export const InputSemplice: Story = {
  render: () => {
    return (
      <Form>
        <Container>
          <Row>
            <Col sm={4}>
              <div className="mb-4">Stato inattivo</div>
              <FormGroup>
                <Input type="text" label="Etichetta di esempio" id="exampleInputText1" />
              </FormGroup>
            </Col>
            <Col sm={4}>
              <div className="mb-4">Stato attivo</div>
              <FormGroup>
                <Input type="text" active label="Etichetta di esempio" id="exampleInputText2" value=" " />
              </FormGroup>
            </Col>
            <Col sm={4}>
              <div className="mb-4">Stato disabilitato</div>
              <FormGroup>
                <Input type="text" active label="Etichetta di esempio" id="exampleInputText3" disabled value=" " />
              </FormGroup>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col sm={4}>
              <div className="mb-4">Input corretto</div>
              <FormGroup>
                <Input type="text" active label="Etichetta di esempio" id="exampleInputText4" name="exampleInputText4" value="Testo immesso"
                  valid />
              </FormGroup>
            </Col>
            <Col sm={4}>
              <div className="mb-4">Attenzione</div>
              <FormGroup>
                <Input type="text" active label="Etichetta di esempio" id="exampleInputText5" name="exampleInputText5" value="Testo immesso"
                  valid={false} className="warning" />
              </FormGroup>
            </Col>
            <Col sm={4}>
              <div className="mb-4">Errore</div>
              <FormGroup>
                <Input type="text" active label="Etichetta di esempio" id="exampleInputText6" name="exampleInputText6" value="Testo immesso"
                  valid={false} />
              </FormGroup>
            </Col>
          </Row>
        </Container>
      </Form>
    );
  }
};

export const conIstruzioni: Story = {
  render: () => {
    return (
      <Form>
        <Container>
          <Row>
            <Col sm={4}>
              <div className="mb-4">Stato inattivo</div>
              <FormGroup>
                <Input type="text" label="Etichetta di esempio" id="exampleInputText7" active
                  placeholder="Inserire dato..." infoText="Ulteriore testo informativo"/>
              </FormGroup>
            </Col>
            <Col sm={4}>
              <div className="mb-4">Stato attivo</div>
              <FormGroup>
                <Input type="text" active label="Etichetta di esempio" id="exampleInputText8" value="Testo in inserim|"
                 infoText="Ulteriore testo informativo" />
              </FormGroup>
            </Col>
            <Col sm={4}>
              <div className="mb-4">Stato disabilitato</div>
              <FormGroup>
                <Input type="text" active label="Etichetta di esempio" id="exampleInputText9" disabled value="Testo non modificabile"
                  infoText="Dato derivante da anagrafica" />
              </FormGroup>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col sm={4}>
              <div className="mb-4">Input corretto</div>
              <FormGroup>
                <Input type="text" active label="Etichetta di esempio" id="exampleInputText7" name="exampleInputText7" value="Testo immesso"
                  valid validationText="Validato!"/>
              </FormGroup>
            </Col>
            <Col sm={4}>
              <div className="mb-4">Attenzione</div>
              <FormGroup>
                <Input type="text" active label="Etichetta di esempio" id="exampleInputText8" name="exampleInputText8" value="Testo immesso"
                  valid={false} className="warning" validationText="Possibili problemi."/>
              </FormGroup>
            </Col>
            <Col sm={4}>
              <div className="mb-4">Errore</div>
              <FormGroup>
                <Input type="text" active label="Etichetta di esempio" id="exampleInputText9" name="exampleInputText9" value="Testo immesso"
                  valid={false} validationText="Errore bloccante!" />
              </FormGroup>
            </Col>
          </Row>
        </Container>
      </Form>
    );
  }
};

