import styled from 'styled-components';

const Button = styled.button`
  padding: 0.75rem 1.25rem;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  border: none;
  background-color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
`;

export default Button;
