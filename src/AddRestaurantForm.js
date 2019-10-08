import React, { Component } from 'react'

export class AddRestaurantForm extends Component {

  state = {
    inputText: ''
  }
  
  handleTextChange = (e) => {
    this.setState({
      inputText: e.target.value
    });
  }

  handleSave = () => {
    const { inputText } = this.state;
    const { onSave } = this.props;

    onSave(inputText);
  }

  render() {
    const { inputText } = this.state;
    return (
      <div>
        <input data-test="newRestaurantName" value={ inputText } onChange={ this.handleTextChange } placeholder="Restaurant Name"/>
        <button data-test="saveRestaurantButton" type="button" onClick={this.handleSave}>Save</button>
      </div>
    )
  }
}

export default AddRestaurantForm;
