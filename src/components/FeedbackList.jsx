import FeedbackItem from "./FeedbackItem";
import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import Spinner from "./shared/Spinner";

function FeedbackList({ handleDelete }) {

  const { feedback, isLoading } = useContext(FeedbackContext);

  if(!isLoading && (!feedback || feedback.length === 0)){
    return <p> No feedback yet! </p>
  }
  return isLoading ? <Spinner /> : (<div className="feedback-list">
    <AnimatePresence>
    {feedback.map((item) => (
      <motion.div key={item.id} initial= {{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} >
      <FeedbackItem key={item.id} item={item}  />
      </motion.div>
    ))
    }
    </AnimatePresence>
    </div>

    //below code is for a version without animation. Just uncomment the below block and remove the above code from else block.
    // return <div className="feedback-list">
    // {feedback.map((item) => (
    //   <FeedbackItem key={item.id} item={item} handleDelete= {handleDelete} />
    // ))
    // }
    // </div>
  )

}

export default FeedbackList;
