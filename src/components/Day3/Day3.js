import React from 'react';

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

  spiralArray = (max = 5 * 5) => {
    const matrix = this.generateMatrix(Math.sqrt(max));

    const sequence = [];
    for (let i = 1; i <= max; i += 1) {
      sequence.push(i);
    }

    const width = Math.sqrt(max);
    const mid = Math.floor(width / 2);

    matrix[mid][mid] = 1;
    let x = mid;
    let y = mid;
    let depth = mid + 1;
    let shallow = mid - 1;

    for (let j = 1; j < max; ) {
      // RIGHT
      while (y < depth) {
        if (j >= max) {
          break;
        }
        j += 1;
        y += 1;
        matrix[x][y] = j;
      }

      // UP
      while (x > shallow) {
        if (j >= max) {
          break;
        }
        j += 1;
        x -= 1;
        matrix[x][y] = j;
      }

      // LEFT
      while (y > shallow) {
        if (j >= max) {
          break;
        }
        j += 1;
        y -= 1;
        matrix[x][y] = j;
      }

      // DOWN
      while (x < depth) {
        if (j >= max) {
          break;
        }
        j += 1;
        x += 1;
        matrix[x][y] = j;
      }

      depth += 1;
      shallow -= 1;
    }

    console.log(matrix);
    return matrix;
  };

  render() {
    return (
      <div>
        <h3>Day 3: Spiral Memory</h3>
        <p>{this.spiralArray()}</p>
      </div>
    );
  }
}

export default Day3;
