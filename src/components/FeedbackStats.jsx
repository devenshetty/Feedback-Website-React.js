import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackStats(){

  const { feedback } = useContext(FeedbackContext)

  let average = feedback.reduce((acc, curr) => {
    return curr.rating + acc;
  }, 0);

  average = (average/feedback.length).toFixed(2);

  return <div className="feedback-stats">
  <h3>{feedback.length} ratings </h3>
  <h3> Average Rating: {isNaN(average)?0:average} </h3>
  </div>
}

export default FeedbackStats;
