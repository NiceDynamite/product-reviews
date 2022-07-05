import React from 'react'

class ReviewRecomendGraph extends React.Component {
    
    render() {
    
        return (
            <>
                <div class="RadialBarChart-sc-1hry3jv-1 eBXCsg h-display-inline-block">
                    <svg width='56' height='56' className='chart-container'>
                        <circle cx='28' cy='28' r='23' className='back' fill='none'/>
                        <circle cx='28' cy='28' r='23' className='front' fill='none'/>
                        <g className='text'>
                            <text x='26' y='26' alignment-baseline="central" text-anchor="middle" id='percentage'>51</text>
                        </g>
                    </svg>
                </div>
                <div className="CircleGraphWouldRecommend">51% would Recommend</div>
                <div className="Recommendations">49 recommendations</div>
            </>
            
        )
    }
}

export default ReviewRecomendGraph