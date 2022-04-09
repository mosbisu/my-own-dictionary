import styled from "styled-components";

const WordItem = ({ list }) => {
  return (
    <WordWrap>
      <WordTitle>단어</WordTitle>
      <WordContent>{list.title}</WordContent>
      <WordTitle>설명</WordTitle>
      <WordContent>{list.detail}</WordContent>
      <WordTitle>예시</WordTitle>
      <WordContent>{list.example}</WordContent>
    </WordWrap>
  );
};

const WordWrap = styled.div`
  padding: 5px;
  margin: 10px 0;
  background-color: white;
`;

const WordTitle = styled.div`
  font-size: 12px;
  text-decoration: underline;
`;

const WordContent = styled.div`
  margin-top: 5px;
  margin-bottom: 10px;
  font-weight: bold;
  &:last-child {
    color: #a9d0ff;
  }
`;

export default WordItem;
