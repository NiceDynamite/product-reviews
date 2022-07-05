import React from 'react'
import ReviewBox from './ReviewBox'

class ReviewBoxContainer extends React.Component {
    
    render() {
    
        return (
            <div className="ReviewBoxContainer">{
                this.props.reviews.map((elem) => {
                    return <ReviewBox elem={elem}/>
                })
            }</div>
        )
    }
}

export default ReviewBoxContainer