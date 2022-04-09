import styled from "styled-components";

const WordItem = () => {
  return (
    <WordWrap>
      <WordTitle>단어</WordTitle>
      <WordContent>ㅎ1ㅎ1</WordContent>
      <WordTitle>설명</WordTitle>
      <WordContent>히히를 변형한 단어.</WordContent>
      <WordTitle>예시</WordTitle>
      <WordContent>저 친구가 초콜릿을 줬어. ㅎ1ㅎ1.</WordContent>
    </WordWrap>
  );
};

const WordWrap = styled.div`
  padding: 5px;
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
