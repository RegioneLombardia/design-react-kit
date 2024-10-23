import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import {Progress} from "reactstrap"

const meta: Meta<typeof ProgressBar> = {
  title: "Linee Guida/Inserimento/ProgressBar",
  component: Progress,
};

export default meta;

type Story = StoryObj<typeof ProgressBar>;

export const Esempio: Story = {
  render: () => (
    <div>
      <Progress className="progress-lg" value="25" />
      <Progress value="33" />
      <Progress value="33" color="dark"/>
    </div>
  )
}