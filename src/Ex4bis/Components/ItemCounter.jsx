import { BsCart4 } from "react-icons/bs";
import styled from "styled-components";
import PropTypes from 'prop-types';

const DivRightAlign = styled.div`
  text-align: right;
`;

export default function ItemCounter(props) {
  const { nbItems } = props;

  return (
    <div className="card">
      <DivRightAlign className="card-body">
        <BsCart4 size={30} /> {nbItems}
      </DivRightAlign>
    </div>
  );
}

ItemCounter.propTypes = {
  nbItems: PropTypes.number.isRequired
};
