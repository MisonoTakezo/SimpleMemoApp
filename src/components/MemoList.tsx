import { FC } from "react";
import styled from "styled-components";

type Props = {
  memos: string[];
  onClickDelete: (index: number) => void;
};

const MemoList: FC<Props> = (props) => {
  const { memos, onClickDelete } = props;

  return (
    <StyledContainer>
      <p>Memo List</p>
      <ul>
        {memos.map((memo, index) => (
          <li key={memo}>
            <StyledMemoWrapper>
              <p>{memo}</p>
              <StyledButton onClick={() => { onClickDelete(index) }}>
                削除
              </StyledButton>
            </StyledMemoWrapper>
          </li>
        ))}
      </ul>
    </StyledContainer>
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

export default MemoList;
