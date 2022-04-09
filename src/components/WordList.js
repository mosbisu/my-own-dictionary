import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import WordItem from "./WordItem";

const WordList = () => {
  const navigate = useNavigate();

  return (
    <>
      <h3>MY DICTIONARY</h3>
      <WordItem />
      <ButtonAdd onClick={() => navigate("/Add")}>+</ButtonAdd>
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
  position: absolute;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
`;

export default WordList;