import React from 'react'
import ReviewBarGraph from './ReviewBarGraph'
import ReviewStarGraph from './ReviewStarGraph'
import ReviewRecomendGraph from './ReviewRecomendGraph'
import ReviewValueCircleGraphs from './ReviewValueCircleGraphs'

class Main extends React.Component {
    
    render() {
    
        return (
            <>
                <div className="Main">Guest Ratings & Reviews</div>
                <ReviewBarGraph/>
                <ReviewStarGraph/>
                <ReviewRecomendGraph/>
                <ReviewValueCircleGraphs/>
            </>
            
        )
    }
}

export default Main