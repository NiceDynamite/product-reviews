import React from 'react'
import ReviewBarGraph from './ReviewBarGraph'
import ReviewStarGraph from './ReviewStarGraph'

class ReviewGraphContainer extends React.Component {
    
    render() {
    
        return (
            <div className="graphContainer">
                <ReviewBarGraph/>
                <ReviewStarGraph/>
            </div>
            
        )
    }
}

export default ReviewGraphContainer