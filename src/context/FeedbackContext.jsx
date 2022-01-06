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

  const [feedbackEdit, setFeedbackEdit] = useState({
    item:{},
    edit:false
  });

  const deleteFeedback = (id) => {
    if(window.confirm("Are you sure you would like to delete this feedback?")){
      setFeedback(feedback.filter((item) => item.id !== id ))
    }
  };

  const addFeedback = (newFeedback) =>{
      newFeedback.id = uuidv4();
      setFeedback([newFeedback,...feedback])
  }

  const editFeedback = (item) =>{
    setFeedbackEdit({
      item:item,
      edit:true
    })
  }

  const updateFeedback = (id, updItem) =>{
    setFeedback(
      feedback.map((item) => (
      item.id === id ? {...item, ...updItem}: item
    )))
    setFeedbackEdit({
      item:updItem,
      edit:false
    })

  }

  return <FeedbackContext.Provider value={{
    feedback: feedback,
    deleteFeedback: deleteFeedback,
    addFeedback: addFeedback,
    editFeedback: editFeedback,
    feedbackEdit,
    updateFeedback
  }}>
  { children }
  </FeedbackContext.Provider>
}

export default FeedbackContext;
