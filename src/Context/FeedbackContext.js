import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FeedbackData } from '../data/FeedbackData';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  // Hardcoded Data
  const [feedback, setFeedback] = useState([
    {
      id: 4,
      text: 'This item is from context.',
      rating: 10,
    },
    ...FeedbackData,
  ]);

  // Handling Feedback
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  const editFeedback = item => {
    setFeedbackEdit({ item, edit: true });
  };

  const addFeedback = newFeedback => {
    if (!newFeedback.rating) {
      window.alert('Rating is null');
    } else if (window.confirm('Add Feedback?')) {
      newFeedback.id = uuidv4();
      setFeedback([newFeedback, ...feedback]);
    }
  };

  const deleteFeedback = id => {
    if (window.confirm('Delete Feedback?')) {
      setFeedback(feedback.filter(item => item.id !== id));
    }
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback: feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
