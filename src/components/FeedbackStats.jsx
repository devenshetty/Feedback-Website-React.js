function FeedbackStats({ feedback }){

  let average = feedback.reduce((acc, curr) => {
    return curr.rating + acc;
  }, 0);

  average = (average/feedback.length).toFixed(2);

  return <div className="feedback-stats">
  <h3>{feedback.length} ratings </h3>
  <h3> Average Rating: {average} </h3>
  </div>
}

export default FeedbackStats;
