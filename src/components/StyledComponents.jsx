import styled, { keyframes } from 'styled-components';


export const Div = styled.div`
background-color: ${props => props.theme[`backgroundProject${props.type.theme}`]};
${props => `
  transition: 1s;
  ${props.projectShow ? 'transform: translateX(0) scale(1);' : 'transform: translateX(-100vw) scale(0, 1);'}` }
`;
