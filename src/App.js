import { useState } from "react";
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./Components/FeedbackList";
import Header from "./Components/Header";
import FeedbackStats from "./Components/FeedbackStats";
import FeedbackForm from "./Components/FeedbackForm";




function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const deleteFeedback = id => {
    if (window.confirm("Delete Feedback?")) {
      setFeedback(feedback.filter(item => item.id !== id));
    }
  };
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm />
        <FeedbackStats feedback={feedback}/>
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>

    </>
  );
}

export default App;
