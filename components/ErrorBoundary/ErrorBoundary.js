import PropTypes from 'prop-types';

const ErrorBoundary = (props) => {
    
  const ErrorScene = () => {
    return <h2>Something has went wrong. Please try again later.</h2>;
  };

  return (
    <>
      { props.isError === true ? <ErrorScene /> : props.children }
    </>
  );
};

export default ErrorBoundary;

ErrorBoundary.PropType = {
  isError: PropTypes.bool,
}