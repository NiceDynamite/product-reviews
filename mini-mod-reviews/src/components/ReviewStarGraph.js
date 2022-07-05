import React from 'react'
import StarRating from './StarRating'

class ReviewStarGraph extends React.Component {
    
    render() {
    
        return (
            <div className="StarRatingContainer">
                <div className="ratingNumber">4.4</div>
                <StarRating/>
                <div className="ReviewCount">456 star ratings</div>
            </div>
            
        )
    }
}

export default ReviewStarGraph