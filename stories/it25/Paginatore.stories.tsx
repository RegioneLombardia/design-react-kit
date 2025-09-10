import { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { Form, FormGroup, Icon, Input, Pager, PagerItem, PagerLink } from '../../src';

const meta: Meta<typeof Pager> = {
  title: "Linee Guida/Navigazione/Paginatore",
  component: Pager,
};

export default meta;

type Story = StoryObj<typeof Pager>;

export const Default: Story = {
  render: () => (
    <Pager aria-label='Esempio di navigazione'>
      <PagerItem disabled>
        <PagerLink previous href='#'>
          <Icon icon='it-chevron-left' aria-hidden />
        </PagerLink>
      </PagerItem>
      <PagerItem>
        <PagerLink  aria-current='page' href='#'>1</PagerLink>
      </PagerItem>
      <PagerItem>
        <PagerLink href='#'>2</PagerLink>
      </PagerItem>
      <PagerItem>
        <PagerLink href='#'>3</PagerLink>
      </PagerItem>
      <PagerItem>
        <PagerLink next href='#'>
          <Icon icon='it-chevron-right' aria-hidden />
        </PagerLink>
      </PagerItem>
    </Pager>
  )
};

export const MoreComponent: Story = {
  render: () => (
    <Pager aria-label='Esempio di paginazione'>
      <PagerItem>
        <PagerLink previous href='#'>
          <Icon icon='it-chevron-left' aria-hidden />
        </PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink href='#'>1</PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink tag='span'>…</PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink href='#'>24</PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink href='#'>25</PagerLink>
      </PagerItem>
      <PagerItem>
        <PagerLink aria-current='page' href='#'>
          26
        </PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink href='#'>27</PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink href='#'>28</PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink tag='span'>…</PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink href='#'>50</PagerLink>
      </PagerItem>
      <PagerItem>
        <PagerLink next href='#'>
          <Icon icon='it-chevron-right' aria-hidden />
        </PagerLink>
      </PagerItem>
    </Pager>
  )
};


export const JumpToPage: Story = {
  render: () => (
    <Pager aria-label='Esempio di paginazione'>
      <PagerItem>
        <PagerLink previous href='#'>
          <Icon icon='it-chevron-left' aria-hidden />
        </PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink href='#'>1</PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink tag='span'>…</PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink href='#'>24</PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink href='#'>25</PagerLink>
      </PagerItem>
      <PagerItem>
        <PagerLink aria-current='page' href='#'>
          26
        </PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink href='#'>27</PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink href='#'>28</PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink tag='span'>…</PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink href='#'>50</PagerLink>
      </PagerItem>
      <PagerItem>
        <PagerLink next href='#'>
          <Icon icon='it-chevron-right' aria-hidden />
        </PagerLink>
      </PagerItem>
      <Form>
        <FormGroup>
          <Input id='jumpToPage' type='text' maxLength={3} placeholder="Vai a.." aria-label="Indica la pagina desiderata"/>
        </FormGroup>
      </Form>
    </Pager>
  )
};

export const SimpleMode: Story = {
  render: () => (
    <Pager aria-label='Esempio di paginazione'>
      <PagerItem disabled>
        <PagerLink previous href='#'>
          <Icon icon='it-chevron-left' aria-hidden />
        </PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink tag='span'>1</PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink tag='span'>/</PagerLink>
      </PagerItem>
      <PagerItem className='d-none d-sm-block'>
        <PagerLink tag='span'>5</PagerLink>
      </PagerItem>
      <PagerItem>
        <PagerLink next href='#'>
          <Icon icon='it-chevron-right' aria-hidden />
        </PagerLink>
      </PagerItem>
    </Pager>
  )
};
