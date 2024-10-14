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
      <path d='M21.8 11.5C19 6.1 12.4 3.9 7 6.7c-2.1 1.1-3.7 2.7-4.8 4.8L2 12l.2.5c2.8 5.4 9.4 7.6 14.8 4.8 2.1-1.1 3.7-2.7 4.8-4.8l.2-.5-.2-.5zm-9.8 6c-3.8 0-7.2-2.1-8.9-5.5C4.8 8.6 8.2 6.5 12 6.5c3.8 0 7.2 2.1 8.9 5.5a9.88 9.88 0 0 1-8.9 5.5zM12 8c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm0 7c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3c.1 1.6-1.2 2.9-2.8 3H12z' />
    </svg>
  );
};
