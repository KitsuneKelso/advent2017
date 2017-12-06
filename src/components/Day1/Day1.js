import React from 'react';
import PropTypes from 'prop-types';

class Day1 extends React.Component {
  parseSequential = input => {
    const matches = [];

    if (input[0] === input[input.length - 1]) {
      matches.push(input[0]);
    }

    for (let i = 0; i < input.length; i += 1) {
      if (input[i] === input[i + 1]) {
        matches.push(input[i]);
      }
    }

    return this.summarize(matches);
  };

  parseCircular = input => {
    const matches = [];
    const half = input.length / 2;

    for (let i = 0; i < half; i += 1) {
      if (input[i] === input[i + half]) {
        matches.push(input[i]);
      }
    }

    return this.summarize(matches) * 2;
  };

  summarize = matches => {
    let total = 0;
    matches.map(x => (total += parseInt(x, 10))); // eslint-disable-line no-return-assign
    return total;
  };

  render() {
    return (
      <div>
        <h3>Day 1: Inverse Captcha</h3>
        <p>Sequential Total: {this.parseSequential(this.props.captcha)}</p>
        <p>Circular Total: {this.parseCircular(this.props.captcha)}</p>
      </div>
    );
  }
}

Day1.propTypes = {
  captcha: PropTypes.string.isRequired,
};

export default Day1;
