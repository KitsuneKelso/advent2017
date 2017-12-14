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

  spiralArray = (max, modifier) => {
    const endpoint = Math.ceil(Math.sqrt(max));
    const mid = Math.floor(endpoint / 2);
    const matrix = this.generateMatrix(endpoint);

    matrix[mid][mid] = 1;
    let height = mid;
    let width = mid;
    let step = 1;
    let distance = 0;
    let breakNum = 0;

    const getManhattanDistance = (x, y) => Math.abs(x - mid) + Math.abs(y - mid);

    const adjacentSum = (x, y) =>
      (matrix[x][y - 1] || 0) +
      (x > 0 ? matrix[x - 1][y - 1] || 0 : 0) +
      (x > 0 ? matrix[x - 1][y] || 0 : 0) +
      (x > 0 ? matrix[x - 1][y + 1] || 0 : 0) +
      (matrix[x][y + 1] || 0) +
      (x < endpoint - 1 ? matrix[x + 1][y + 1] || 0 : 0) +
      (x < endpoint - 1 ? matrix[x + 1][y] || 0 : 0) +
      (x < endpoint - 1 ? matrix[x + 1][y - 1] || 0 : 0);

    const setCoordinate = (x, y, z) => {
      matrix[x][y] = z;
      if (z === max) {
        distance = getManhattanDistance(x, y);
      }
    };

    const breaker = iter => {
      if (iter >= max) {
        breakNum = iter;
        return true;
      }
      return false;
    };

    const getI = (x, y, val) => (modifier ? adjacentSum(x, y) : val + 1);

    for (let i = 1; i < max; ) {
      // RIGHT
      while (width < mid + step) {
        if (breaker(i)) break;
        width += 1;
        i = getI(height, width, i);
        setCoordinate(height, width, i);
      }

      // UP
      while (height > mid - step) {
        if (breaker(i)) break;
        height -= 1;
        i = getI(height, width, i);
        setCoordinate(height, width, i);
      }

      // LEFT
      while (width > mid - step) {
        if (breaker(i)) break;
        width -= 1;
        i = getI(height, width, i);
        setCoordinate(height, width, i);
      }

      // DOWN
      while (height < mid + step) {
        if (breaker(i)) break;
        height += 1;
        i = getI(height, width, i);
        setCoordinate(height, width, i);
      }

      step += 1;
    }

    return { distance, breakNum };
  };

  render() {
    return (
      <div>
        <h3>Day 3: Spiral Memory</h3>
        <p>Manhattan Distance: {this.spiralArray(this.props.input).distance}</p>
        <p>Next Adjacent Sums: {this.spiralArray(this.props.input, 'sum').breakNum}</p>
      </div>
    );
  }
}

Day3.propTypes = {
  input: PropTypes.number,
};

Day3.defaultProps = {
  input: 25,
};

export default Day3;
