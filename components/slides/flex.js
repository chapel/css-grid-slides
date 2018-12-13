import React from 'react';
import styled from 'styled-components';

import DemoSlide from '../demo-slide';

const css = `
  .body {
    display: flex;
    flex-direction: column;

    height: 100%;
  }

  .header, .footer {
    height: 60px;
  }

  .main {
    display: flex;
    flex: 1;
  }

  .sidebar {
    width: 20%;
  }

  .content {
    flex: 1;
  }
`;

const html = `
  <div class="body">
    <div class="header"></div>
    <div class="main">
      <div class="sidebar"></div>
      <div class="content"></div>
    </div>
    <div class="footer"></div>
  </div>
`;

export default () => (
  <DemoSlide
    css={css}
    html={html}
  />
);
