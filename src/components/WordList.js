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
              navigate(`/detail/${index}`);
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
  background-color: #6100ff;
  border: none;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  position: sticky;
  bottom: 0;
  left: 300px;
  cursor: pointer;
`;

const ButtonEdit = styled.button`
  width: 100%;
  border: none;
  margin-bottom: 10px;
  padding: 5px;
  cursor: pointer;
`;

export default WordList;
