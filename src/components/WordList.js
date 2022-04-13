import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import WordItem from "./WordItem";

const WordList = () => {
  const navigate = useNavigate();
  const word_list = useSelector((state) => state.word.list);

  return (
    <>
      <Header title={"MY DICTIONARY"} />
      {word_list.map((list, index) => (
        <WordListWrap key={index}>
          <WordItem list={list} index={index} />
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

export default WordList;
