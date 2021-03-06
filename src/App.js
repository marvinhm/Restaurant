import React, { Component } from 'react';
import RestaurantListPage from './RestaurantListPage';
import { Col, Row } from 'react-materialize';
export class App extends Component {

  render() {
    return (
        <Row>
          <Col s={12} m={10} l={8} offset="m1 l2">
            <RestaurantListPage/>
          </Col>
        </Row>
    );
  }
}

export default App;
