import React from 'react';
import cx from 'classnames';

const buttons = ['Camel', 'Duck', 'Donut', 'Potato', 'Mash potato'];

class VotingButtons extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      selectedButton: undefined
    };
  }

  handleClick(button){
    this.setState({
      selectedButton: button
    })
  }

  render(){
    return (
      <div>
        {buttons.map( button => {
          const classes = cx('voting-button', {
            'voting-button--selected': this.state.selectedButton === button
          });

          return (
            <button
              key={button}
              className={classes}
              onClick={event => this.handleClick(button)}
            >{button}</button>
          );
        })}
      </div>
    );
  }
}

export default VotingButtons;
