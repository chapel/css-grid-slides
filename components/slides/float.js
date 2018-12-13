import React from 'react';
import styled from 'styled-components';

import DemoSlide from '../demo-slide';

const css = `
  .body {
    height: 100%;
  }

  .header {
    width: 99%;
    height: 10%;
  }

  .sidebar, .content {
    float: left;
    height: 78%;
  }

  .sidebar {
    width: 20%;
  }

  .content {
    width: 78%;
  }

  .footer {
    clear: both;
    width: 99%;
    height: 10%;
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
