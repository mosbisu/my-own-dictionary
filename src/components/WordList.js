import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import WordItem from "./WordItem";

const WordList = () => {
  const navigate = useNavigate();
  const word_list = useSelector((state) => state.word.list);

  useEffect(() => {
    if (word_list.length < 4) {
      document.getElementById("add").style.cssText = `
        position: absolute;
        bottom: 20px;
        right: 20px;
      `;
    } else {
      document.getElementById("add").style.cssText = `
        position: sticky;
        bottom: 0;
        right: 0;
        left: 100%
      `;
    }
  }, [word_list]);

  return (
    <>
      <Header title={"MY DICTIONARY"} />
      {word_list.map((list, index) => (
        <WordListWrap key={index}>
          <WordItem list={list} index={index} />
        </WordListWrap>
      ))}
      <ButtonAdd id="add" onClick={() => navigate("/add")}>
        +
      </ButtonAdd>
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
  cursor: pointer;
  &:hover {
    /* transform: scale(1.1); */
    background-color: rgba(97, 0, 255, 1);
  }
`;

export default WordList;
