import styled from 'styled-components';

export default styled.button.attrs(() => ({
  type: 'button',
}))`
  color: white;
  font-size: 1.1rem;
  border: none;
  background-color: ${({ theme }) => theme.colors.background};
  cursor: pointer;
  padding: 0.75rem 1.5rem;
  box-shadow: 0 0 5px 1px ${({ theme }) => theme.colors.shadow};
  transition: all 0.25s;
  margin-top: 1.5rem;

  &:hover {
    box-shadow: 0 0 7px 2px ${({ theme }) => theme.colors.shadow};
  }
`;
