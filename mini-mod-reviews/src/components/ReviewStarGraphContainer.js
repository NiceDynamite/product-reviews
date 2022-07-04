import React from 'react'
import ReviewRecomendGraph from './ReviewRecomendGraph'
import ReviewStarGraph from './ReviewStarGraph'

class ReviewStarGraphContainer extends React.Component {
    
    render() {
    
        return (
            <>
                <ReviewStarGraph/>
                <ReviewRecomendGraph/>
            </>
            
        )
    }
}

export default ReviewStarGraphContainer