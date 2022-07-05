import React from 'react'

class ReviewSortingBar extends React.Component {
    
    render() {
    
        return (
            <>
                <div className="ReviewSortingBar">
                <div className="SortingBoxSortBy"><div className="SortingBoxSortBy"><div><button type="button" data-test="reviews-sort-by" aria-expanded="false" id="reviews-sort-by" target="reviews-sort-by" className="SortingBoxSortBy"><div class="styles__StyledRow-sc-1nuqtm0-0 cGCcBj select--customLabel"><div textlength="18" class="styles__StyledCol-sc-ct8kx6-0 idsBAI SelectBox__ReactiveTextCol-sc-a7khb8-0 gueqml"><span class="SelectBox__LabelSpan-sc-a7khb8-1 jVbLTT">sort by</span><span class="SelectBox__ValueSpan-sc-a7khb8-2 lkYFXM">most recent</span></div><div class="styles__StyledCol-sc-ct8kx6-0 idsBAI SelectBox__StyledCol-sc-a7khb8-3 cCbXTO"><span aria-expanded="false" class="SelectBoxArrow__ArrowContainer-sc-1xuuayp-0 gRaTpj"><svg height="14" viewBox="0 0 23 23" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12.002 15.38l9.589-9.588 1.414 1.414-11.003 11.002L1 7.206l1.414-1.414z" fill="#888"></path></svg></span></div></div></button></div></div></div>
                <div className="SortingBoxFilterBy"><div className="background-color: white;"><div><button type="button" data-test="reviews-list--filter-select" aria-expanded="false" id="reviews-list--filter-select" aria-live="polite" target="reviews-list--filter-select" className="SortingBoxFilterBy"><div className="SortingBoxFilterBy"><div textlength="20" className="styles__StyledCol-sc-ct8kx6-0 idsBAI SelectBox__ReactiveTextCol-sc-a7khb8-0 gueqml"><span className="SelectBox__LabelSpan-sc-a7khb8-1 jVbLTT">filter by</span><span className="SelectBox__ValueSpan-sc-a7khb8-2 lkYFXM">all ratings</span></div><div className="styles__StyledCol-sc-ct8kx6-0 idsBAI SelectBox__StyledCol-sc-a7khb8-3 cCbXTO"><span aria-expanded="false" className="SelectBoxArrow__ArrowContainer-sc-1xuuayp-0 gRaTpj"><svg height="14" viewBox="0 0 23 23" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12.002 15.38l9.589-9.588 1.414 1.414-11.003 11.002L1 7.206l1.414-1.414z" fill="#888"></path></svg></span></div></div></button></div></div></div>
                <div className="SortingBarSpacer"></div>
                    <div className="SortingBarCheckBoxContainer">
                        <div className="SortingCheckBoxWithPhotosContainer">
                            <div className="WithPhotoSpacer"></div>
                            <div className="SortingCheckBox" id="SortingCheckBox1"></div>
                            <div className="SortingPhotos">With photos</div>
                        </div>
                        <div className="SortingCheckBoxVerifiedContainer">
                            <div className="SortingCheckBox" id="SortingCheckBox2"></div>
                            <div className="SortingPhotos">Verified purchase</div>
                        </div>
                    </div>
                </div>
            </>
            
        )
    }
}

export default ReviewSortingBar