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
        <WordItem key={index} list={list} />
      ))}
      <ButtonAdd onClick={() => navigate("/add")}>+</ButtonAdd>
    </>
  );
};

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

export default WordList;
