import { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";
import { Dropdown, DropdownMenu, DropdownToggle, LinkList, LinkListItem } from "../../src";

const meta: Meta<typeof DropdownMenu> = {
    title: "Linee Guida/Navigazione/DropdownMenu",
    component: DropdownMenu,
};

export default meta;

export const _Link: Story = {
  parameters: {
    docs: {
      story: {
        height: '230px'
      },
    },
  },
  render: () => {
    return (
      <Dropdown>
        <DropdownToggle color="primary" tag="a" caret>
          Apri dropdown
        </DropdownToggle>
        <DropdownMenu>
          <LinkList>
            <LinkListItem inDropdown href='#' active>
              <span>Attivo<span className="visually-hidden">Voce attiva</span></span>
            </LinkListItem>
            <LinkListItem inDropdown href='#' disabled aria-disabled="true">
              <span>Disabilitato</span>
            </LinkListItem>
            <LinkListItem inDropdown href='#'>
              <span>Normale</span>
            </LinkListItem>
          </LinkList>
        </DropdownMenu>
      </Dropdown>
    );
  }
};

export const _Bottone: Story = {
  parameters: {
    docs: {
      story: {
        height: '230px'
      },
    },
  },
  render: () => {
    return (
      <Dropdown>
        <DropdownToggle color="primary" caret>
          Apri dropdown
        </DropdownToggle>
        <DropdownMenu>
          <LinkList>
            <LinkListItem inDropdown href='#' active>
              <span>Attivo<span className="visually-hidden">Voce attiva</span></span>
            </LinkListItem>
            <LinkListItem inDropdown href='#' disabled aria-disabled="true">
              <span>Disabilitato</span>
            </LinkListItem>
            <LinkListItem inDropdown href='#'>
              <span>Normale</span>
            </LinkListItem>
          </LinkList>
        </DropdownMenu>
      </Dropdown>
    );
  }
};


type Story = StoryObj<typeof DropdownMenu>;

export const _Default: Story = {
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: 'lightgrey', padding: '10px' }}>
        <Story />
      </div>
    ),
  ],
  render: () => (
    <div className="docs-show-dropdown-open">
      <DropdownMenu>
        <LinkList>
          <LinkListItem inDropdown href='#' active>
            <span>Attivo<span className="visually-hidden">Voce attiva</span></span>
          </LinkListItem>
          <LinkListItem inDropdown href='#' disabled aria-disabled="true">
            <span>Disabilitato</span>
          </LinkListItem>
          <LinkListItem inDropdown href='#'>
            <span>Normale</span>
          </LinkListItem>
        </LinkList>
      </DropdownMenu>
    </div>
  )
};


export const _BottomEnd: Story = {
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: 'lightgrey', padding: '10px' }}>
        <Story />
      </div>
    ),
  ],
  render: () => (
    <div className="docs-show-dropdown-open">
      <DropdownMenu data-popper-placement="bottom-end">
        <LinkList>
          <LinkListItem inDropdown href='#' active>
            <span>Attivo<span className="visually-hidden">Voce attiva</span></span>
          </LinkListItem>
          <LinkListItem inDropdown href='#' disabled aria-disabled="true">
            <span>Disabilitato</span>
          </LinkListItem>
          <LinkListItem inDropdown href='#'>
            <span>Normale</span>
          </LinkListItem>
        </LinkList>
      </DropdownMenu>
    </div>
  )
};


export const _HeaderEDivider: Story = {
  parameters: {
    docs: {
        story: {
        height: '230px'
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: 'lightgrey', padding: '10px' }}>
        <Story />
      </div>
    ),
  ],
  render: () => (
    <div className="docs-show-dropdown-open">
      <DropdownMenu>
        <LinkList>
          <LinkListItem header inDropdown className="text-primary fw-bold">
            Intestazione
          </LinkListItem>
          <LinkListItem inDropdown href='#' active>
            <span>Attivo<span className="visually-hidden">Voce attiva</span></span>
          </LinkListItem>
          <LinkListItem inDropdown href='#' disabled aria-disabled="true">
            <span>Disabilitato</span>
          </LinkListItem>
          <LinkListItem inDropdown href='#'>
            <span>Normale</span>
          </LinkListItem>
          <LinkListItem divider />
          <LinkListItem inDropdown href='#'>
            <span>Azione 4</span>
          </LinkListItem>
        </LinkList>
      </DropdownMenu>
    </div>
    )
};
