import React from 'react'
import ReviewBarGraph from './ReviewBarGraph'
import ReviewStarGraphContainer from './ReviewStarGraphContainer'

class ReviewGraphContainer extends React.Component {
    
    render() {
    
        return (
            <div className="graphContainer">
                <ReviewBarGraph/>
                <ReviewStarGraphContainer/>
            </div>
            
        )
    }
}

export default ReviewGraphContainer