import React, { Component } from 'react'
import AddRestaurantForm from './AddRestaurantForm';
import RestaurantList from './RestaurantList';

export class RestaurantListPage extends Component {
  state = {
    restaurantNames: []
  }

  handleAddRestaurant = (restaurant) => {
    this.setState(state => ({
      restaurantNames: [
        ...state.restaurantNames,
        restaurant,
      ]
    }))
  }

  render() {
    const { restaurantNames } = this.state;
    const handleAddRestaurant  = this.handleAddRestaurant;
    return (
      <div>
        <button data-test="addRestaurantButton" type="button" className="">Add Restaurant</button>
        <AddRestaurantForm onSave={handleAddRestaurant}/>
        <RestaurantList restaurantNames={ restaurantNames }/>
      </div>
    )
  }
}

export default RestaurantListPage;
