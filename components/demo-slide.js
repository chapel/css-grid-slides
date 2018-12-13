import React, { Component } from 'react';
import { Appear } from 'mdx-deck';
import styled from 'styled-components';
import { Controlled as CodeMirror } from 'react-codemirror2';
import outdent from 'outdent';
import cssParser from 'css/lib/parse';
import sanitizeHtml from 'sanitize-html';

const DemoContainer = styled.div`
  display: grid;

  width: 95vw;
  max-height: 80vh;

  grid-template-columns: auto 50%;

  column-gap: 1ch;

  text-align: left;

  .CodeMirror {
    height: inherit;
  }
`;

const View = styled.div`
  grid-row: 1/3;

  height: 100%;
  padding: 5px;

  background-color: #dedbd5;

  ${({ viewCss }) => viewCss}
  ${({ css }) => css}
`;

const CodeBlock = ({ mode, className, onChange, children }) => (
  <div className={className}>
    <CodeMirror
      value={children}
      options={{
        mode,
        theme: 'base16-dark',
        lineNumbers: false,
        // readOnly: 'nocursor'
      }}
      onBeforeChange={(editor, data, value) => onChange(value)}
    />
  </div>
);

const Css = styled(CodeBlock).attrs({
  mode: 'css'
})`
  grid-column: 2;

  max-height: 400px;
  overflow: auto;

  margin-bottom: 10px;
`;

const Html = styled(CodeBlock).attrs({
  mode: 'htmlmixed'
})`
  grid-column: 2;
`;

const baseViewCss = `
  .body, .header, .sidebar, .content, .footer {
    position: relative;

    margin: 2px;
    padding: 5px;
    color: black;
    border: 2px dashed grey;

    &:before {
      position: absolute;
      top: 5px;
      left: 5px;

      background-color: white;
    }
  }

  .body {
    margin: 0;
    padding: 0;
  }

  .header {
    color: magenta;
    border-color: magenta;

    &:before {
      content: '.header';
    }
  }

  .sidebar {
    color: blue;
    border-color: blue;

    &:before {
      content: '.sidebar';
    }
  }

  .content {
    color: green;
    border-color: green;

    &:before {
      content: '.content';
    }
  }

  .footer {
    color: maroon;
    border-color: maroon;

    &:before {
      content: '.footer';
    }
  }
`;

export default class extends Component {
  state = {
    updatedValues: {},
    parsedValues: {}
  };

  get propCss() {
    return outdent.string(this.props.css);
  }

  get propHtml() {
    return outdent.string(this.props.html);
  }

  get formattedCss() {
    return this.state.parsedValues.css || this.propCss;
  }

  get formattedHtml() {
    return this.state.parsedValues.html || this.propHtml;
  }

  get rawCss() {
    return this.state.updatedValues.css || this.propCss;
  }

  get rawHtml() {
    return this.state.updatedValues.html || this.propHtml;
  }

  handleCssUpdate = (css) => {
    const result = cssParser(css, { silent: true });
    const newParsedValues = {};

    if (!result.parsingErrors || !result.parsingErrors.length) {
      newParsedValues.css = css;
    }

    this.setState(({ updatedValues, parsedValues }) => ({
      updatedValues: {
        ...updatedValues,
        css
      },
      parsedValues: {
        ...parsedValues,
        ...newParsedValues
      }
    }));
  }

  handleHtmlUpdate = (html) => {
    const validatedHtml = sanitizeHtml(html, { allowedTags: false, allowedAttributes: false });
    const newParsedValues = {
      html: validatedHtml
    };

    this.setState(({ updatedValues, parsedValues }) => ({
      updatedValues: {
        ...updatedValues,
        html
      },
      parsedValues: {
        ...parsedValues,
        ...newParsedValues
      }
    }));
  }

  render() {
    const { viewCss = baseViewCss } = this.props;

    return (
      <DemoContainer>
        <View
          viewCss={viewCss}
          css={this.formattedCss}
          dangerouslySetInnerHTML={{
            __html: this.formattedHtml
          }}
        />
        <div>
          <Css onChange={this.handleCssUpdate}>{this.rawCss}</Css>
          <Html onChange={this.handleHtmlUpdate}>{this.rawHtml}</Html>
        </div>
      </DemoContainer>
    );
  }
}
