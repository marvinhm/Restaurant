import React, { Component } from 'react'
import AddRestaurantForm from './AddRestaurantForm';
import RestaurantList from './RestaurantList';
import { Button, Col, Row } from 'react-materialize';

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
        <Row>
        <Button data-test="addRestaurantButton" type="button" onClick={onClickHandler}>Add Restaurant</Button>
        </Row>
        <Row>
        { showNewRestaurantForm ? <AddRestaurantForm onSave={handleAddRestaurant}/> : null}
        </Row>
        <Row>
        <RestaurantList restaurantNames={ restaurantNames }/>
        </Row>
      </div>
    )
  }
}

export default RestaurantListPage;
