import React, { Component } from 'react';
import s from './Statistics.module.css';
import PropTypes from 'prop-types';

export default class Statistics extends Component {
  static defaultProps = {
    state: { good: 0, neutral: 0, bad: 0 },
    total: 0,
    positivePercentage: 0,
  };
  static propTypes = {
    state: PropTypes.PropTypes.object.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  };
  render() {
    return (
      <div className={s.wrapper}>
        <h2 className={s.title}>Statistics</h2>
        <ul className={s.list}>
          <li className={s.item}>Good: {this.props.state.good}</li>
          <li className={s.item}>Neutral: {this.props.state.neutral}</li>
          <li className={s.item}>Bad: {this.props.state.bad}</li>
          <li className={s.item}>Total: {this.props.total}</li>
          <li className={s.item}>
            Positive feedback: {this.props.positivePercentage} %
          </li>
        </ul>
      </div>
    );
  }
}
