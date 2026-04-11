import { useState } from "react";
import styled from "styled-components";

const InsertForm = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

function MemoInsert({ onInsert }) {
  const [value, setValue] = useState("");

  const onSubmit = () => {
    if (value.trim() === "") return;
    onInsert(value);
    setValue("");
  };

  return (
    <InsertForm>
      <input 
        value={value} 
        onChange={(e) => setValue(e.target.value)} 
        placeholder="메모를 입력하세요" 
      />
      <button onClick={onSubmit}>추가</button>
    </InsertForm>
  );
}

export default MemoInsert;