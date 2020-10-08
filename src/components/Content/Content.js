import styled from 'styled-components';
import movieBackground from '../../assets/movie-background.jpg';

export default styled.div`
  padding: 20vh 0px;
  width: 100vw;
  min-height: 100vh;
  box-sizing: border-box;
  background-image: url(${movieBackground});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
