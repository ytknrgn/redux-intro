import React from 'react';
import { setMovieString } from '../../src/actions';

describe('actions', () => {
  it('setMovieString returns expected action', () =>{
    const action = setMovieString('hello');

    const expectedAction = {
      type: 'SET_MOVIE_STRING',
      movieString: 'hello'
    };

    expect(action).toEqual(expectedAction);
  });
});
