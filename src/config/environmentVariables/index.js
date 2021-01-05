/* eslint-disable import/no-dynamic-require */
const { REACT_APP_ENVIRONMENT } = process.env;

const environmentVariables = require(`./${REACT_APP_ENVIRONMENT}`).default;

export default environmentVariables;
