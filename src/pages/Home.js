import WordList from "../components/WordList";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import Add from "./Add";
import { useEffect } from "react";
import { loadWordFB } from "../redux/modules/word";
import { useDispatch, useSelector } from "react-redux";
import Detail from "./Detail";
import Spinner from "../components/Spinner";

const Home = () => {
  const dispatch = useDispatch();
  const is_loaded = useSelector((state) => state.word.is_loaded);

  useEffect(() => {
    dispatch(loadWordFB());
  }, [dispatch]);

  return (
    <>
      <AppWrap>
        <Container>
          <Routes>
            <Route path="/" element={<WordList />} />
            <Route path="/add" element={<Add />} />
            <Route path="/detail/:index" element={<Detail />} />
          </Routes>
        </Container>
      </AppWrap>
      {!is_loaded && <Spinner />}
    </>
  );
};

const AppWrap = styled.div`
  background-color: #efefef;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  background-color: #e2fff8;
  width: 50vw;
  height: 80vh;
  max-width: 400px;
  margin: auto;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
  position: relative;
  overflow: auto;
`;

export default Home;
