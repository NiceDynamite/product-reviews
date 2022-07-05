import React from 'react'
import ReviewSingleImage from './ReviewSingleImage'

class ReviewImageContainer extends React.Component {
    
    render() {
    
        return (
            <>
                <div className="ImageContainer">{
                    this.props.reviews.slice(0, 5).map((elem, index) => {
                    return <ReviewSingleImage elem={elem} />
                    index++;
                    })   
                }</div>
            </>
        )
    }
}

export default ReviewImageContainer