import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Breadcrumb, BreadcrumbItem, Icon } from "../../src";

const meta: Meta<typeof Breadcrumb> = {
    title: "Linee Guida/Navigazione/Breadcrumbs",
    component: Breadcrumb,
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;


export const HomeSenza: Story = {
  render: () => (
    <Breadcrumb>
      <BreadcrumbItem active>Home</BreadcrumbItem>
    </Breadcrumb>
  ),
};

export const HomeConIcone: Story = {
  render: () => (
    <Breadcrumb>
      <BreadcrumbItem active>
        <Icon className="align-top me-1" icon="it-pa" color="secondary" aria-hidden size="sm" />
        Home
      </BreadcrumbItem>
    </Breadcrumb>
  ),
};

export const DueLivelliSenza: Story = {
  render: () => (
    <section>
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="#">Home</a>
          <span className="separator">/</span>
        </BreadcrumbItem>
        <BreadcrumbItem active>
          Secondo livello
        </BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="#">Home</a>
          <span className="separator">&gt;</span>
        </BreadcrumbItem>
        <BreadcrumbItem active>
          Secondo livello
        </BreadcrumbItem>
      </Breadcrumb>
    </section>
  ),
};

export const DueLivelliCon: Story = {
  render: () => (
    <Breadcrumb>
      <BreadcrumbItem>
        <Icon className="align-top me-1" icon="it-pa" color="secondary" aria-hidden size="sm" />
        <a href="#">Home</a>
        <span className="separator">/</span>
      </BreadcrumbItem>
      <BreadcrumbItem active>
        <Icon className="align-top me-1" icon="it-box" color="secondary" aria-hidden size="sm" />
        Secondo livello
      </BreadcrumbItem>
    </Breadcrumb>
  ),
};

export const TreLivelliSenza: Story = {
  render: () => (
    <section>
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="#">Home</a>
          <span className="separator">/</span>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <a href="#">Secondo livello</a>
          <span className="separator">/</span>
        </BreadcrumbItem>
        <BreadcrumbItem active>Terzo livello</BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="#">Home</a>
          <span className="separator">&gt;</span>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <a href="#">Secondo livello</a>
          <span className="separator">&gt;</span>
        </BreadcrumbItem>
        <BreadcrumbItem active>Terzo livello</BreadcrumbItem>
      </Breadcrumb>
    </section>
  ),
};

export const TreLivelliCon: Story = {
  render: () => (
    <Breadcrumb>
      <BreadcrumbItem>
        <Icon className="align-top me-1" icon="it-pa" color="secondary" aria-hidden size="sm" />
        <a href="#">Home</a>
        <span className="separator">/</span>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Icon className="align-top me-1" icon="it-box" color="secondary" aria-hidden size="sm" />
        <a href="#">Secondo livello</a>
        <span className="separator">/</span>
      </BreadcrumbItem>
      <BreadcrumbItem active>
        <Icon className="align-top me-1" icon="it-file" color="secondary" aria-hidden size="sm" />
        Terzo livello
      </BreadcrumbItem>
    </Breadcrumb>
  ),
};
