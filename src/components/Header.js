import styled from "styled-components";

const Header = ({ title }) => {
  return <Title>{title}</Title>;
};

const Title = styled.div`
  font-size: 40px;
  text-align: center;
  padding: 10px 0 30px;
  font-family: "Nanum Pen Script";
`;

export default Header;
