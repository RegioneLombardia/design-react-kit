import { Meta, StoryObj } from '@storybook/react-vite';
import React, { useRef, useState } from 'react';
import { Container, Row, Col, Button, Icon, Popover, PopoverBody, PopoverHeader } from '../../src';

const meta: Meta<typeof Popover> = {
  title: "Linee Guida/Inserimento/Popover",
  component: Popover,
};

export default meta;

type Story = StoryObj<typeof Popover>;

const PosizionamentoWithHooks = () => {
  const [popoverOpenSx, setPopoverOpenSx] = useState(false);
  const [popoverOpenDx, setPopoverOpenDx] = useState(false);
  const [popoverOpenAlto, setPopoverOpenAlto] = useState(false);
  const [popoverOpenBasso, setPopoverOpenBasso] = useState(false);

  const targetRefSx = useRef(null);
  const targetRefDx = useRef(null);
  const targetRefAlto = useRef(null);
  const targetRefBasso = useRef(null);

  return (
    <Container>
      <Row>
        <Col xs={12} md={{ size: 4, offset: 4 }}>
          <span>
            <Button className='me-1' color='secondary' innerRef={targetRefAlto}
              onClick={() => {
                setPopoverOpenAlto(!popoverOpenAlto);
              }}
            >
              Popover {'in alto'}
            </Button>
            <Popover placement={'top'} isOpen={popoverOpenAlto} target={targetRefAlto}
              toggle={() => {
                setPopoverOpenAlto(!popoverOpenAlto);
              }}
            >
              <PopoverHeader>Titolo del popover</PopoverHeader>
              <PopoverBody>Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                <a href='#' className='popover-inner-link'> altro ... </a>
              </PopoverBody>
            </Popover>
          </span>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={4}>
          <span>
            <Button className='me-1' color='secondary' innerRef={targetRefDx}
              onClick={() => {
                setPopoverOpenDx(!popoverOpenDx);
              }}
            >
              Popover {'a destra'}
            </Button>
            <Popover placement={'right'} isOpen={popoverOpenDx} target={targetRefDx}
              toggle={() => {
                setPopoverOpenDx(!popoverOpenDx);
              }}
            >
              <PopoverBody>Vivamus sagittis lacus vel augue laoreet rutrum faucibus</PopoverBody>
            </Popover>
          </span>
        </Col>
        <Col xs={12} md={{ size: 4, offset: 4 }}>
          <span>
            <Button className='me-1' color='secondary' innerRef={targetRefSx}
              onClick={() => {
                setPopoverOpenSx(!popoverOpenSx);
              }}
            >
              Popover {'a sinistra'}
            </Button>
            <Popover placement={'left'} isOpen={popoverOpenSx} target={targetRefSx}
              toggle={() => {
                setPopoverOpenSx(!popoverOpenSx);
              }}
            >
              <PopoverHeader>
                <Icon icon='it-help-circle' aria-hidden />
                Titolo con icona
              </PopoverHeader>
              <PopoverBody>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue.
                <a href='#' className='popover-inner-link'> altro ...
                  <Icon icon='it-arrow-right' aria-hidden />
                </a>
              </PopoverBody>
            </Popover>
          </span>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={{ size: 4, offset: 4 }}>
          <span>
            <Button className='me-1' color='secondary' innerRef={targetRefBasso}
              onClick={() => {
                setPopoverOpenBasso(!popoverOpenBasso);
              }}
            >
              Popover {'in basso'}
            </Button>
            <Popover placement={'bottom'} isOpen={popoverOpenBasso} target={targetRefBasso}
              toggle={() => {
                setPopoverOpenBasso(!popoverOpenBasso);
              }}
            >
              <PopoverHeader>Titolo del popover</PopoverHeader>
              <PopoverBody>Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                <a href='#' className='popover-inner-link'> altro ... </a>
              </PopoverBody>
            </Popover>
          </span>
        </Col>
      </Row>
    </Container>
  );
}

export const Posizionamento: Story = {
  render: () => <PosizionamentoWithHooks/>
};
