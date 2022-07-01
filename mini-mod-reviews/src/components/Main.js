import React from 'react'
import ReviewRecomendGraph from './ReviewRecomendGraph'
import ReviewValueCircleGraphs from './ReviewValueCircleGraphs'
import ReviewImages from './ReviewImages'
import ReviewButton from './ReviewButton'
import ReviewSortingBar from './ReviewSortingBar'
import ReviewBoxContainer from './ReviewBoxContainer'
import ReviewGraphContainer from './ReviewGraphContainer'

class Main extends React.Component {
    
    render() {
    
        return (
            <>
                <div className="Main">Guest Ratings & Reviews</div>
                <ReviewGraphContainer/>
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