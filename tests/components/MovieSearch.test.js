import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import MovieSearch from '../../src/components/MovieSearch';

describe('MovieSearch', () => {
  it('captures change input and passes it event handler', () => {
    const event = {
      target: {
        value: 'batman'
      }
    };
    const handleChange = jest.fn()
    const wrapper = shallow(<MovieSearch handleChange={handleChange}/>);
    wrapper.find('input').simulate('change', event);
    expect(handleChange.mock.calls).toEqual([['batman']]);
  });
});
