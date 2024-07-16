import PropTypes from 'prop-types';

export default function ListGroupItem(props) {
  const { text, highlighted, onClickHandler } = props;
  const classNameContent = highlighted
    ? "list-group-item active"
    : "list-group-item";
  return (
    <li className={classNameContent} onClick={onClickHandler}>
      {text}
    </li>
  );
}

ListGroupItem.propTypes = {
  text: PropTypes.string.isRequired,
  highlighted: PropTypes.bool.isRequired,
  onClickHandler: PropTypes.func.isRequired
};
