import React from 'react'
import ReactDOM from 'react-dom/client';
import ReviewSingleImage from './ReviewSingleImage'


class ReviewImages extends React.Component {
    
    
    render() { 
        return(
            this.props.reviews.map((elem) => {
            return (
                <ReviewSingleImage elem={elem}/>
            )
        }
            )
    )}
    
    
}

export default ReviewImages