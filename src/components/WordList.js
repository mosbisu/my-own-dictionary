import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import WordItem from "./WordItem";

const WordList = () => {
  const navigate = useNavigate();
  const word_list = useSelector((state) => state.word.list);

  return (
    <>
      <h3>MY DICTIONARY</h3>
      {word_list.map((list, index) => (
        <WordListWrap key={index}>
          <WordItem list={list} index={index} />
          <ButtonEdit
            onClick={() => {
              navigate(`/edit/${index}`);
            }}
          >
            수정하기
          </ButtonEdit>
        </WordListWrap>
      ))}
      <ButtonAdd onClick={() => navigate("/add")}>+</ButtonAdd>
    </>
  );
};

const WordListWrap = styled.div`
  margin-top: 10px;
`;

const ButtonAdd = styled.button`
  color: white;
  font-size: 50px;
  background-color: rgba(97, 0, 255, 0.9);
  border: none;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  position: sticky;
  left: 300px;
  bottom: 0;
  cursor: pointer;
  &:hover {
    /* transform: scale(1.1); */
    background-color: rgba(97, 0, 255, 1);
  }
`;

const ButtonEdit = styled.button`
  width: 100%;
  border: none;
  margin-bottom: 10px;
  padding: 5px;
  background-color: burlywood;
  color: black;
  cursor: pointer;
`;

export default WordList;
