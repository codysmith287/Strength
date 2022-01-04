import styled from 'styled-components';

export const HeroContainer = styled.div`
  height: max-content;
  width: 100%;
  display: grid;
  grid-template: 1fr 12.5% / 1fr;
`;

export const HeroImgContainer = styled.div`
  grid-area: 1 / 1 / span 2 / span 1;
`;

export const HeroTextContainer = styled.div`
  grid-area: 1 / 1 / span 2 / span 1;
  z-index: 1;
  display: flex;
  justify-content: center;
  padding-top: 14.5%;
`;

export const HeroText = styled.h1`
  font-size: 13vw;
  line-height: 14vw;
  color: #ffffff;
  text-shadow: 1px 1px 2px #000, 0 0 1em #000;
`;

export const GradientTransition = styled.div`
  grid-area: 2 / 1 / span 1 / span 1;
  z-index: 2;
  background: linear-gradient(180deg, rgba(11, 29, 38, 0) 0%, #0b1d26 61.38%);
`;
