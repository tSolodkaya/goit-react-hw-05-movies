import css from './GoBackButton.module.css';

const GoBackButton = ({ children }) => {
  return <div className={css.goBackLink}>{children}</div>;
};

export default GoBackButton;
