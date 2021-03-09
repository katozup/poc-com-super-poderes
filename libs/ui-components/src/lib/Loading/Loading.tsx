import React from 'react';
import PropTypes from 'prop-types';

import './_Loading.scss';

const Loading = ({ loadPrimary }) => (
  <img
    className={`global-loading ${
      loadPrimary ? 'load-primary' : 'load-secondary'
    }`}
    src='/shared-assets/img/loading.png'
    alt="Carregando"
  />
);

Loading.propTypes = {
  loadPrimary: PropTypes.bool,
};

Loading.defaultProps = {
  loadPrimary: true,
};

export default Loading;
