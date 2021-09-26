import { ChangeEvent, useState, FC } from "react";
import styled from "styled-components";

const App: FC = () => {
  const [text, setText] = useState<string>("");
  const [memos, setMemos] = useState<string[]>([]);

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onClickAdd = () => {
    const newMemos = [...memos];
    newMemos.push(text);
    setMemos(newMemos);
    setText("");
  };

  const onClickDelete = (index: number) => {
    const newMemos = [...memos];
    newMemos.splice(index, 1);
    setMemos(newMemos);
  };

  return (
    <>
      <h1>Simple Memo App</h1>
      <input type="text" value={text} onChange={onChangeText} />
      <StyledButton onClick={onClickAdd}>追加</StyledButton>
      <StyledContainer>
        <p>メモ一覧</p>
        <ul>
          {memos.map((memo, index) => (
            <li key={memo}>
              <StyledMemoWrapper>
                <p>{memo}</p>
                <StyledButton onClick={() => onClickDelete(index)}>削除</StyledButton>
              </StyledMemoWrapper>
            </li>
          ))}
        </ul>
      </StyledContainer>
    </>
  );
};


const StyledButton = styled.button`
  margin-left: 16px;
`;

const StyledContainer = styled.div`
  border: solid 1px #ccc;
  padding: 16px;
  margin: 8px;
`;

const StyledMemoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export default App;
