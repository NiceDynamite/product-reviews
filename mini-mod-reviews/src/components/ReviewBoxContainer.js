import React from 'react'
import ReviewBox from './ReviewBox'

class ReviewBoxContainer extends React.Component {
    
    render() {
    
        return (
            this.props.reviews.map((elem) => {
                return <ReviewBox elem={elem}/>
            })
        )
    }
}

export default ReviewBoxContainer