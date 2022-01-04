import React from 'react';
import Image from 'next/image';
import heroImg from '../../../public/hero.jpg';

import {
  HeroContainer,
  HeroImgContainer,
  HeroTextContainer,
  HeroText,
  GradientTransition,
} from './styles';

export const HomePageHero = () => {
  return (
    <HeroContainer>
      <HeroImgContainer>
        <Image
          src={heroImg}
          alt="Picture of a tattooed woman holding a barbell"
        />
      </HeroImgContainer>
      <HeroTextContainer>
        <HeroText>Strength</HeroText>
      </HeroTextContainer>
      <GradientTransition />
    </HeroContainer>
  );
};
