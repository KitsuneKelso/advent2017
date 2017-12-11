import React from 'react';
import PropTypes from 'prop-types';

class Day3 extends React.Component {
  generateMatrix = depth => {
    const matrix = [];
    for (let i = 0; i < depth; i += 1) {
      matrix[i] = [];
      for (let j = 0; j < depth; j += 1) {
        matrix[i][j] = 0;
      }
    }
    return matrix;
  };

  spiralArray = (max = 538 ** 2) => {
    const endpoint = Math.ceil(Math.sqrt(max));
    const mid = Math.floor(endpoint / 2);
    const matrix = this.generateMatrix(endpoint);

    matrix[mid][mid] = 1;
    let x = mid;
    let y = mid;
    let depth = mid + 1;
    let shallow = mid - 1;
    let distance = 0;

    const manhattanDistance = (digit, height, width) => {
      matrix[height][width] = digit;
      if (digit === max) {
        distance = Math.abs(height - mid) + Math.abs(width - mid);
      }
    };

    const breaker = iter => iter >= max;

    for (let j = 1; j < max; ) {
      // RIGHT
      while (y < depth) {
        if (breaker(j)) break;
        j += 1;
        y += 1;
        manhattanDistance(j, x, y);
      }

      // UP
      while (x > shallow) {
        if (breaker(j)) break;
        j += 1;
        x -= 1;
        manhattanDistance(j, x, y);
      }

      // LEFT
      while (y > shallow) {
        if (breaker(j)) break;
        j += 1;
        y -= 1;
        manhattanDistance(j, x, y);
      }

      // DOWN
      while (x < depth) {
        if (breaker(j)) break;
        j += 1;
        x += 1;
        manhattanDistance(j, x, y);
      }

      depth += 1;
      shallow -= 1;
    }

    return distance;
  };

  render() {
    return (
      <div>
        <h3>Day 3: Spiral Memory</h3>
        <p>Manhattan Distance: {this.spiralArray(this.props.input)}</p>
      </div>
    );
  }
}

Day3.propTypes = {
  input: PropTypes.number.isRequired,
};

export default Day3;
