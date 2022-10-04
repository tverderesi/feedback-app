import { useEffect } from 'react';
import { createContext, useState } from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchFeedback();
  }, []);

  //FETCHing feedback
  const fetchFeedback = async () => {
    const response = await fetch('/feedback?_sort=id&_order=desc');
    const data = await response.json();
    setFeedback(data);
    setIsLoading(false);
  };

  // Handling Feedback
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  const editFeedback = item => {
    setFeedbackEdit({ item, edit: true });
  };

  const addFeedback = async newFeedback => {
    if (!newFeedback.rating) {
      window.alert('No rating assigned!');
    } else {
      const response = await fetch('/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newFeedback),
      });
      const data = await response.json();
      setFeedback([data, ...feedback]);
    }
  };

  const deleteFeedback = async id => {
    if (window.confirm('Delete Feedback?')) {
      await fetch(`/feedback.filter/${id}`, { method: 'DELETE' });
      setFeedback(feedback.filter(item => item.id !== id));
    }
  };

  const updateFeedback = async (id, updateItem) => {
    const response = await fetch(`feedback/${id}`, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(updateItem),
    });
    const data = await response.json();
    setFeedback(feedback.map(item => (item.id === id ? { ...item, ...data } : item)));
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        isLoading,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
