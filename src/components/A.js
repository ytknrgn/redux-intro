import React from 'react';
import PropTypes from 'prop-types';
import B from './B';

class A extends React.Component {
  getChildContext(){
    return {
      answer: 42
    };
  }

  render(){
    return (
      <div>
        This is A
        <B />
      </div>
    );
  }
}

A.childContextTypes = {
  answer: PropTypes.number
}

export default A;
