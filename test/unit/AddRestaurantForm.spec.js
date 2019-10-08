import React from 'react';
import { mount } from 'enzyme';
import AddRestaurantForm from '../../src/AddRestaurantForm';


describe("Add Restaurant", () => {
  describe("Clicking the save button", () => {
    it("calls the onSave handler", ()=> {
      const saveHandler = jest.fn();

      const wrapper = mount(<AddRestaurantForm onSave={saveHandler}/>);

      wrapper.find('[data-test="newRestaurantName"]')
        .simulate('change', { target: { value: 'Meat Co.' } });

      wrapper.find('[data-test="saveRestaurantButton"]')
      .simulate('click');

      expect(saveHandler).toHaveBeenCalledWith('Meat Co.');
    });
  });
});