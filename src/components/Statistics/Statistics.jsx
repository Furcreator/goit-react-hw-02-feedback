import { List, ListItem } from "./Statistics.styled"
import PropTypes from 'prop-types'; 
const Statistics = ({good, neutral, bad, total, percentage}) => {
    
    return (
        <List>
            <ListItem>Good:<p>{good}</p></ListItem>
            <ListItem>Neutral:<p>{neutral}</p></ListItem>
            <ListItem>Bad:<p></p>{bad}</ListItem>
            <ListItem>Total:<p>{total}</p></ListItem>
            <ListItem>Positive FeedBack:<p>{percentage}%</p></ListItem>
        </List>
    )
}

export default Statistics

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    percentage: PropTypes.number.isRequired,
}