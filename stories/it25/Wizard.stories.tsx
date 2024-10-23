import type { Meta } from "@storybook/react";
import React from "react";
import {
    StepperContainer,
    StepperHeader,
    StepperHeaderElement,
} from "../../src";

const meta: Meta<typeof StepperContainer> = {
    title: "Linee Guida/Inserimento/Wizard",
    component: StepperContainer
};

export default meta;

export const Semplice = () => {
  return (
    <>
      <div>
        <StepperContainer>
          <StepperHeader className="it25-wizard it25-wizard-pin">
            <StepperHeaderElement variant="confirmed" prependIcon="it-calendar" title="Prenotazione" aria-label="Confermato" tabindex="0">
            </StepperHeaderElement>
            <StepperHeaderElement className="error" prependIcon="it-list" title="Opzioni" aria-label="errore" tabindex="0"></StepperHeaderElement>
            <StepperHeaderElement variant="active" prependIcon="it-search"  title="Scelta alloggio" aria-label="attivo" tabindex="0">
            </StepperHeaderElement>
            <StepperHeaderElement prependIcon="it-card" title="Pagamento" aria-label="da fare" tabindex="0"></StepperHeaderElement>
          </StepperHeader>
        </StepperContainer>
      </div>
      <div>
        <StepperContainer>
          <StepperHeader className="it25-wizard it25-wizard-pin">
            <StepperHeaderElement variant="confirmed" title="Prenotazione" aria-label="Confermato" tabindex="0">1</StepperHeaderElement>
            <StepperHeaderElement className="error" title="Opzioni" aria-label="errore" tabindex="0">2</StepperHeaderElement>
            <StepperHeaderElement variant="active" title="Scelta alloggio" aria-label="attivo" tabindex="0">3</StepperHeaderElement>
            <StepperHeaderElement title="Pagamento" aria-label="da fare" tabindex="0">4</StepperHeaderElement>
          </StepperHeader>
        </StepperContainer>
      </div>
    </>
  );
};

export const Dettagliato = () => {
  return (
    <StepperContainer>
      <StepperHeader className="it25-wizard">
        <StepperHeaderElement variant="confirmed" appendIcon="it-check" prependIcon="it-calendar">
          Scelta periodo
        </StepperHeaderElement>
        <StepperHeaderElement variant="active" prependIcon="it-search">
          Tipologia alloggio
        </StepperHeaderElement>
        <StepperHeaderElement prependIcon="it-list">Opionals</StepperHeaderElement>
        <StepperHeaderElement variant="mobile" tag={"span"}>
          2/6
        </StepperHeaderElement>
      </StepperHeader>
    </StepperContainer>
  );
};
