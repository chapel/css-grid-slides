import React from 'react';
import styled from 'styled-components';

import DemoSlide from '../demo-slide';

const css = `
  .body {
    display: grid;

    height: 100%;

    grid-template-columns: 20% 1fr;
    grid-template-rows: 60px 1fr 60px;
  }

  .header, .footer {
    grid-column: 1/-1;
  }
`;

const html = `
  <div class="body">
    <div class="header"></div>
    <div class="sidebar"></div>
    <div class="content"></div>
    <div class="footer"></div>
  </div>
`;

export default () => (
  <DemoSlide
    css={css}
    html={html}
  />
);
