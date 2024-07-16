import PropTypes from 'prop-types';

export default function SelectedCity({ city }) {
  const noCityMsg = "No city selected";

  return (
    <div>
      <div>Selected City:</div>
      <div className="badge bg-primary fs-5">{city ? city : noCityMsg}</div>
    </div>
  );
}

SelectedCity.propTypes = {
  city: PropTypes.string.isRequired
};
