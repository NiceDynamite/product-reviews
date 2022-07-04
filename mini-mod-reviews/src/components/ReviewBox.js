import React from 'react'

class ReviewBox extends React.Component {
    
    render() {

        return (
            <>
                <div id={this.props.elem.review_id} className="ReviewBox">
                    <h3>{this.props.elem.title}</h3>
                </div>
            </>
            
        )
    }
}

export default ReviewBox