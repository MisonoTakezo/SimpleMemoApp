import { ChangeEvent, useState, useCallback, FC } from "react";
import styled from "styled-components";

// components
import MemoList from "./components/MemoList";

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

  const onClickDelete = useCallback((index: number) => {
    const newMemos = [...memos];
    newMemos.splice(index, 1);
    setMemos(newMemos);
  }, [memos]);

  return (
    <>
      <h1>Simple Memo App</h1>
      <input type="text" value={text} onChange={onChangeText} />
      <StyledButton onClick={() => onClickAdd()}>追加</StyledButton>
      <MemoList memos={memos} onClickDelete={onClickDelete} />
    </>
  );
};


const StyledButton = styled.button`
  margin-left: 16px;
`;

export default App;
