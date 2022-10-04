import { useState, useContext, useEffect } from 'react';
import FeedbackContext from '../../Context/FeedbackContext';

function RatingSelect({ select, ratingselect }) {
  const [selected, setSelected] = useState('');
  const handleChange = e => {
    select(+e.currentTarget.value);
    setSelected(+e.currentTarget.value);
  };
  const { feedbackEdit } = useContext(FeedbackContext);

  useEffect(() => {
    setSelected(feedbackEdit.item.rating);
  }, [feedbackEdit]);

  return (
    <div>
      <ul className='rating'>
        {Array.from({ length: 10 }, (_, i) => (
          <li key={`rating-${i + 1}`}>
            <input
              type='radio'
              id={`num${i + 1}`}
              name='rating'
              value={i + 1}
              onChange={handleChange}
              checked={selected === ratingselect && selected === i + 1}
            />
            <label htmlFor={`num${i + 1}`}>{i + 1}</label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RatingSelect;
