import styled from 'styled-components';

const SearchContainer = styled.div`
  width: 100vw;
  height: ${({ collapsed }) => (collapsed ? '20vh' : '100vh')};
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default SearchContainer;
