import React from 'react'
import ReviewBox from './ReviewBox'

class ReviewBoxContainer extends React.Component {
    
    render() {
    
        return (
            <>
                <div className="ReviewBoxContainer">This many Reviews</div>
                <ReviewBox/>
            </>
            
        )
    }
}

export default ReviewBoxContainer