import PropTypes from 'prop-types';

import css from './NoInfo.module.css';

const NoInfo = ({ message }) => {
  return <span className={css.noinfo}>{message}</span>;
};

NoInfo.propTypes = {
  message: PropTypes.string.isRequired,
};

export default NoInfo;
