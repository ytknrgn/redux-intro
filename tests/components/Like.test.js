import React from 'react';
import Like from '../../src/components/Like';
import { shallow } from 'enzyme'; // import shallow renderer from enzyme

describe('Like component', () => {
  it('starts with a count of 0', () =>{
    const wrapper = shallow(<Like />); // perform shallow render of Like
    const text = wrapper.find('span').text(); // extract text in span
    expect(text).toEqual('Movie has 0 likes');
  });

  it('increments likes', () => {
    const wrapper = shallow(<Like />);
    const button = wrapper.find('button').simulate('click');
    const likes = wrapper.state('likes');
    expect(likes).toEqual(1);
  });

  // it('increments likes', () => {
  //   const wrapper = shallow(<Like />);
  //   const button = wrapper.find('button').simulate('click');
  //   const text = wrapper.find('span').text();
  //   expect(text).toEqual('Movie has 1 likes');
  // });
});
