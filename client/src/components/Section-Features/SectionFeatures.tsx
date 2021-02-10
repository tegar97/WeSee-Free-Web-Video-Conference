import React from 'react';
import { SectionFeatureContainer, FeatureText } from './SectionFeatures.styles';
function SectionFeatures() {
    return (
        <SectionFeatureContainer>
            <div style={{ marginTop: '40rem', color: '#fff' }}>
                <FeatureText>
                    The latest features <br />
                    And future features
                </FeatureText>
            </div>
        </SectionFeatureContainer>
    );
}

export default SectionFeatures;
