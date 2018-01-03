import React from 'react';
import PropTypes from 'prop-types';

class Day5 extends React.Component {
  navigateMaze = maze => {
    let count = 0;

    for (let i = 0; i < maze.length; ) {
      const distance = maze[i];
      maze[i] += 1; // eslint-disable-line no-param-reassign
      count += 1;
      i += distance;
    }

    return count;
  };

  render() {
    return (
      <div>
        <h3>Day 5: A Maze of Twisty Trampolines, All Alike</h3>
        <p>Jumps required to escape maze: {this.navigateMaze(this.props.maze)}</p>
      </div>
    );
  }
}

Day5.propTypes = {
  maze: PropTypes.arrayOf(PropTypes.number),
};

Day5.defaultProps = {
  maze: [0, 3, 0, 1, -3],
};

export default Day5;
