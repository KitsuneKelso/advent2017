import React from 'react';
import PropTypes from 'prop-types';

class Day4 extends React.Component {
  validatePassphrases = passphrases =>
    passphrases.reduce((count, phrase) => {
      const segments = phrase.split(' ');

      let duplicates = 0;

      for (let i = 0; i <= segments.length; i += 1) {
        const temp = [...segments];
        temp.splice(i, 1);
        if (temp.includes(segments[i])) duplicates += 1;
      }

      return duplicates === 0 ? count + 1 : count;
    }, 0);

  render() {
    return (
      <div>
        <h3>Day 4: High-Entropy Passphrases</h3>
        <p>Number of valid Passphrases: {this.validatePassphrases(this.props.passphrases)}</p>
      </div>
    );
  }
}

Day4.propTypes = {
  passphrases: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Day4;
