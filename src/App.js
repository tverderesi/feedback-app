import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import FeedbackData from './data/FeedbackData';
import FeedbackList from './Components/FeedbackList';
import Header from './Components/Header';
import FeedbackStats from './Components/FeedbackStats';
import FeedbackForm from './Components/FeedbackForm';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const deleteFeedback = id => {
    if (window.confirm('Delete Feedback?')) {
      setFeedback(feedback.filter(item => item.id !== id));
    }
  };

  const addFeedback = newFeedback => {
    if (!newFeedback.rating) {
      window.alert('Rating is null');
    } else if (window.confirm('Add Feedback?')) {
      newFeedback.id = uuidv4();
      setFeedback([newFeedback, ...feedback]);
    }
  };

  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackForm handleAdd={addFeedback} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList
          feedback={feedback}
          handleDelete={deleteFeedback}
        />
      </div>
    </>
  );
}

export default App;
