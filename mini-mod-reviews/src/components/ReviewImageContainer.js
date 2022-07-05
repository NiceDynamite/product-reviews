import React from 'react'
import ReviewSingleImage from './ReviewSingleImage'

class ReviewImageContainer extends React.Component {
    
    render() {
    
        return (
            <>
                <div className="ImageContainer">{
                    this.props.reviews.map((elem, index) => {
                    return <ReviewSingleImage elem={elem} />
                    })   
                }</div>
            </>
        )
    }
}

export default ReviewImageContainer