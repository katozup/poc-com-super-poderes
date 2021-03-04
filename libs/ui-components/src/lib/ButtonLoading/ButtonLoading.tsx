import React from 'react';
import PropTypes from 'prop-types';
import './_ButtonLoading.scss';

/* eslint-disable-next-line */
export interface ButtonLoadingProps {}

const ButtonLoading = ({ loadPrimary }) => (
  <img
    className={`button-loading ${
      loadPrimary ? 'load-primary' : 'load-secondary'
    }`}
    src='/shared-assets/images/loading.png'
    alt='Carregando'
  />
);

ButtonLoading.propTypes = {
  loadPrimary: PropTypes.bool,
};

ButtonLoading.defaultProps = {
  loadPrimary: true,
};

export default ButtonLoading;
