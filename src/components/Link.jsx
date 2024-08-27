import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

export default function Link({ title, path }) {
    const navigate = useNavigate();
console.log(path);
    return <StyledLink onClick={() => navigate(path)} >{title}</StyledLink>;
}

const StyledLink = styled.span`
  cursor: pointer;
  margin: 0 1rem 5rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;