import React from 'react';
import { ArrowLeftAltRounded, ArrowRightAltRounded, IconStar } from '../../../assets/icons/icons';
import ReviewCard from "./ReviewCard";
import reviewData from '../../../data/reviewData';

function Comments() {
    return (
        <div className="comment__container">

            <div className="comment-notice">
                <h1 className="comment-notice-title">Partagez Votre Expérience</h1>

                <div className="comment-notice__content">
                    {reviewData.map((review) => (
                        <ReviewCard key={review.id} {...review} />
                    ))}
                </div>

                <div className="comment-notice__pagination">
                    <button className="prev" >
                        <ArrowLeftAltRounded />
                    </button>

                    <button className="next">
                        <ArrowRightAltRounded />
                    </button>
                </div>
            </div>

            <div className="comment-note">
                <div className="comment-note-info">
                    <button>44 avis</button>
                    <p>Des clients</p>
                </div>

                <div className="comment-note-rating">
                    <div className="rating-icons">
                        {[...Array(5)].map((_, index) => (
                            <IconStar key={index} />
                        ))}
                    </div>

                    <p className="overall-rating">
                        Note globale :
                        <span className="rating-value"> 5/5</span>
                    </p>
                </div>

                <button className="comment-note-button">
                    Déposer un avis
                </button>
            </div>
        </div>
    )
}

export default Comments