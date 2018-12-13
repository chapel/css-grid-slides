if (typeof document !== 'undefined') {
  require('style-loader!css-loader!codemirror/lib/codemirror.css');
  require('style-loader!css-loader!codemirror/theme/base16-dark.css');
  require('codemirror/mode/css/css');
  require('codemirror/mode/htmlmixed/htmlmixed');
}
