import React from 'react';
import PropTypes from 'prop-types';

class Day2 extends React.Component {
  sortRow = row => row.sort((a, b) => a - b);

  sortArray = array => array.map(row => this.sortRow(row));

  calculateChecksum = input => {
    let total = 0;

    const sorted = this.sortArray(input);
    sorted.map(row => (total += row[row.length - 1] - row[0])); // eslint-disable-line no-return-assign

    return total;
  };

  // 5 9 2 8
  // 9 4 7 3
  // 3 8 6 5

  calculateDivisible = input => {
    let total = 0;

    // eslint-disable-next-line array-callback-return
    input.map(row => {
      // eslint-disable-next-line array-callback-return
      row.map(number => {
        for (let i = 0; i < row.length; i += 1) {
          if (number !== row[i] && row[i] % number === 0) {
            total += row[i] / number;
          }
        }
      });
    });

    return total;
  };

  render() {
    return (
      <div>
        <h3>Day 2: Corruption Checksum</h3>
        <p>Checksum: {this.calculateChecksum(this.props.spreadSheet)}</p>
        <p>Divisible: {this.calculateDivisible(this.props.spreadSheet)}</p>
      </div>
    );
  }
}

Day2.propTypes = {
  spreadSheet: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
};

export default Day2;
