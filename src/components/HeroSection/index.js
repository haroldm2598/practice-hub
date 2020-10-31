import React, { useState } from 'react';
import Video from '../../videos/video.mp4';
import { Button } from '../Button.elements';
import { 
    HeroContainer, 
    HeroBg, 
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from './Hero.elements';

const HeroSection = () => {
    const [ hover, setHover ] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };

    return (
        <HeroContainer id='home'>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'></VideoBg>
            </HeroBg>
            <HeroContent>
                <HeroH1>Web Development And Mobile App</HeroH1>
                <HeroP>
                    Lorem ipsum dolor sit amet consectetur adipisicing 
                    elit. Fugiat asperiores veritatis, delectus amet 
                    ut rem minus.
                </HeroP>
                <HeroBtnWrapper>
                    <Button 
                        to='signup' 
                        onMouseEnter={onHover} 
                        onMouseLeave={onHover}
                        primary='true'
                        dark='true'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                    >
                        Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;
