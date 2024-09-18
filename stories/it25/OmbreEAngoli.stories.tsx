import { Meta } from '@storybook/react';
import React from 'react';

const meta: Meta = {
  title: "Linee Guida/Utilità/Ombre e Angoli",
};

export default meta;


export const Angoli = () => (
<div className="d-flex align-items-start flex-column mb-3">
  <div className="p-2">
    <div className="border secondary-gray-border-color rounded-3 p-2">
      <span className="align-middle fw-semibold">BORDER RADIUS - 8 PX</span>
    </div>
  </div>
</div>
);


export const Ombre = () => (
<div className="d-flex align-items-start flex-column mb-3">
  <div className="p-2">
    <div className="rounded-3 p-2 shadow-sm">
      <span className="align-middle fw-semibold">SHADOW - SM</span>
    </div>
  </div>
  <div className="p-2">
    <div className="rounded-3 p-2 shadow pe-5">
      <span className="align-middle fw-semibold">SHADOW</span>
    </div>
  </div>
</div>
);
