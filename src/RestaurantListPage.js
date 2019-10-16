import React, { Component } from 'react'
import AddRestaurantForm from './AddRestaurantForm';
import RestaurantList from './RestaurantList';
import { Button } from 'react-materialize';

export class RestaurantListPage extends Component {
  state = {
    restaurantNames: [],
    showNewRestaurantForm: false,
  }

  handleAddRestaurant = (restaurant) => {
    this.setState(state => ({
      showNewRestaurantForm: false,
      restaurantNames: [
        ...state.restaurantNames,
        restaurant,
      ]
    }))
  }

  onClickHandler = () => {
    this.setState({
      showNewRestaurantForm: true
    })
  }

  render() {
    const { restaurantNames, showNewRestaurantForm } = this.state;
    const handleAddRestaurant = this.handleAddRestaurant;
    const onClickHandler = this.onClickHandler;

    return (
      <div>
        <Button data-test="addRestaurantButton" type="button" onClick={onClickHandler}>Add Restaurant</Button>
        { showNewRestaurantForm ? <AddRestaurantForm onSave={handleAddRestaurant}/> : null}
        
        <RestaurantList restaurantNames={ restaurantNames }/>
      </div>
    )
  }
}

export default RestaurantListPage;
