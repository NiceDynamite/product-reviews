import React from 'react'

class ReviewValueCircleGraphs extends React.Component {
    
    render() {
    
        return (
            <>
                <div className="ValueCircleGraphs">
                    <div className='tqvGroupContainer'>
                        <div class="tqvRadialBarChart-sc-1hry3jv-1 eBXCsg h-display-inline-block">
                            <svg width='38' height='38' className='tqvchart-container'>
                                <circle cx='19' cy='19' r='17' className='tqvback' fill='none'/>
                                <circle cx='19' cy='19' r='17' className='tqvfront' fill='none'/>
                                <g className='tqvtext'>
                                    <text x='19' y='19' alignment-baseline="central" text-anchor="middle" id='percentage'>3.6</text>
                                </g>
                            </svg>
                        </div>
                        <div className='ValueOutOf'>Value
                            <div className='OutOf'>out of 5</div>
                        </div>
                    </div>
                    <div className='tqvGroupContainer'>
                        <div class="tqvRadialBarChart-sc-1hry3jv-1 eBXCsg h-display-inline-block">
                        <svg width='38' height='38' className='tqvchart-container'>
                            <circle cx='19' cy='19' r='17' className='tqvback' fill='none'/>
                            <circle cx='19' cy='19' r='17' className='tqvfront' fill='none'/>
                            <g className='text'>
                                <text x='19' y='19' alignment-baseline="central" text-anchor="middle" id='percentage'>3.2</text>
                            </g>
                        </svg>
                        </div>
                        <div className='ValueOutOf'>Taste
                            <div className='OutOf'>out of 5</div>
                        </div>
                    </div>
                    <div className='tqvGroupContainer'>
                        <div class="tqvRadialBarChart-sc-1hry3jv-1 eBXCsg h-display-inline-block">
                            <svg width='38' height='38' className='tqvchart-container'>
                                <circle cx='19' cy='19' r='17' className='tqvback' fill='none'/>
                                <circle cx='19' cy='19' r='17' className='tqvfront' fill='none'/>
                                <g className='tqvtext'>
                                    <text x='19' y='19' alignment-baseline="central" text-anchor="middle" id='percentage'>3.1</text>
                                </g>
                            </svg>
                        </div>
                        <div className='ValueOutOf'>Quality
                            <div className='OutOf'>out of 5</div>
                        </div>
                    </div>
                </div>
            </>
            
        )
    }
}

export default ReviewValueCircleGraphs