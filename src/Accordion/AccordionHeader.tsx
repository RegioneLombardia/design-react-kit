import classNames from 'classnames';
import React, { ElementType, FC, HTMLAttributes, ReactNode } from 'react';

export interface AccordionHeaderProps extends HTMLAttributes<HTMLElement> {
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
  tag?: ElementType;
  /** Classi aggiuntive da usare per il componente AccordionHeader */
  className?: string;
  /** Utilizzare questo attributo per indicare se l'elemento è attivo o no */
  active?: boolean;
  /** Questa funzione verrà chiamata quando avviene un click sul componente AccordionHeader */
  onToggle?: () => void;
  /** Contenuto aggiuntivo all'interno del bottone dell'AccordionHeader */
  append?: ReactNode;
  testId?: string;
}

export const AccordionHeader: FC<AccordionHeaderProps> = ({
  className,
  tag = 'button',
  active = false,
  append,
  onToggle,
  testId,
  ...attributes
}) => {
  const Tag = tag;
  const toggleClasses = classNames(className, 'accordion-button', {
    collapsed: !active
  });
  return (
    <div className='accordion-header' data-testid={testId}>
      <Tag
        aria-expanded={active ? 'true' : 'false'}
        className={toggleClasses}
        onClick={onToggle}
        {...attributes}
        {...(tag === 'button' && { type: 'button' })}
      ></Tag>
      {append}
    </div>
  );
};
