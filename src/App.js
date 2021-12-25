import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    console.log("App", id);
  };

  return(<div>
    <Header />
    <div className="container">
      <FeedbackList feedback = {feedback} handleDelete={deleteFeedback} />
    </div>
  </div>)
}



export default App;
