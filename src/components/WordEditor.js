import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { addWordFB, deleteWordFB, updateWordFB } from "../redux/modules/word";

const WordEditor = ({ isDetail }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const word_list = useSelector((state) => state.word.list);
  const title = useRef("");
  const detail = useRef("");
  const example = useRef("");
  const index = useParams();
  const word_index = index.index;

  useEffect(() => {
    if (isDetail) {
      title.current.value = word_list[word_index]
        ? word_list[word_index].title
        : "";
      detail.current.value = word_list[word_index]
        ? word_list[word_index].detail
        : "";
      example.current.value = word_list[word_index]
        ? word_list[word_index].example
        : "";
    }
  }, [word_list, isDetail, word_index]);

  const addUpdateWord = () => {
    if (window.confirm(isDetail ? "수정하시겠습니까?" : "추가하겠습니까?")) {
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

      isDetail
        ? dispatch(
            updateWordFB(
              word_list[word_index].id,
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
            })
          );

      navigate(-1);
    }
  };

  const deleteWord = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      dispatch(deleteWordFB(word_list[word_index].id));
      navigate(-1);
    }
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
      <ButtonAdd onClick={addUpdateWord}>
        {isDetail ? "수정하기" : "추가하기"}
      </ButtonAdd>
      {isDetail && <ButtonDelete onClick={deleteWord}>삭제하기</ButtonDelete>}
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

const ButtonDelete = styled.button`
  padding: 10px;
  margin-top: 10px;
  font-size: 14px;
  width: 100%;
  color: white;
  background-color: red;
  border: none;
  cursor: pointer;
`;

export default WordEditor;
