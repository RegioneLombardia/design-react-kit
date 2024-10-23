import { Meta, StoryObj } from "@storybook/react";
import Autocomplete from "accessible-autocomplete/react"; // Reference to https://www.npmjs.com/package/accessible-autocomplete
import React, { useState } from "react";
import { FormGroup, Icon, Input, Form, Container, Row, Col, Select } from "../../src";

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

export const conIcone: Story = {
  render: () => {
    return (
      <Form>
        <Container>
          <Row>
            <Col sm={4}>
              <div className="mb-4">Stato inattivo</div>
              <FormGroup>
                <Input hasIconLeft iconLeft={<Icon aria-hidden icon="it-mail" size="sm"/>}
                  id="exampleInputText10" label="Etichetta di esempio" type="text"/>
                  <small className="form-text info it25-valid-info-text-patch">Ulteriore testo informativo</small>
              </FormGroup>
            </Col>
            <Col sm={4}>
              <div className="mb-4">Stato attivo</div>
              <FormGroup>
                <Input hasIconLeft iconLeft={<Icon aria-hidden icon="it-mail" size="sm"/>}
                  id="exampleInputText11" label="Etichetta di esempio" type="text" active value=" "/>
                  <small className="form-text info it25-valid-info-text-patch">Ulteriore testo informativo</small>
              </FormGroup>
            </Col>
            <Col sm={4}>
              <div className="mb-4">Stato disabilitato</div>
              <FormGroup>
                <Input hasIconLeft iconLeft={<Icon aria-hidden icon="it-mail" size="sm"/>}
                  id="exampleInputText12" label="Etichetta di esempio" type="text" active
                  value=" " disabled />
                  <small className="form-text info it25-valid-info-text-patch">Dato derivante da anagrafica</small>
                </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col sm={4}>
              <div className="mb-4">Stato inattivo</div>
              <FormGroup>
                <Input hasIconLeft iconLeft={<Icon aria-hidden icon="it-mail" size="sm"/>}
                  id="exampleInputText13" label="Etichetta di esempio" type="text"
                  placeholder="Inserire dato..."/>
                  <small className="form-text info it25-valid-info-text-patch">Ulteriore testo informativo</small>
              </FormGroup>
            </Col>
            <Col sm={4}>
              <div className="mb-4">Stato attivo</div>
              <FormGroup>
                <Input hasIconLeft iconLeft={<Icon aria-hidden icon="it-mail" size="sm"/>}
                  id="exampleInputText14" label="Etichetta di esempio" type="text" active
                  value="Testo in inserim| "/>
                  <small className="form-text info it25-valid-info-text-patch">Ulteriore testo informativo</small>
              </FormGroup>
            </Col>
            <Col sm={4}>
              <div className="mb-4">Stato disabilitato</div>
              <FormGroup>
                <Input hasIconLeft iconLeft={<Icon aria-hidden icon="it-mail" size="sm"/>}
                  id="exampleInputText15" label="Etichetta di esempio" type="text" active
                  value="Testo non modificabile" disabled />
                  <small className="form-text info it25-valid-info-text-patch">Dato derivante da anagrafica</small>
              </FormGroup>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col sm={4}>
              <div className="mb-4">Input corretto</div>
              <FormGroup>
                <Input hasIconLeft iconLeft={<Icon aria-hidden icon="it-mail" size="sm"/>}
                  type="text" active label="Etichetta di esempio" id="exampleInputText16" name="exampleInputText7" value="Testo immesso"
                  valid/>
              </FormGroup>
            </Col>
            <Col sm={4}>
              <div className="mb-4">Attenzione</div>
              <FormGroup>
                <Input hasIconLeft iconLeft={<Icon aria-hidden icon="it-mail" size="sm"/>}
                  type="text" active label="Etichetta di esempio" id="exampleInputText17" name="exampleInputText8" value="Testo immesso"
                  valid={false} className="warning"/>
              </FormGroup>
            </Col>
            <Col sm={4}>
              <div className="mb-4">Errore</div>
              <FormGroup>
                <Input hasIconLeft iconLeft={<Icon aria-hidden icon="it-mail" size="sm"/>}
                  type="text" active label="Etichetta di esempio" id="exampleInputText18" name="exampleInputText9" value="Testo immesso"
                  valid={false} />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col sm={4}>
              <div className="mb-4">Input corretto</div>
              <FormGroup>
                <Input hasIconLeft iconLeft={<Icon aria-hidden icon="it-mail" size="sm"/>}
                  type="text" active label="Etichetta di esempio" id="exampleInputText19" name="exampleInputText7" value="Testo immesso"
                  valid validationText="Validato!"/>
              </FormGroup>
            </Col>
            <Col sm={4}>
              <div className="mb-4">Attenzione</div>
              <FormGroup>
                <Input hasIconLeft iconLeft={<Icon aria-hidden icon="it-mail" size="sm"/>}
                  type="text" active label="Etichetta di esempio" id="exampleInputText20" name="exampleInputText8" value="Testo immesso"
                  valid={false} className="warning" validationText="Possibili problemi."/>
              </FormGroup>
            </Col>
            <Col sm={4}>
              <div className="mb-4">Errore</div>
              <FormGroup>
                <Input hasIconLeft iconLeft={<Icon aria-hidden icon="it-mail" size="sm"/>}
                  type="text" active label="Etichetta di esempio" id="exampleInputText21" name="exampleInputText9" value="Testo immesso"
                  valid={false} validationText="Errore bloccante!" />
              </FormGroup>
            </Col>
          </Row>
        </Container>
      </Form>
    );
  }
};

export const PasswordField: Story = {
  render: () => {
    return (
      <Form>
        <Container>
          <Row>
            <Col sm={4}>
              <div className="mb-4">Stato inattivo</div>
              <FormGroup>
                <Input id="exampleInputPassword1" infoText="Inserisci almeno 8 caratteri"
                  label="Password" type="password"/>
              </FormGroup>
            </Col>
            <Col sm={4}>
              <div className="mb-4">Stato attivo</div>
              <FormGroup>
                <Input id="exampleInputPassword2" infoText="Inserisci almeno 8 caratteri"
                  label="Password" type="password" active value="abcdefg12"/>
              </FormGroup>
            </Col>
            <Col sm={4}>
              <div className="mb-4">Stato disabilitato</div>
              <FormGroup>
                <Input id="exampleInputPassword3" infoText="Inserisci almeno 8 caratteri"
                  label="Password" type="password" active disabled value="abcdefg12"/>
              </FormGroup>
            </Col>
          </Row>
        </Container>
      </Form>
    );
  }
};

export const PasswordConIcone: Story = {
  render: () => {
    return (
      <Form>
        <Container>
          <Row>
            <Col sm={4}>
              <div className="mb-4">Stato inattivo</div>
              <FormGroup>
                <Input  hasIconLeft iconLeft={<Icon aria-hidden icon="it-key" size="sm"/>}
                  id="exampleInputPassword4" label="Password" type="password"/>
                  <small className="form-text info it25-valid-info-text-patch">Inserisci almeno 8 caratteri</small>
              </FormGroup>
            </Col>
            <Col sm={4}>
              <div className="mb-4">Stato attivo</div>
              <FormGroup>
                <Input  hasIconLeft iconLeft={<Icon aria-hidden icon="it-key" size="sm"/>}
                  id="exampleInputPassword5" label="Password" type="password" active value="abcdefg12"/>
                  <small className="form-text info it25-valid-info-text-patch">Inserisci almeno 8 caratteri</small>
              </FormGroup>
            </Col>
            <Col sm={4}>
              <div className="mb-4">Stato disabilitato</div>
              <FormGroup>
                <Input  hasIconLeft iconLeft={<Icon aria-hidden icon="it-key" size="sm"/>}
                  id="exampleInputPassword6" label="Password" type="password" active disabled value="abcdefg12"/>
                  <small className="form-text info it25-valid-info-text-patch">Inserisci almeno 8 caratteri</small>
              </FormGroup>
            </Col>
          </Row>
        </Container>
      </Form>
    );
  }
};

export const SearchField: Story = {
  render: () => {
    const multiOptions: { value: string, label: string }[] = [
        { value: "1", label: "Abruzzo" },
        { value: "2", label: "Basilicata" },
        { value: "3", label: "Calabria" },
        { value: "4", label: "Campania" },
        { value: "5", label: "Emilia Romagna" },
        { value: "6", label: "Friuli Venezia Giulia" },
        { value: "7", label: "Lazio" },
        { value: "8", label: "Liguria" },
        { value: "9", label: "Lombardia" },
        { value: "10", label: "Marche" },
        { value: "11", label: "Molise" },
        { value: "12", label: "Piemonte" },
        { value: "13", label: "Puglia" },
        { value: "14", label: "Sardegna" },
        { value: "15", label: "Sicilia" },
        { value: "16", label: "Toscana" },
        { value: "17", label: "Trentino Alto Adige" },
        { value: "18", label: "Umbria" },
        { value: "19", label: "Valle d'Aosta" },
        { value: "20", label: "Veneto" },
    ];
    const suggest = (query: "", populateResults: "") => {
        const filteredResults = multiOptions.filter((i) => i.label.toLowerCase().includes(query.toLowerCase()));
        const data = filteredResults.map((item) => {
            return item.label;
        });
        populateResults(data);
    };

    return (
      <Form>
        <Container>
          <Row>
            <Col sm={4}>
              <div className="mb-4">Ricerca</div>
              <FormGroup>
                <Input hasIconLeft iconLeft={<Icon aria-hidden icon="it-search" size="sm"/>}
                  id="exampleSearchField1" label="Testo da cercare" type="text"/>
              </FormGroup>
            </Col>
            <Col sm={4}>
              <div className="mb-4">Selezione</div>
              <FormGroup>
                <SelectClassicaHooks />
              </FormGroup>
            </Col>
            <Col sm={4}>
              <div className="mb-4">Suggerimenti</div>
              <FormGroup className="select-wrapper">
                  <label htmlFor="autocomplete">Regione</label>
                  <Autocomplete id="autocomplete" source={suggest} placeholder={"Testo da cercare"} defaultValue={""}
                      displayMenu={"inline"} tNoResults={() => "Nessun risultato"}/>
              </FormGroup>
            </Col>
          </Row>
        </Container>
      </Form>
    );
  }
};

const SelectClassicaHooks = () => {
    const [, setValue] = useState<string>();

    const handleChange = (selectedOption: string) => setValue(selectedOption);

    return (
      <Select id="example-reactstrap" label="Etichetta di esempio" onChange={handleChange}>
        <option value="">Scegli un'opzione</option>
        <option value="Value 1">Lorem ipsum dolor sit amet</option>
        <option value="Value 2">Duis vestibulum eleifend libero</option>
        <option value="Value 3">Phasellus pretium orci sed odio tempus</option>
        <option value="Value 4">Vestibulum bibendum ex vel augue porttitor sodales</option>
        <option value="Value 5">Praesent quis elementum turpis</option>
      </Select>
    );

};

const InputNumerico1Hook = () => {
  const [value1, setValue1] = useState();
  return (
    <Input id="numerico1" type="number" label="Lorem ipsum" value={value1}
      incrementLabel="Aumenta il valore di 1" decrementLabel="Diminuisci il valore di 1"
      onChange={(ev) => {
        setValue1(ev.target.value);
      }}
    />
  );
};
const InputNumerico2Hook = () => {
  const [value2, setValue2] = useState("100");
  return (
    <Input id="numerico2" type="number" label="Lorem ipsum" value={value2}
      incrementLabel="Aumenta il valore di 1" decrementLabel="Diminuisci il valore di 1"
      onChange={(ev) => {
        setValue2(ev.target.value);
      }}
    />
  );
};
const InputNumerico3Hook = () => {
  const [value3, setValue3] = useState("100");
  return (
    <Input id="numerico3" type="number" label="Lorem ipsum" value={value3} disabled
      incrementLabel="Aumenta il valore di 1" decrementLabel="Diminuisci il valore di 1"
      onChange={(ev) => {
        setValue3(ev.target.value);
      }}
    />
  );
};

export const InputNumerico: Story = {
  render: () => {
    return (
      <Form>
        <Container>
          <Row>
            <Col sm={4}>
              <div className="mb-4">Stato inattivo</div>
              <FormGroup>
                <InputNumerico1Hook />
              </FormGroup>
            </Col>
            <Col sm={4}>
              <div className="mb-4">Stato attivo</div>
              <FormGroup>
                <InputNumerico2Hook />
              </FormGroup>
            </Col>
            <Col sm={4}>
              <div className="mb-4">Stato disabilitato</div>
              <FormGroup>
                <InputNumerico3Hook />
              </FormGroup>
            </Col>
          </Row>
        </Container>
      </Form>
    )
  },
}

const InputValutaHooks = () => {
  const [value, setValue] = useState("100");
  return (
    <Input id="example-currency" addonText="€" type="currency" label="Currency"
      incrementLabel="Aumenta il valore di 1 euro" decrementLabel="Diminuisci il valore di 1 euro"
      value={value} step="any" min={3.5} max={100}
      onChange={(ev) => {
          setValue(ev.target.value);
      }}
    />
  );
};
const InputPercentualeHooks = () => {
  const [value, setValue] = useState("100");
  return (
    <Input id="example-percentage" addonText="%" type="percentage" label="Percentage"
      incrementLabel="Aumenta il valore di 1" decrementLabel="Diminuisci il valore di 1"
      value={value} min={0} max={100}
      onChange={(ev) => {
        setValue(ev.target.value);
      }}
    />
  );
};

export const ValutaEPercentuale: Story = {
  render: () => {
    return (
      <Form>
        <Container>
          <Row>
            <Col sm={4}>
              <div className="mb-4">Valuta</div>
              <FormGroup>
                <InputValutaHooks />
              </FormGroup>
            </Col>
            <Col sm={4}>
              <div className="mb-4">Percentuale</div>
              <FormGroup>
                <InputPercentualeHooks />
              </FormGroup>
            </Col>
          </Row>
        </Container>
      </Form>
    )
  },
}
