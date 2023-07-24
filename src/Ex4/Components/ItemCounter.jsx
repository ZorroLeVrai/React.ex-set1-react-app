import { BsCart4 } from "react-icons/bs";
import styled from "styled-components";

const DivRightAlign = styled.div`
  text-align: right;
`;

export default function ItemCounter(props) {
  const { nbItems } = props;

  return (
    <div class="card">
      <DivRightAlign class="card-body">
        <BsCart4 size={30} /> {nbItems}
      </DivRightAlign>
    </div>
  );
}
