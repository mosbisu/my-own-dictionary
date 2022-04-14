import { serverTimestamp } from "firebase/firestore";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { addWordFB, updateWordFB } from "../redux/modules/word";
import Header from "./Header";

const WordEditor = ({ isEdit }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const word_list = useSelector((state) => state.word.list);
  const title = useRef("");
  const detail = useRef("");
  const example = useRef("");
  const { index } = useParams();

  useEffect(() => {
    if (isEdit) {
      title.current.value = word_list[index] ? word_list[index].title : "";
      detail.current.value = word_list[index] ? word_list[index].detail : "";
      example.current.value = word_list[index] ? word_list[index].example : "";
    }
  }, [word_list, isEdit, index]);

  const addUpdateWord = () => {
    if (window.confirm(isEdit ? "수정하시겠습니까?" : "추가하겠습니까?")) {
      if (title.current.value === "") {
        alert("단어를 입력하세요!");
        title.current.focus();
        return;
      }
      if (detail.current.value === "") {
        alert("설명을 입력하세요!");
        detail.current.focus();
        return;
      }
      if (example.current.value === "") {
        alert("예시를 입력하세요!");
        example.current.focus();
        return;
      }

      isEdit
        ? dispatch(
            updateWordFB(
              word_list[index].id,
              title.current.value,
              detail.current.value,
              example.current.value
            )
          )
        : dispatch(
            addWordFB({
              title: title.current.value,
              detail: detail.current.value,
              example: example.current.value,
              date: serverTimestamp(),
            })
          );

      navigate(-1);
    }
  };

  return (
    <>
      <Header title={isEdit ? "단어 수정하기" : "단어 추가하기"} />
      <WordEditorWrap>
        <WordTitle>단어</WordTitle>
        <WordInput ref={title} />
      </WordEditorWrap>
      <WordEditorWrap>
        <WordTitle>설명</WordTitle>
        <WordInput ref={detail} />
      </WordEditorWrap>
      <WordEditorWrap>
        <WordTitle>예시</WordTitle>
        <WordInput ref={example} />
      </WordEditorWrap>
      <ButtonAdd onClick={addUpdateWord}>
        {isEdit ? "수정하기" : "추가하기"}
      </ButtonAdd>
    </>
  );
};

const WordEditorWrap = styled.div`
  padding: 10px;
  background-color: white;
  margin-top: 10px;
  margin-bottom: 20px;
  border-radius: 10px;
`;

const WordTitle = styled.div`
  font-size: 12px;
  text-decoration: underline;
`;

const WordInput = styled.input`
  margin: 5px 0;
  border: 1px solid black;
  border-radius: 5px;
  line-height: 2.5;
  outline: none;
  width: 100%;
  padding-left: 5px;
`;

const ButtonAdd = styled.button`
  padding: 10px;
  margin-top: 10px;
  font-size: 14px;
  font-weight: bold;
  width: 100%;
  color: white;
  border-radius: 20px;
  background-color: blue;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: darkblue;
  }
`;

export default WordEditor;
