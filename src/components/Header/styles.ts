import styled from "styled-components";

export const ContainerHeader = styled.div`
  width:100%;
  height: 100vh;

  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background: #000000;

  h1{
    font-size: 5rem;
    color:${props => props.theme.colors.primary};
  }

  p{
    margin-top:2rem;
    font-size:2rem;
  }
`;
