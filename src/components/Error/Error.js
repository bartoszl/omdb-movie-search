import styled from 'styled-components';

export default styled.p`
  color: ${({ theme }) => theme.colors.danger};
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 0;
  font-size: 0.9rem;
`;
