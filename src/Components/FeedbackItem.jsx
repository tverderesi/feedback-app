import Card from "./shared/Card"
import PropTypes from 'prop-types'
import {FaTimes} from 'react-icons/fa'



function FeedbackItem({item, reverse, handleDelete}) {

  return (
<Card>
    <div className="num-display">{item.rating}</div>
    <button onClick={() => handleDelete(item.id)} className="close">

      <FaTimes color= {reverse ? 'white': 'purple'} />
    </button>
    <div className="text-display">{item.text}</div>
</Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired
}

FeedbackItem.defaultProps = {reverse: false,}

export default FeedbackItem
