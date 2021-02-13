import React from 'react';
import { ReviewContainer, ReviewText, ReviewLogo, ReviewLogoContainer } from './Review.styles';
function Review() {
    return (
        <ReviewContainer>
            <div>
                <img src="review1.jpg" alt="review 1" />
            </div>
            <ReviewText>
                <ReviewLogoContainer>
                    <ReviewLogo src="logo1.png" alt="company logo" />
                </ReviewLogoContainer>
                <blockquote>
                    "For 50 years, WWF has been protecting the future of nature. The world's leading conservation
                    organization, WWF works in 100 countries and is supported by 1.2 million members in the United
                    States and close to 5 million globally."
                </blockquote>
                <small className="mt-2 text-right">Jessica - company.com</small>
            </ReviewText>
        </ReviewContainer>
    );
}

export default Review;
