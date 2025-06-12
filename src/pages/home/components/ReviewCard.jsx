import React from 'react';
import { IconStar, IconStarEmpty } from '../../../assets/icons/icons';

function ReviewCard({ name, note, text, show }) {
    const empty = 5 - note;

    return show ? (
        <div className='review-card'>
            <div className="review-card-details">
                <div className="avatar">
                    {/* Contenu de l'avatar */}
                </div>

                <div className="info">
                    <p>{name}</p>

                    <div>
                        {[...Array(note)].map((_, index) => (
                            <IconStar key={`filled-${index}`} />
                        ))}
                        {[...Array(empty)].map((_, index) => (
                            <IconStarEmpty key={`empty-${index}`} />
                        ))}
                    </div>
                </div>
            </div>

            <div className="review-card-text">
                {text}
            </div>
        </div>
    ) : null;
}

export default ReviewCard