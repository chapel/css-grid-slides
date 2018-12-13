import React from 'react';
import styled from 'styled-components';

import DemoSlide from '../demo-slide';

const css = `
  .body {
    display: grid;

    height: 100%;

    grid-template-columns: 20% 1fr;
    grid-template-rows: 60px 1fr 60px;

    grid-template-areas:
      "header header"
      "sidebar content"
      "footer footer";
  }

  // Would normally use media queries for this
  .mobile {
    grid-template-columns: 1fr;
    grid-template-rows: 60px 20% 1fr 60px;

    grid-template-areas:
      "header"
      "sidebar"
      "content"
      "footer";
  }

  .header {
    grid-area: header;
  }

  .sidebar {
    grid-area: sidebar;
  }

  .content {
    grid-area: content;
  }

  .footer {
    grid-area: footer;
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
