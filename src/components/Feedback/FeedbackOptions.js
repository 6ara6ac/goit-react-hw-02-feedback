import React from "react"
import { Feedback, Button } from "./FeedbackOptions.styled"
import PropTypes from 'prop-types';


export const FeedbackOptions = ({addGoodreview, addNeutralreview, addBadreview}) => 

<Feedback>
<Button onClick={addGoodreview}>Good</Button>
<Button onClick={addNeutralreview}>Neutral</Button>
<Button onClick={addBadreview}>Bad</Button>
</Feedback>

FeedbackOptions.propTypes = {
    addGoodreview: PropTypes.func.isRequired,
    addNeutralreview: PropTypes.func.isRequired,
    addBadreview: PropTypes.func.isRequired,
}

