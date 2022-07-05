import React from 'react'
import BarGraph from './BarGraph'

class ReviewBarGraph extends React.Component {
    
    render() {
    
        return (
            <>
                <div className="BarGraphsContainer">
                    <div className="HistogramButton">5 Stars<BarGraph/>74%</div>
                    <div className="HistogramButton">4 Stars<BarGraph/>54%</div>
                    <div className="HistogramButton">3 Stars<BarGraph/>24%</div>
                    <div className="HistogramButton">2 Stars<BarGraph/>4%</div>
                    <div className="HistogramButton">1 Stars<BarGraph/>13%</div>                    
                </div>
            </>
            
        )
    }
}

export default ReviewBarGraph