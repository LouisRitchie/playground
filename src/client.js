import React from 'react';
import ReactDOM from 'react-dom';

import One from './one';
import Two from './two';

ReactDOM.render(
  <>
    <One />
    <Two />
  </>,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept();
}
