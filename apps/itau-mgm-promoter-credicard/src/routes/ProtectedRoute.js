/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React from 'react';
import { Route } from 'react-router-dom';

import PropTypes from 'prop-types';

const ProtectedRoute = ({
  canActivate,
  redirectionRoute,
  component: Component,
  ...props
}) => {
  return (
    <Route
      {...props}
      render={props =>
        canActivate ? (
          <Component {...props} />
        ) : (
          props.history.push(redirectionRoute)
        )
      }
    />
  );
};

ProtectedRoute.propTypes = {
  canActivate: PropTypes.bool.isRequired,
  redirectionRoute: PropTypes.string.isRequired,
  redirectionParams: PropTypes.string,
  component: PropTypes.elementType.isRequired,
  props: PropTypes.shape(),
};

ProtectedRoute.defaultProps = {
  redirectionParams: '',
  props: {},
};

export default ProtectedRoute;
