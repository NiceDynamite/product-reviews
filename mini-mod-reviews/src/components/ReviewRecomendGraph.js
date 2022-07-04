import React from 'react'

class ReviewRecomendGraph extends React.Component {
    
    render() {
    
        return (
            <>
                <div className="RecomendCircleGraph">ReviewRecomendCircleGraph
                    <svg viewBox="0 0 36 36" class="circular-chart orange">
                    <path class="circle-bg"
                        d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path class="circle"
                        stroke-dasharray="30, 100"
                        d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <text x="18" y="20.35" class="percentage">30%</text>
                    </svg>
                </div>
            </>
            
        )
    }
}

export default ReviewRecomendGraph