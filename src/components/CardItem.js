import styled from "styled-components";

const CardItem = () => {
  return (
    <CardWrap>
      <CardTitle>단어</CardTitle>
      <CardContent>ㅎ1ㅎ1</CardContent>
      <CardTitle>설명</CardTitle>
      <CardContent>히히를 변형한 단어.</CardContent>
      <CardTitle>예시</CardTitle>
      <CardContent>저 친구가 초콜릿을 줬어. ㅎ1ㅎ1.</CardContent>
    </CardWrap>
  );
};

const CardWrap = styled.div`
  padding: 5px;
  background-color: white;
`;

const CardTitle = styled.div`
  font-size: 12px;
  text-decoration: underline;
`;

const CardContent = styled.div`
  margin-top: 5px;
  margin-bottom: 10px;
  font-weight: bold;
  &:last-child {
    color: #a9d0ff;
  }
`;

export default CardItem;
