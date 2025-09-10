import { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";
import {Progress} from "reactstrap"

const meta: Meta<typeof Progress> = {
  title: "Linee Guida/Inserimento/ProgressBar",
  component: Progress,
};

export default meta;

type Story = StoryObj<typeof Progress>;

export const Esempio: Story = {
  render: () => (
    <div>
      <Progress className="progress-lg" value="25" />
      <Progress value="33" />
      <Progress value="33" color="dark"/>
    </div>
  )
}
