import React from 'react'

class ReviewBox extends React.Component {
    
    render() {

        return (
            <>
                <div id={this.props.elem.review_id} className="ReviewBox">
                    <h3>{this.props.elem.title}</h3>
                    <div className="BoxSplit">
                        <div className="BoxContentsLeft">
                            <div className="BoxRatingContainer">
                                <div className="BoxRating">Stars?</div>
                                <div className="BoxRecomend">@ Would recommend</div>
                            </div>
                            <div className="DaysAgo">UserName -dd days ago, Verified purchaser</div>
                            <div className="BoxReviewText">This is somekind of review</div>
                        </div>
                        <div className="BoxContentsRight">
                            <div className='BoxValues'></div>
                            <div className="WasThisHelpful">Did you find this review helpful?</div>
                            <div className="BoxHelpfulReport">
                                    <div className="Helpful">
                                        <div className="HelpfulButton">Helpful</div>
                                        <div className="NotHelpfulButton">Not Helpful</div>
                                    </div>
                                <div className="BoxReport">Report review</div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
            
        )
    }
}

export default ReviewBox