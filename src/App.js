import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Notification from './components/Notification';
import Container from './components/container';
import Section from './components/Section';
import React, { Component } from 'react';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = e => {
    const currentBtnValue = e.currentTarget.value;
    this.setState(prevState => {
      return {
        ...prevState,
        [currentBtnValue]: prevState[currentBtnValue] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const statesValuesArr = Object.values(this.state);
    return statesValuesArr.reduce((acc, val) => {
      acc += val;
      return acc;
    });
  };
  countZero = () => {
    if (
      this.state.good === 0 &&
      this.state.neutral === 0 &&
      this.state.bad === 0
    ) {
      return true;
    }
  };
  countPositiveFeedbackPercentage = () => {
    return Math.trunc((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const btnNames = Object.keys(this.state);
    return (
      <Container>
        <FeedbackOptions
          options={btnNames}
          onLeaveFeedback={this.onLeaveFeedback}
        />

        {this.countZero() ? (
          <Notification message="No feedback given" />
        ) : (
          <Statistics
            state={this.state}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        )}
      </Container>
    );
  }
}

export default App;
