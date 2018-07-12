import React from 'react';
import movieInput from '../../src/reducers/movieInput';

describe('movieInput', () => {
  it('Executes SET_MOVIE_STRING action', () => {
    const initialState = 'hello';
    const action = {
      type: 'SET_MOVIE_STRING',
      movieString: 'batman'
    };

    const expectedState = 'batman';

    const outputState = movieInput(initialState, action);

    expect(outputState).toEqual(expectedState);
  });

  it('Executes default case', () => {
    const action = {
      type: 'XXX',
      movieString: 'batman'
    };

    const expectedState = '';

    const outputState = movieInput(undefined, action);

    expect(outputState).toEqual(expectedState);
  });
});
