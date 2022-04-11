import styled from "styled-components";

const Spinner = () => {
  return <Outter>로딩중...</Outter>;
};

const Outter = styled.div`
  background-color: white;
  width: 100vw;
  height: 100vh;
  font-size: 50px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Spinner;
