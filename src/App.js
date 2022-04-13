import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import { loadWordFB } from "./redux/modules/word";
import Home from "./pages/Home";
import styled from "styled-components";
import Spinner from "./components/Spinner";
import Add from "./pages/Add";
import Edit from "./pages/Edit";

function App() {
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
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<Add />} />
            <Route path="/edit/:index" element={<Edit />} />
          </Routes>
        </Container>
      </AppWrap>
      {!is_loaded && <Spinner />}
    </>
  );
}

const AppWrap = styled.div`
  background-color: #efefef;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  background-color: antiquewhite;
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

export default App;
