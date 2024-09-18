import React, { FC, HTMLAttributes } from 'react';
import classNames from 'classnames';

export interface MenuVerticaleProps extends HTMLAttributes<HTMLElement> {
  /** Inserire la Sidebar che deve comparire automaticamente su schermi ampi o premendo il bottone hamburger nella barra ist. su quelli piccoli */
  children?: object | string | React.jsx;
  /** Stato iniziale del "collapse" del componente **/
  collapse?: boolean;
  /** Classi aggiuntive da usare per il componente Sidebar */
  className?: string;
}

export const MenuVerticale: FC<MenuVerticaleProps> = ({
  className = "",
  collapse = false,
  children = "",
}) => {
  const wrapperClasses = classNames('it25-vertical-menu', className, {
    'collapse': collapse,
  });
  return (
    <div className="it25-sidebar">
      <nav className={wrapperClasses} id="it25-main-nav">
        <div className="sidebar-wrapper">
          {children}
        </div>
      </nav>
    </div>
  )
};

