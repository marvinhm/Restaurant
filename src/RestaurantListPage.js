import React, { Component } from 'react'
import AddRestaurantForm from './AddRestaurantForm';
import RestaurantList from './RestaurantList';
import { Button, Col, Row } from 'react-materialize';

export class RestaurantListPage extends Component {
  state = {
    restaurantNames: [],
    showNewRestaurantForm: false,
  }

  renderRestaurantForm() {
    if (this.state.showNewRestaurantForm) {
      return (
      <AddRestaurantForm onSave={this.handleAddRestaurant}/>
      );
    }
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
    const { restaurantNames } = this.state;
    const handleAddRestaurant = this.handleAddRestaurant;
    const onClickHandler = this.onClickHandler;

    return (
      <div>
        <Row> 
        <Button data-test="addRestaurantButton" type="button" onClick={onClickHandler}>Add Restaurant</Button>
        </Row>
        <Row>
        { this.renderRestaurantForm() }
        </Row>
        <Row>
        <RestaurantList restaurantNames={ restaurantNames }/>
        </Row>
      </div>
    )
  }
}

export default RestaurantListPage;
