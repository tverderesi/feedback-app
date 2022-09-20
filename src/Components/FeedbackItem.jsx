import Card from "./shared/Card"
import PropTypes from 'prop-types'
import {FaTimes} from 'react-icons/fa'



function FeedbackItem({item, reverse}) {
  const handleClick = (id) => {console.log(id)}

  return (
<Card>
    <div className="num-display">{item.rating}</div>
    <button onClick={() => handleClick(item.id)} className="close">

      <FaTimes color= {reverse ? 'white': 'purple'} />
    </button>
    <div className="text-display">{item.text}</div>
</Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired
}

FeedbackItem.defaultProps = {reverse: true,}

export default FeedbackItem
