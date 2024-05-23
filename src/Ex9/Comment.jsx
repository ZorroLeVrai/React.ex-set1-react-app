import PropTypes from 'prop-types';

const Comment = ({id, name}) => {
  return (
    <div className="m-2">
      <div>Id: {id}</div>
      <div>Name: {name}</div>
    </div>
  )
};

Comment.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
};

export default Comment;