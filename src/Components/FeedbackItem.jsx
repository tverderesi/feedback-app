import Card from './shared/Card';
import PropTypes from 'prop-types';
import { FaEdit, FaTimes } from 'react-icons/fa';
import { useContext } from 'react';
import FeedbackContext from '../Context/FeedbackContext';

function FeedbackItem({ item, reverse }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);
  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <button
        onClick={() => deleteFeedback(item.id)}
        className='close'
      >
        <FaTimes color={reverse ? 'white' : 'purple'} />
      </button>

      <button
        onClick={() => editFeedback(item)}
        className='edit'
      >
        <FaEdit color={reverse ? 'white' : 'purple'} />
      </button>
      <div className='text-display'>{item.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

FeedbackItem.defaultProps = { reverse: false };

export default FeedbackItem;
