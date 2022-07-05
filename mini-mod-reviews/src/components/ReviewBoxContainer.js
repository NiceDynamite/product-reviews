import React from 'react'
import ReviewBox from './ReviewBox'

class ReviewBoxContainer extends React.Component {
    
    render() {
    
        return (
            <div className="ReviewBoxContainer">{
                this.props.reviews.slice(0, 8).map((elem) => {
                    return <ReviewBox elem={elem}/>
                })
            }</div>
        )
    }
}

export default ReviewBoxContainer