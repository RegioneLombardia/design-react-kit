import * as React from 'react';
import { SVGProps } from 'react';
import { SVGRProps } from '.';
export const component = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      xmlSpace='preserve'
      enableBackground='new 0 0 24 24'
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d='M18.1 14 15 10.3V4.6L16.3 2H7.7L9 4.6v5.7L5.9 14h5.6v8h1v-8h5.6zM10 5h4v5h-4V5zm4.7-2-.5 1H9.8l-.5-1h5.4zm-5 8h4.6l1.6 2H8.1l1.6-2z' />
    </svg>
  );
};
