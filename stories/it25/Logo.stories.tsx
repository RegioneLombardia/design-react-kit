import { Meta } from '@storybook/react';
import React from 'react';

const meta: Meta = {
  title: "Linee Guida/Componenti Principali/Logo",
};

export default meta;

export const Logo = () => (
  <>
    <div className="d-flex flex-row mb-3">
      <div className="p-2 me-5">
      <img src="img/logo-rl.png"
        alt="logo regione lombardia" className="it25-header-logo d-none d-md-block"/>
      </div>
      <div className="p-2 primary-bg rounded-3">
      <img style={{height:"65px"}} src="img/logo-rl-bianco.png"
        alt="logo regione lombardia" className="it25-header-logo d-none d-md-block"/>
      </div>
    </div>
  </>
);
