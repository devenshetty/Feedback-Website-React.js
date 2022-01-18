import { createContext, useState, useEffect } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item:{},
    edit:false
  });

  useEffect(() => {
    fetchFeedback()
  }, []);


  //fetching the feedback
  const fetchFeedback = async () => {
    const response = await fetch("/feedback?_sort=id&_order=desc");

    const data = await response.json();
    setFeedback(data);
    setIsLoading(false);
  }

  const deleteFeedback = async (id) => {
    if(window.confirm("Are you sure you would like to delete this feedback?")){

      await fetch(`feedback/${id}`, {method:"DELETE"})
      setFeedback(feedback.filter((item) => item.id !== id ))
    }
  };

  const addFeedback = async (newFeedback) =>{
      const response = await fetch("/feedback", {
        method : "POST",
        headers:{
          "Content-Type": "application/json"
        },
        body:JSON.stringify(newFeedback)
      }
      );

      const data = await response.json()
      setFeedback([data,...feedback])
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
    updateFeedback,
    isLoading
  }}>
  { children }
  </FeedbackContext.Provider>
}

export default FeedbackContext;
