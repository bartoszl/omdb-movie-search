import styled, { keyframes } from 'styled-components';

const type = keyframes`
  from { 
    width: 0;
  }
  to { 
    width: 26rem ;
  }
`;

const blink = keyframes`
  from{border-right-color: rgba(255,255,255,.75);}
  to{border-right-color: transparent;}
`;

// Here we create a component that will rotate everything we pass in over two seconds
const TypingHeader = styled.h1`
  overflow: hidden; 
  border-right: 0.15rem solid rgba(255,255,255,.75); 
  white-space: nowrap; 
  margin: 0 auto;
  letter-spacing: 0.15rem;
  color: white;
  position: absolute;
  top: 15rem;

  animation: ${type} 2s steps(30) 1s 1 normal both,
  ${blink} 500ms steps(30) infinite normal;
`;

export default TypingHeader;
