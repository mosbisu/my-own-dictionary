import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { deleteWordFB } from "../redux/modules/word";
import { useDispatch, useSelector } from "react-redux";

const WordItem = ({ list, index }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const word_list = useSelector((state) => state.word.list);

  const deleteWord = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      dispatch(deleteWordFB(word_list[index].id));
    }
  };

  return (
    <WordItemWrap>
      <ButtonEdit
        onClick={() => {
          navigate(`/edit/${index}`);
        }}
      >
        <FaRegEdit />
      </ButtonEdit>
      <ButtonDelete onClick={deleteWord}>
        <FaRegTrashAlt />
      </ButtonDelete>
      <WordTitle>단어</WordTitle>
      <WordContent>{list.title}</WordContent>
      <WordTitle>설명</WordTitle>
      <WordContent>{list.detail}</WordContent>
      <WordTitle>예시</WordTitle>
      <WordContent>{list.example}</WordContent>
    </WordItemWrap>
  );
};

const WordItemWrap = styled.div`
  padding: 10px;
  background-color: white;
  border-radius: 10px;
  position: relative;
`;

const WordTitle = styled.div`
  font-size: 12px;
  text-decoration: underline;
`;

const WordContent = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-top: 5px;
  margin-bottom: 10px;
  &:last-child {
    color: #a9d0ff;
    margin-bottom: 0;
  }
`;

const ButtonEdit = styled.button`
  border: none;
  background-color: white;
  cursor: pointer;
  position: absolute;
  font-size: 20px;
  right: 45px;
  &:hover {
    color: darkblue;
    transform: scale(1.1);
  }
`;

const ButtonDelete = styled.button`
  border: none;
  background-color: white;
  cursor: pointer;
  position: absolute;
  font-size: 20px;
  right: 15px;
  &:hover {
    color: crimson;
    transform: scale(1.1);
  }
`;

export default WordItem;
