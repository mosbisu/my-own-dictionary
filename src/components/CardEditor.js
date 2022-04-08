import styled from "styled-components";

const CardEditor = () => {
  return (
    <>
      <h3>단어 추가하기</h3>
      <CardWrap>
        <CardTitle>단어</CardTitle>
        <CardInput>
          <input type="text" />
        </CardInput>
      </CardWrap>
      <CardWrap>
        <CardTitle>설명</CardTitle>
        <CardInput>
          <input type="text" />
        </CardInput>
      </CardWrap>
      <CardWrap>
        <CardTitle>예시</CardTitle>
        <CardInput>
          <input type="text" />
        </CardInput>
      </CardWrap>
    </>
  );
};

const CardWrap = styled.div`
  padding: 10px;
  background-color: white;
  margin: 10px 0;
`;

const CardTitle = styled.div`
  font-size: 12px;
  text-decoration: underline;
`;

const CardInput = styled.div`
  margin-top: 5px;
  margin-bottom: 10px;
  font-weight: bold;
  border: 1px solid black;
  line-height: 2;
  & > input {
    border: none;
    outline: none;
  }
`;

export default CardEditor;
