import { Meta } from '@storybook/react-vite';
import React from 'react';
import { Col, Row } from '../../src';

const meta: Meta = {
  title: "Linee Guida/Utilità/Colori",
};

export default meta;

export const Colori = () => (
  <Row>
    <Col xs='12' md='4'>
      <div className="primary-bg p-3"><span className="white-color">Testo bianco su background primario</span></div>
      <div className="primary-border-color border p-3"><span className="primary-color">Testo e bordo primario</span></div><br/>
    </Col>
    <Col xs='12' md='4'>
      <div className="primary-blue-bg p-3"><span className="white-color">Testo bianco su blu primario</span></div>
      <div className="primary-blue-border-color border p-3"><span className="primary-blue-color">Testo e bordo blu primario</span></div><br/>
    </Col>
    <Col xs='12' md='4'>
      <div className="primary-gray-bg p-3"><span className="white-color">Testo bianco su grigio primario</span></div>
      <div className="primary-gray-border-color border p-3"><span className="primary-gray-color">Testo e bordo grigio primario</span></div>
    </Col>
  </Row>
);

export const VariantiColorePrincipale = () => (
  <div className='bd-example-border-utils'>
    <Row>
      <Col xs='12' md='4' xxl='3'>
        <p>Tinte e ombre</p>
        <div className="c-line primary-bg-a1"><div className="d-flex justify-content-between"><div>a1</div><div className="text-end">#D5EBD8</div></div></div>
        <div className="c-line primary-bg-a2"><div className="d-flex justify-content-between"><span>a2</span><span className="text-end">#BEE0C3</span></div></div>
        <div className="c-line primary-bg-a3"><div className="d-flex justify-content-between"><span>a3</span><span className="text-end">#95D09D</span></div></div>
        <div className="c-line primary-bg-a4"><div className="d-flex justify-content-between"><span>a4</span><span className="text-end">#71C583</span></div></div>
        <div className="c-line primary-bg-a5"><div className="d-flex justify-content-between"><span>a5</span><span className="text-end">#47B66D</span></div></div>
        <div className="c-line white-color primary-bg-a6"><div className="d-flex justify-content-between"><span>a6</span><span className="text-end">#00AF5D</span></div></div>
        <div className="c-line white-color primary-bg-a7"><div className="d-flex justify-content-between"><span>a7</span><span className="text-end">#00A747</span></div></div>
        <div className="c-line white-color primary-bg-a8"><div className="d-flex justify-content-between"><span>a8</span><span className="text-end">#009647</span></div></div>
        <div className="c-line white-color primary-bg-a9"><div className="d-flex justify-content-between"><span>a9</span><span className="text-end">#008342</span></div></div>
        <div className="c-line white-color primary-bg-a10"><div className="d-flex justify-content-between"><span>a10</span><span className="text-end">#006A3B</span></div></div>
        <div className="c-line white-color primary-bg-a11"><div className="d-flex justify-content-between"><span>a11</span><span className="text-end">#005A30</span></div></div>
        <div className="c-line white-color primary-bg-a12"><div className="d-flex justify-content-between"><span>a12</span><span className="text-end">#004626</span></div></div>
      </Col>
      <Col xs='12' md='4' xxl='3'>
        <p>Toni</p>
        <div className="c-line primary-bg-b1 white-color"><div className="d-flex justify-content-between"><span>b1</span><span className="text-end">#00A747</span></div></div>
        <div className="c-line primary-bg-b2 white-color"><div className="d-flex justify-content-between"><span>b2</span><span className="text-end">#009644</span></div></div>
        <div className="c-line primary-bg-b3 white-color"><div className="d-flex justify-content-between"><span>b3</span><span className="text-end">#008242</span></div></div>
        <div className="c-line primary-bg-b4 white-color"><div className="d-flex justify-content-between"><span>b4</span><span className="text-end">#006C3B</span></div></div>
        <div className="c-line primary-bg-b5 white-color"><div className="d-flex justify-content-between"><span>b5</span><span className="text-end">#005834</span></div></div>
        <div className="c-line primary-bg-b6 white-color"><div className="d-flex justify-content-between"><span>b6</span><span className="text-end">#10442B</span></div></div>
        <div className="c-line primary-bg-b7 white-color"><div className="d-flex justify-content-between"><span>b7</span><span className="text-end">#143120</span></div></div>
        <div className="c-line primary-bg-b8 white-color"><div className="d-flex justify-content-between"><span>b8</span><span className="text-end">#122017</span></div></div>
      </Col>
      <Col xs='12' md='4' xxl='3'>
        <p>Variazione di saturazione</p>
        <div className="c-line primary-bg-c1"><div className="d-flex justify-content-between"><span>c1</span><span className="text-end">#F2F9F2</span></div></div>
        <div className="c-line primary-bg-c2"><div className="d-flex justify-content-between"><span>c2</span><span className="text-end">#F0F7EE</span></div></div>
        <div className="c-line primary-bg-c3"><div className="d-flex justify-content-between"><span>c3</span><span className="text-end">#E0EEDE</span></div></div>
        <div className="c-line primary-bg-c4"><div className="d-flex justify-content-between"><span>c4</span><span className="text-end">#C9E1C7</span></div></div>
        <div className="c-line primary-bg-c5"><div className="d-flex justify-content-between"><span>c5</span><span className="text-end">#B1D6B0</span></div></div>
        <div className="c-line primary-bg-c6"><div className="d-flex justify-content-between"><span>c6</span><span className="text-end">#A4CEA7</span></div></div>
        <div className="c-line primary-bg-c7"><div className="d-flex justify-content-between"><span>c7</span><span className="text-end">#8BC38F</span></div></div>
        <div className="c-line primary-bg-c8"><div className="d-flex justify-content-between"><span>c8</span><span className="text-end">#77BA7B</span></div></div>
        <div className="c-line primary-bg-c9"><div className="d-flex justify-content-between"><span>c9</span><span className="text-end">#64B56C</span></div></div>
        <div className="c-line primary-bg-c10"><div className="d-flex justify-content-between"><span>c10</span><span className="text-end">#4FAD58</span></div></div>
        <div className="c-line white-color primary-bg-c11"><div className="d-flex justify-content-between"><span>c11</span><span className="text-end">#469B54</span></div></div>
        <div className="c-line white-color primary-bg-c12"><div className="d-flex justify-content-between"><span>c12</span><span className="text-end">#357A46</span></div></div>
      </Col>
    </Row>
  </div>
);

export const ColoriNeutrali = () => (
   <Row>
    <Col xs='12' md='4'>
      <div className="neutral-1-bg p-3"><span className="white-color">Testo bianco su background neutro 1</span></div>
      <div className="neutral-1-border-color border p-3"><span className="neutral-1-color">Testo e bordo neutro 1</span></div><br/>
    </Col>
    <Col xs='12' md='4'>
      <div className="neutral-2-bg p-3">Testo su background neutro 2</div>
      <div className="neutral-1-bg neutral-2-border-color border p-3"><span className="neutral-2-color">Testo e bordo neutro 2</span></div><br/>
    </Col>
    <Col xs='12' md='4'>
      <div className="neutral-3-bg p-3">Testo su background neutro 3</div>
      <div className="neutral-1-bg neutral-3-border-color border p-3"><span className="neutral-3-color">Testo e bordo neutro 3</span></div><br/>
    </Col>
  </Row>
);

export const VariantiColoriNeutrali = () => (
   <Row>
     <Col xs='12' md='3'>
      <div className="c-line neutral-1-bg-a1"><div className="d-flex justify-content-between"><div>a1</div><div className="text-end">#E1E7EA</div></div></div>
      <div className="c-line neutral-1-bg-a2"><div className="d-flex justify-content-between"><div>a2</div><div className="text-end">#CDCFD6</div></div></div>
      <div className="c-line neutral-1-bg-a3"><div className="d-flex justify-content-between"><div>a3</div><div className="text-end">#A7B7CE</div></div></div>
      <div className="c-line neutral-1-bg-a4"><div className="d-flex justify-content-between"><div>a4</div><div className="text-end">#8FA3B1</div></div></div>
      <div className="c-line white-color neutral-1-bg-a5"><div className="d-flex justify-content-between"><div>a5</div><div className="text-end">#778B9B</div></div></div>
      <div className="c-line white-color neutral-1-bg-a6"><div className="d-flex justify-content-between"><div>a6</div><div className="text-end">#5C7789</div></div></div>
      <div className="c-line white-color neutral-1-bg-a7"><div className="d-flex justify-content-between"><div>a7</div><div className="text-end">#406478</div></div></div>
      <div className="c-line white-color neutral-1-bg-a8"><div className="d-flex justify-content-between"><div>a8</div><div className="text-end">#2A5166</div></div></div>
      <div className="c-line white-color neutral-1-bg-a9"><div className="d-flex justify-content-between"><div>a9</div><div className="text-end">#103D57</div></div></div>
      <div className="c-line white-color neutral-1-bg-a10"><div className="d-flex justify-content-between"><div>a10</div><div className="text-end">#002C47</div></div></div>
    </Col>
    <Col xs='12' md='3'>
      <div className="c-line neutral-2-bg-b1"><div className="d-flex justify-content-between"><div>b1</div><div className="text-end">#DFE2EF</div></div></div>
      <div className="c-line white-color neutral-2-bg-b2"><div className="d-flex justify-content-between"><div>b2</div><div className="text-end">#B1B9C8</div></div></div>
      <div className="c-line white-color neutral-2-bg-b3"><div className="d-flex justify-content-between"><div>b3</div><div className="text-end">#87BE9C</div></div></div>
      <div className="c-line white-color neutral-2-bg-b4"><div className="d-flex justify-content-between"><div>b4</div><div className="text-end">#676A75</div></div></div>
      <div className="c-line white-color neutral-2-bg-b5"><div className="d-flex justify-content-between"><div>b5</div><div className="text-end">#424A4F</div></div></div>
      <div className="c-line white-color neutral-2-bg-b6"><div className="d-flex justify-content-between"><div>b6</div><div className="text-end">#272B2E</div></div></div>
      <div className="c-line white-color neutral-2-bg-b7"><div className="d-flex justify-content-between"><div>b7</div><div className="text-end">#141719</div></div></div>
    </Col>
  </Row>
);

export const VariantiColoriTriadici = () => (
  <Row>
    <Col md='2'>
      <div className="c-line complementary-1-bg-a1"><div className="d-flex justify-content-between"><div>a1</div><div className="text-end">#EBA8AA</div></div></div>
      <div className="c-line complementary-1-bg-a2"><div className="d-flex justify-content-between"><div>a2</div><div className="text-end">#E68E95</div></div></div>
      <div className="c-line white-color complementary-1-bg-a3"><div className="d-flex justify-content-between"><div>a3</div><div className="text-end">#E3767C</div></div></div>
      <div className="c-line white-color complementary-1-bg-a4"><div className="d-flex justify-content-between"><div>a4</div><div className="text-end">#DE5F63</div></div></div>
      <div className="c-line white-color complementary-1-bg-a5"><div className="d-flex justify-content-between"><div>a5</div><div className="text-end">#DD4848</div></div></div>
      <div className="c-line white-color complementary-1-bg-a6"><div className="d-flex justify-content-between"><div>a6</div><div className="text-end">#D93831</div></div></div>
      <div className="c-line white-color complementary-1-bg-a7"><div className="d-flex justify-content-between"><div>a7</div><div className="text-end">#C03330</div></div></div>
      <div className="c-line white-color complementary-1-bg-a8"><div className="d-flex justify-content-between"><div>a8</div><div className="text-end">#A6302C</div></div></div>
      <div className="c-line white-color complementary-1-bg-a9"><div className="d-flex justify-content-between"><div>a9</div><div className="text-end">#8D2622</div></div></div>
      <div className="c-line white-color complementary-1-bg-a10"><div className="d-flex justify-content-between"><div>a10</div><div className="text-end">#731E1B</div></div></div>
      <div className="c-line white-color complementary-1-bg-a11"><div className="d-flex justify-content-between"><div>a11</div><div className="text-end">#551313</div></div></div>
      <div className="c-line white-color complementary-1-bg-a12"><div className="d-flex justify-content-between"><div>a12</div><div className="text-end">#261010</div></div></div>
    </Col>
    <Col md='2'>
      <div className="c-line white-color complementary-1-bg-b1"><div className="d-flex justify-content-between"><div>b1</div><div className="text-end">#DD425F</div></div></div>
      <div className="c-line white-color complementary-1-bg-b2"><div className="d-flex justify-content-between"><div>b2</div><div className="text-end">#DC4F63</div></div></div>
      <div className="c-line white-color complementary-1-bg-b3"><div className="d-flex justify-content-between"><div>b3</div><div className="text-end">#C5596B</div></div></div>
      <div className="c-line white-color complementary-1-bg-b4"><div className="d-flex justify-content-between"><div>b4</div><div className="text-end">#AD5E6B</div></div></div>
      <div className="c-line white-color complementary-1-bg-b5"><div className="d-flex justify-content-between"><div>b5</div><div className="text-end">#925D66</div></div></div>
      <div className="c-line white-color complementary-1-bg-b6"><div className="d-flex justify-content-between"><div>b6</div><div className="text-end">#785A5D</div></div></div>
      <div className="c-line white-color complementary-1-bg-b7"><div className="d-flex justify-content-between"><div>b7</div><div className="text-end">#5D5151</div></div></div>
      <div className="c-line white-color complementary-1-bg-b8"><div className="d-flex justify-content-between"><div>b8</div><div className="text-end">#444143</div></div></div>
    </Col>
    <Col md='2'>
      <div className="c-line complementary-2-bg-a1"><div className="d-flex justify-content-between"><div>a1</div><div className="text-end">#F9E2BF</div></div></div>
      <div className="c-line complementary-2-bg-a2"><div className="d-flex justify-content-between"><div>a2</div><div className="text-end">#F8D29A</div></div></div>
      <div className="c-line white-color complementary-2-bg-a3"><div className="d-flex justify-content-between"><div>a3</div><div className="text-end">#F3C175</div></div></div>
      <div className="c-line white-color complementary-2-bg-a4"><div className="d-flex justify-content-between"><div>a4</div><div className="text-end">#F0AF4F</div></div></div>
      <div className="c-line white-color complementary-2-bg-a5"><div className="d-flex justify-content-between"><div>a5</div><div className="text-end">#EDA140</div></div></div>
      <div className="c-line white-color complementary-2-bg-a6"><div className="d-flex justify-content-between"><div>a6</div><div className="text-end">#EA923E</div></div></div>
      <div className="c-line white-color complementary-2-bg-a7"><div className="d-flex justify-content-between"><div>a7</div><div className="text-end">#D67F3A</div></div></div>
      <div className="c-line white-color complementary-2-bg-a8"><div className="d-flex justify-content-between"><div>a8</div><div className="text-end">#B26A35</div></div></div>
      <div className="c-line white-color complementary-2-bg-a9"><div className="d-flex justify-content-between"><div>a9</div><div className="text-end">#8C552C</div></div></div>
      <div className="c-line white-color complementary-2-bg-a10"><div className="d-flex justify-content-between"><div>a10</div><div className="text-end">#624020</div></div></div>
      <div className="c-line white-color complementary-2-bg-a11"><div className="d-flex justify-content-between"><div>a11</div><div className="text-end">#3D2813</div></div></div>
      <div className="c-line white-color complementary-2-bg-a12"><div className="d-flex justify-content-between"><div>a12</div><div className="text-end">#1E150E</div></div></div>
    </Col>
    <Col md='2'>
      <div className="c-line white-color complementary-2-bg-a6"><div className="d-flex justify-content-between"><div>a6</div><div className="text-end">#EA923E</div></div></div>
      <div className="c-line white-color complementary-2-bg-b1"><div className="d-flex justify-content-between"><div>b1</div><div className="text-end">#E4953E</div></div></div>
      <div className="c-line white-color complementary-2-bg-b2"><div className="d-flex justify-content-between"><div>b2</div><div className="text-end">#CA8C3E</div></div></div>
      <div className="c-line white-color complementary-2-bg-b3"><div className="d-flex justify-content-between"><div>b3</div><div className="text-end">#B4803C</div></div></div>
      <div className="c-line white-color complementary-2-bg-b4"><div className="d-flex justify-content-between"><div>b4</div><div className="text-end">#9A743C</div></div></div>
      <div className="c-line white-color complementary-2-bg-b5"><div className="d-flex justify-content-between"><div>b5</div><div className="text-end">#81653E</div></div></div>
      <div className="c-line white-color complementary-2-bg-b6"><div className="d-flex justify-content-between"><div>b6</div><div className="text-end">#66583C</div></div></div>
      <div className="c-line white-color complementary-2-bg-b7"><div className="d-flex justify-content-between"><div>b7</div><div className="text-end">#4D4236</div></div></div>
      <div className="c-line white-color complementary-2-bg-b8"><div className="d-flex justify-content-between"><div>b8</div><div className="text-end">#342E2A</div></div></div>
    </Col>
    <Col md='2'>
      <div className="c-line complementary-3-bg-a1"><div className="d-flex justify-content-between"><div>a1</div><div className="text-end">#DFEEDE</div></div></div>
      <div className="c-line complementary-3-bg-a2"><div className="d-flex justify-content-between"><div>a2</div><div className="text-end">#CEE4CB</div></div></div>
      <div className="c-line white-color complementary-3-bg-a3"><div className="d-flex justify-content-between"><div>a3</div><div className="text-end">#B1D4A9</div></div></div>
      <div className="c-line white-color complementary-3-bg-a4"><div className="d-flex justify-content-between"><div>a4</div><div className="text-end">#99C992</div></div></div>
      <div className="c-line white-color complementary-3-bg-a5"><div className="d-flex justify-content-between"><div>a5</div><div className="text-end">#7DBC7B</div></div></div>
      <div className="c-line white-color complementary-3-bg-a6"><div className="d-flex justify-content-between"><div>a6</div><div className="text-end">#64B56C</div></div></div>
      <div className="c-line white-color complementary-3-bg-a7"><div className="d-flex justify-content-between"><div>a7</div><div className="text-end">#4FAD58</div></div></div>
      <div className="c-line white-color complementary-3-bg-a8"><div className="d-flex justify-content-between"><div>a8</div><div className="text-end">#479E56</div></div></div>
      <div className="c-line white-color complementary-3-bg-a9"><div className="d-flex justify-content-between"><div>a9</div><div className="text-end">#3E8B4E</div></div></div>
      <div className="c-line white-color complementary-3-bg-a10"><div className="d-flex justify-content-between"><div>a10</div><div className="text-end">#337545</div></div></div>
      <div className="c-line white-color complementary-3-bg-a11"><div className="d-flex justify-content-between"><div>a11</div><div className="text-end">#2A6339</div></div></div>
      <div className="c-line white-color complementary-3-bg-a12"><div className="d-flex justify-content-between"><div>a12</div><div className="text-end">#214D2B</div></div></div>
    </Col>
    <Col md='2'>
      <div className="c-line white-color complementary-3-bg-b1"><div className="d-flex justify-content-between"><div>b1</div><div className="text-end">#4FAD58</div></div></div>
      <div className="c-line white-color complementary-3-bg-b2"><div className="d-flex justify-content-between"><div>b2</div><div className="text-end">#489F54</div></div></div>
      <div className="c-line white-color complementary-3-bg-b3"><div className="d-flex justify-content-between"><div>b3</div><div className="text-end">#3F8A4F</div></div></div>
      <div className="c-line white-color complementary-3-bg-b4"><div className="d-flex justify-content-between"><div>b4</div><div className="text-end">#3D7546</div></div></div>
      <div className="c-line white-color complementary-3-bg-b5"><div className="d-flex justify-content-between"><div>b5</div><div className="text-end">#33603D</div></div></div>
      <div className="c-line white-color complementary-3-bg-b6"><div className="d-flex justify-content-between"><div>b6</div><div className="text-end">#2B4C31</div></div></div>
      <div className="c-line white-color complementary-3-bg-b7"><div className="d-flex justify-content-between"><div>b7</div><div className="text-end">#223826</div></div></div>
      <div className="c-line white-color complementary-3-bg-b8"><div className="d-flex justify-content-between"><div>b8</div><div className="text-end">#172418</div></div></div>
    </Col>
  </Row>
);
