import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { addWordFB } from "../redux/modules/word";

const WordEditor = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const title = useRef("");
  const detail = useRef("");
  const example = useRef("");

  const addWord = () => {
    if (title.current.value === "") {
      alert("단어를 입력하세요!");
      return;
    }
    if (detail.current.value === "") {
      alert("설명을 입력하세요!");
      return;
    }
    if (example.current.value === "") {
      alert("예시를 입력하세요!");
      return;
    }

    dispatch(
      addWordFB({
        title: title.current.value,
        detail: detail.current.value,
        example: example.current.value,
      })
    );

    navigate(-1);
  };

  return (
    <>
      <h3>단어 추가하기</h3>
      <WordWrap>
        <WordTitle>단어</WordTitle>
        <WordInput ref={title} />
      </WordWrap>
      <WordWrap>
        <WordTitle>설명</WordTitle>
        <WordInput ref={detail} />
      </WordWrap>
      <WordWrap>
        <WordTitle>예시</WordTitle>
        <WordInput ref={example} />
      </WordWrap>
      <ButtonAdd
        onClick={() => {
          addWord();
        }}
      >
        추가하기
      </ButtonAdd>
    </>
  );
};

const WordWrap = styled.div`
  padding: 10px;
  background-color: white;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const WordTitle = styled.div`
  font-size: 12px;
  text-decoration: underline;
`;

const WordInput = styled.input`
  margin-top: 5px;
  margin-bottom: 10px;
  border: 1px solid black;
  line-height: 2.5;
  outline: none;
  width: 100%;
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

export default WordEditor;
