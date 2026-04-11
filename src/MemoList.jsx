import styled from "styled-components";
import MemoItem from "./MemoItem";

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

function MemoList({ memos, onRemove }) {
  return (
    <ListWrapper>
      {memos.map((memo, index) => (
        <MemoItem 
          key={index} 
          memo={memo} 
          index={index} 
          onRemove={onRemove} 
        />
      ))}
    </ListWrapper>
  );
}

export default MemoList;