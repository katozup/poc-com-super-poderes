/* eslint-disable jsx-a11y/no-autofocus */
import PropTypes from 'prop-types';
import './_BtnBack.scss';

const clickHandler = (onClick) => {
  const { actionFunction, actionParameter } = onClick;
  actionFunction(actionParameter);
};

const BtnBack = ({ onClick, alt, iconName }) => (
  <button
    autoFocus
    aria-label={alt}
    onClick={() => clickHandler(onClick)}
    type="button"
    className="button-back"
  >
    {/* <i className={`icon ${iconName}`} /> */}
    <span className="icon">{iconName}</span>
  </button>
);

BtnBack.propTypes = {
  alt: PropTypes.string,
  iconName: PropTypes.string,
};

BtnBack.defaultProps = {
  alt: 'voltar',
  iconName: '',
};

export default BtnBack;
