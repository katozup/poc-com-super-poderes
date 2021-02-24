import React from 'react';

import PropTypes from 'prop-types';

import LoadingIcon from './page-1-artboard.png';

import './_Loading.scss';

const Loading = ({ loadPrimary }) => (
  <img
    className={`global-loading ${
      loadPrimary ? 'load-primary' : 'load-secondary'
    }`}
    src={LoadingIcon}
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
