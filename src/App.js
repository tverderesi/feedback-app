import {useState} from "react";
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./Components/FeedbackList";
import Header from "./Components/Header";
function App() {
  const [feedback,setFeedback] = useState(FeedbackData)
  return (
    <>
    <Header />   
    <div className="container">
    <FeedbackList feedback={feedback}/>
    </div>
  </>


  );
}

export default App;
