import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item:{},
    edit:false
  });

  useEffect(() => {
    fetchFeedback()
  }, []);


  //fetching the feedback
  const fetchFeedback = async () => {
    const response = await fetch("http://localhost:5000/feedback?_sort=id&_order=desc");

    const data = await response.json();
    setFeedback(data);
  }

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
