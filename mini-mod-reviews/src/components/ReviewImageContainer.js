import React from 'react'
import ReviewImages from './ReviewImages'

class ReviewImageContainer extends React.Component {
    
    render() {
    
        return (
            <>
                <div className="ImagesTitle">Review Images</div>
                <div className="ImageContainer">
                    <ReviewImages/>
                </div>
            </>
        )
    }
}

export default ReviewImageContainer