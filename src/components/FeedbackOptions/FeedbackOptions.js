import React, { Component } from 'react';
import s from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export default class FeedbackOptions extends Component {
  static defaultProps = {
    options: [],
  };
  static propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div className={s.feedback}>
        <h1 className={s.title}>Please leave feedback</h1>
        <div className={s.allButton}>
          {this.props.options.map(btn => (
            <button
              className={s.button}
              value={btn}
              key={btn}
              type="button"
              onClick={e => this.props.onLeaveFeedback(e)}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    );
  }
}
