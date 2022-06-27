import React from 'react'
import ReviewBarGraph from './ReviewBarGraph'
import ReviewStarGraph from './ReviewStarGraph'
import ReviewRecomendGraph from './ReviewRecomendGraph'
import ReviewValueCircleGraphs from './ReviewValueCircleGraphs'
import ReviewImages from './ReviewImages'
import ReviewButton from './ReviewButton'
import ReviewSortingBar from './ReviewSortingBar'
import ReviewBoxContainer from './ReviewBoxContainer'

class Main extends React.Component {
    
    render() {
    
        return (
            <>
                <div className="Main">Guest Ratings & Reviews</div>
                <ReviewBarGraph/>
                <ReviewStarGraph/>
                <ReviewRecomendGraph/>
                <ReviewValueCircleGraphs/>
                <div className="MainOther">Review images</div>
                <ReviewImages/>
                <ReviewButton/>
                <ReviewSortingBar/>
                <ReviewBoxContainer/>
                <ReviewButton/>
            </>
            
        )
    }
}

export default Main