import React from 'react';
import { mapStateToProps } from '../../src/containers/MovieSearchContainer';

describe('mapStateToProps', () => {
  it('extracts movieInput from state', () =>{
    const reduxState = {
      movieInput: 'batman'
    };

    const expectedOutput = {
      movieString: 'batman'
    };

    const output = mapStateToProps(reduxState);

    expect(output).toEqual(expectedOutput);
  });
});
