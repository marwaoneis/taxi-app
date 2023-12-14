
import  { useState } from "react"
import "./style.css";

const Ratings = () => {
  const [showRatingMenu, setShowRatingMenu] = useState(true);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleRateNow = () => {
  
    // sendRatingToDatabase(rating, comment);

   
    setShowRatingMenu(false);
  };

  const handleMaybeLater = () => {
  
    setShowRatingMenu(false);
  };

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };
  return (
   
       <div>
      {showRatingMenu ? (
        <div className="rating-container flex center column">
          <div className="smaller-container flex center column ">
          <h2>Rate Your Ride</h2>
          <div className="flex center column">
            <p>Rate your experience:</p>
            <div>
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  className="star"
                  key={star}
                  onMouseEnter={() => handleRatingChange(star)}
                  onClick={() => handleRatingChange(star)}
                  style={{ cursor: 'pointer', color: star <= rating ? 'gold' : 'gray' }}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
          <div className=" rating-comment-container flex center column">
            <p>Additional comments:</p>
            <input type="text" value={comment} onChange={handleCommentChange} />
            <button onClick={handleRateNow} className="save-button primary-bg white-text">
              Save Rating
            </button>
          </div>
          <div>
            <button className="later-btn" onClick={handleMaybeLater}>Maybe Later</button>
          </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default Ratings

//<Ratings />
// import Ratings from "../../components/Ratings/Ratings"; 
