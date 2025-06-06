import * as React from 'react';
import { SVGProps } from 'react';
import { SVGRProps } from '.';
export const component = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => {
  return (
    <svg
      width={24}
      height={24}
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d='M 6,4 4,9 a 2.0000001,2.0000001 0 0 0 -2,2 v 6 h 1 v 2.5 H 6.4999999 V 17 H 17.5 v 2.5 h 3.599609 V 17 H 22 V 11 A 2.0000001,2.0000001 0 0 0 20,9 L 18,4 H 17 Z M 6.5996094,5 H 17.40039 L 19,9 H 5 Z M 5.25,12 A 1.25,1.25 0 0 1 6.4999999,13.25 1.25,1.25 0 0 1 5.25,14.5 1.25,1.25 0 0 1 4,13.25 1.25,1.25 0 0 1 5.25,12 Z m 4.0000001,0 H 14.75 A 1.25,1.25 0 0 1 16,13.25 1.25,1.25 0 0 1 14.75,14.5 H 9.2500001 A 1.25,1.25 0 0 1 7.9999999,13.25 1.25,1.25 0 0 1 9.2500001,12 Z M 18.75,12 A 1.25,1.25 0 0 1 20,13.25 1.25,1.25 0 0 1 18.75,14.5 1.25,1.25 0 0 1 17.5,13.25 1.25,1.25 0 0 1 18.75,12 Z' />
    </svg>
  );
};
