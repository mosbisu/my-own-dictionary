import WordList from "../components/WordList";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import Add from "./Add";

const Home = () => {
  return (
    <AppWrap>
      <Container>
        <Routes>
          <Route path="/" element={<WordList />} />
          <Route path="/add" element={<Add />} />
        </Routes>
      </Container>
    </AppWrap>
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
  max-width: 300px;
  margin: auto;
  height: 80vh;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
  position: relative;
`;

export default Home;
