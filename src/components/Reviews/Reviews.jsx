import ReviewForm from './ReviewForm'
import ReviewItem from './ReviewItem'
import './Reviews.css'
import PropTypes from 'prop-types'
const Reviews = ({active}) => {
  return (
    <div className={`tab-panel-reviews ${active}`}>
        <h3>2 reviews htmlFor Basic Colored Sweatpants With Elastic Hems</h3>
        <div className="comments">
          <ol className="comment-list">
            <ReviewItem /> 
          </ol>
        </div>

        <div className="review-form-wrapper">
          <h2>Add a review</h2>
          <ReviewForm />
        </div>
      </div>
  )
}

export default Reviews

Reviews.propTypes = {
  active: PropTypes.string
}