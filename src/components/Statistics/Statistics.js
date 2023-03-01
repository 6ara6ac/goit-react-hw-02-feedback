import { Statistic } from "./Statistics.styled"
import PropTypes from 'prop-types';



export const Statistics = ({ good,neutral,bad, total, positivePercentage}) => {
    return <Statistic>
    <p>Good: {good}</p>
    <p>Neutral: {neutral}</p>
    <p>Bad: {bad}</p>
    <p>Total: {total}</p>
    <p>Positive feedback: {positivePercentage} </p>
    </Statistic>
}

Statistic.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
}