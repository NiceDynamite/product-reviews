import React from 'react'
import ReviewValueCircleGraphs from './ReviewValueCircleGraphs'
import ReviewImageContainer from './ReviewImageContainer'
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
                <ReviewValueCircleGraphs/>
                <div className="MainOther">Review images</div>
                <ReviewImageContainer reviews={this.props.reviews}/>
                <ReviewButton/>
                <ReviewSortingBar/>
                <ReviewBoxContainer reviews={this.props.reviews}/>
                <ReviewButton/>
            </>
            
        )
    }
}

export default Main