import styled from 'styled-components';
import { BACKGROUND_GREY } from '../constants/colors';

const SearchContainer = styled.div`
  width: 100vw;
  height: ${({ collapsed }) => (collapsed ? '15vh' : '100vh')};
  background-color: ${BACKGROUND_GREY};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: height 0.75s ease-out;
  position: fixed;
  top: 0;
  left: 0;
`;

export default SearchContainer;
