import React from 'react';
import Tooltip from './Tooltip';
import "./ReviewHighlighter.css"
const getColorBySentiment = (sentiment) => {
    switch (sentiment) {
        case 'Positive':
            return '#D9F2DD';
        case 'Negative':
            return '#F2DBD9';
        case 'Mixed':
            return 'rgba(109, 232, 199, 0.24)';
        case 'Neutral':
            return '#eaf09b6b';
        default:
            return '#FFFFFF';
    }
};

const ReviewHighlighter = ({ review }) => {
    return (
        <div className="review">
            <h3>{review.reviewer_name}</h3>
            <p>{review.date}</p>
            <p>
                {review.content.split('\n').map((paragraph, index) => (
                    <span key={index}>
                        {paragraph.split(' ').map((word, idx) => {
                            const match = review.analytics.find((analysis) =>
                                analysis.sentences.some((sentence) => sentence.includes(word))
                            );

                            if (match) {
                                return (
                                    <Tooltip key={idx} content={match.topic} color={getColorBySentiment(match.sentiment)}>
                                        <span style={{ backgroundColor: getColorBySentiment(match.sentiment) }}>
                                            {word}{' '}
                                        </span>
                                    </Tooltip>
                                );
                            }

                            return <span key={idx}>{word} </span>;
                        })}
                        <br />
                    </span>
                ))}
            </p>
        </div>
    );
};

export default ReviewHighlighter;
