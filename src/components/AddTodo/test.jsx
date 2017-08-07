/* global describe, it, expect, jest, beforeEach */
import React from 'react';
import { shallow, mount } from 'enzyme';
import AddTodo from '.';

describe('Add ToDo Component', () => {
  let component = null;
  const submitMock = jest.fn();

  beforeEach(() => {
    component = shallow(<AddTodo submitTodo={submitMock} />);
  });

  it('Should render successfully', () => {
    expect(component.exists()).toEqual(true);
  });

  it('Should have one input', () => {
    expect(component.find('.todo-input').length).toEqual(1);
  });

  describe('Add Todo button', () => {
    it('Should call the submitTodo function when clicked', () => {
      component = mount(<AddTodo submitTodo={submitMock} />);

      expect(submitMock.mock.calls.length).toEqual(0);
      component.find('form').simulate('submit');
      expect(submitMock.mock.calls.length).toEqual(1);
    });
  });
});
