import React from 'react';
import { FeatureText } from '../Section-Features/SectionFeatures.styles';
import Slider from 'react-slick';
import { LogoArea, LogoContainer, LogoImage, PartnerSection } from './Partner.styles';
import { SampleNextArrow, SamplePrevArrow } from './Arrow-carousel';

function Partner() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        centerPadding: 140,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                    centerPadding: 30,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    centerPadding: 30,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <PartnerSection>
            <FeatureText>OUR BEST PARTNER</FeatureText>
            <LogoArea style={{ color: '#fff' }}>
                <Slider {...settings}>
                    <LogoContainer>
                        <LogoImage src="/logo1.png" alt="dummy logo" />
                    </LogoContainer>

                    <LogoContainer>
                        <LogoImage src="/logo1.png" alt="dummy logo" />
                    </LogoContainer>
                    <LogoContainer>
                        <LogoImage src="/logo1.png" alt="dummy logo" />
                    </LogoContainer>
                    <LogoContainer>
                        <LogoImage src="/logo1.png" alt="dummy logo" />
                    </LogoContainer>
                    <LogoContainer>
                        <LogoImage src="/logo1.png" alt="dummy logo" />
                    </LogoContainer>
                </Slider>
            </LogoArea>
        </PartnerSection>
    );
}

export default Partner;
