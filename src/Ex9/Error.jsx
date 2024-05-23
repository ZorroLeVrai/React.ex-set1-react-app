import PropTypes from 'prop-types';

const Error = ({id, error}) => {
  return (
    <div className="m-2">
      <div>Id: {id}</div>
      <div>Error: {error}</div>
    </div>
  )
};

Error.propTypes = {
  id: PropTypes.number.isRequired,
  error: PropTypes.string.isRequired
};

export default Error;