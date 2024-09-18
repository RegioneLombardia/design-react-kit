import { Meta } from '@storybook/react';
import React from 'react';
import { Form, FormGroup, Input, Label } from '../../src';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import It25 from 'bootstrap-lombardia/dist/js/bootstrap-lombardia.min.js';

const meta: Meta = {
  title: "Linee Guida/Call to action/Slider",
};

export default meta;

export const Slider: Story = {
  render: () => {
    return (
      <Form>
        <FormGroup>
          <Input
            id="exampleRange"
            name="range"
            type="range"
            className="form-range"
          />
        </FormGroup>
      </Form>
    );
  }
};

// export const SliderConTooltip: Story = {
//   render: () => {
//     return (
//       <div id="single-thumb" className="slider-container mt-3 mb-3">
//         <RangeSlider
//           min="0" max="100"
//           defaultValue={[0, 10]}
//           thumbsDisabled={[true, false]}
//           rangeSlideDisabled="false"
//           className="slider"
//         />
//         <div className="blobs centered">
//           <div className="blob value centered"></div>
//           <div className="blob centered"></div>
//         </div>
//         <div className="value-text centered"></div>
//       </div>
//     );
//   }
// };
//
// export const SliderExp: Story = {
//   render: () => {
//     return (
//       <RangeSlider
//         min="0" max="100"
//         defaultValue={[0, 10]}
//         thumbsDisabled={[true, false]}
//         rangeSlideDisabled="false"
//        />
//     );
//   }
// };
