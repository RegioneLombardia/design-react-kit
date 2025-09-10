import { Meta } from '@storybook/react-vite';
import React from 'react';

const meta: Meta = {
  title: "Linee Guida/Utilità/Divisori",
};

export default meta;

export const Divisori = () => (
  <div className="d-flex align-items-start flex-column mb-3">
    <div className="p-2 w-100">
      <span>1px</span>
      <div className="divider-1"></div>
    </div>
    <div className="p-2 w-100">
      <span>1px con ombra</span>
      <div className="divider-1-shadow"></div>
    </div>
    <div className="p-2 w-100">
      <span>2px</span>
      <div className="divider-2"></div>
    </div>
    <div className="p-2 w-100">
      <span>2px con ombra</span>
      <div className="divider-2-shadow"></div>
    </div>
  </div>
);
