import React from 'react';
import PropTypes from 'prop-types';

class D extends React.Component {
  render(){
    return (
      <div>
        This is D and the answer is {this.context.answer}
      </div>
    );
  }
}

D.contextTypes = {
  answer: PropTypes.number
};

export default D;
