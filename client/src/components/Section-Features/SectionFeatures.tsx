//@ts-nocheck
import React from 'react';
import { SectionFeatureContainer } from './SectionFeatures.styles';
import { useMediaQuery } from 'react-responsive';
import Feature from '../Feature/Feature';
import Partner from '../Partner/Partner';
import Review from '../review/Review';

function SectionFeatures() {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

    return (
        <SectionFeatureContainer>
            <Feature />
            <Partner />
            <Review />
        </SectionFeatureContainer>
    );
}

export default SectionFeatures;
