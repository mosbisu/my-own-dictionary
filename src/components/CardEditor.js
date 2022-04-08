import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const CardEditor = () => {
  const navigate = useNavigate();

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
      <ButtonAdd onClick={() => navigate(-1)}>추가하기</ButtonAdd>
    </>
  );
};

const CardWrap = styled.div`
  padding: 10px;
  background-color: white;
  margin-top: 10px;
  margin-bottom: 20px;
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
  input {
    border: none;
    outline: none;
  }
`;

const ButtonAdd = styled.button`
  padding: 10px;
  margin-top: 20px;
  font-size: 14px;
  width: 100%;
  color: white;
  background-color: #6100ff;
  border: none;
  cursor: pointer;
`;

export default CardEditor;
