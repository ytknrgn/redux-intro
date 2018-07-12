import React from 'react';
import Welcome from '../../src/components/Welcome';
import renderer from 'react-test-renderer';

describe('Welcome', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(<Welcome />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
