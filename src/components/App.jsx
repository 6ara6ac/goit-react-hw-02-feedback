import React from "react";
import { FeedbackOptions } from "./Feedback/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Section } from "./Section/Section";
import { Notification } from './Notification/Notification'



export class App extends React.Component {
  
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  addGoodreview = () => {this.setState(prevState => ({good: prevState.good + 1}))}
  addNeutralreview = () => {this.setState(prevState => ({neutral: prevState.neutral + 1}))}
  addBadreview = () => {this.setState(prevState => ({bad: prevState.bad + 1}))}

  
  countTotalFeedback = () => {
    const total = Object.values(this.state).reduce((acc, el) =>{
      acc += el;
      return acc;
    }, 0)

   return total;
  }

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();

    const positiveValue = [this.state].reduce((acc, el) => {
      acc += el['good'];
      return acc;
    }, 0)

    const result = positiveValue/total*100;

    return Math.round(result)+'%';
  }
  

  render(){
  const {good, neutral, bad} = this.state;
  
  return (
    <div>
    <Section title={"Please leave feedback"}>
    <FeedbackOptions 
    addGoodreview = {this.addGoodreview}
    addNeutralreview = {this.addNeutralreview}
    addBadreview = {this.addBadreview}
    options={Object.keys(this.state)}
    />
    </Section>

    <Section title={"Statistics"}>
    {this.countTotalFeedback() ? (
    <Statistics 
    good = {good}
    neutral = {neutral}
    bad = {bad}
    total = {this.countTotalFeedback()}
    positivePercentage = {this.countPositiveFeedbackPercentage()} />) : 
    <Notification message={'There is no feedback'}/>
    }
    </Section>
    </div>
  );
}
};
