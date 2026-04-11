import styled from "styled-components";

const ItemBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 15px;
`;

function MemoItem({ memo, index, onRemove }) {
  return (
    <ItemBox>
      <span>{memo}</span>
      <button onClick={() => onRemove(index)}>삭제</button>
    </ItemBox>
  );
}

export default MemoItem;