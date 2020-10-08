import styled from 'styled-components';
import movieBackground from '../assets/movie-background.jpg';

const MovieContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-image: url(${movieBackground});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 20vh 0px;
  width: 100vw;
  min-height: 100vh;
`;

export default MovieContainer;