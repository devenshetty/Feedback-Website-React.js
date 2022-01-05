import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
    id:1,
    text: "This message is from the context that I created",
    rating: 3
    }
  ]);

  const deleteFeedback = (id) => {
    if(window.confirm("Are you sure you would like to delete this feedback?")){
      setFeedback(feedback.filter((item) => item.id !== id ))
    }
  };

  const addFeedback = (newFeedback) =>{
      newFeedback.id = uuidv4();
      setFeedback([newFeedback,...feedback])
  }

  return <FeedbackContext.Provider value={{
    feedback: feedback,
    deleteFeedback: deleteFeedback,
    addFeedback: addFeedback
  }}>
  { children }
  </FeedbackContext.Provider>
}

export default FeedbackContext;
