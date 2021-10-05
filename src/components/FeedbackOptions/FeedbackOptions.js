import { Component } from 'react';
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
      <div className={s.allButton}>
        {this.props.options.map((option, ind) => (
          <button
            className={s.button}
            value={option}
            key={ind}
            type="button"
            onClick={e => this.props.onLeaveFeedback(e)}
          >
            {option}
          </button>
        ))}
      </div>
    );
  }
}
