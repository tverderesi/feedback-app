import FeedbackItem from './FeedbackItem';
import { motion, AnimatePresence } from 'framer-motion';
import { useContext } from 'react';
import FeedbackContext from '../Context/FeedbackContext';
import Spinner from './shared/Spinner';

function FeedbackList() {
  const { feedback, isLoading } = useContext(FeedbackContext);
  if (!isLoading && (!feedback || feedback.length === 0)) return <p>No feedback yet.</p>;

  return isLoading ? (
    <h3>
      <Spinner />
    </h3>
  ) : (
    <div className='feedback-list'>
      <AnimatePresence>
        {feedback.map(item => (
          <motion.div
            key={item.id}
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem
              key={item.id}
              item={item}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default FeedbackList;
