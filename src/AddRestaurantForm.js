import React, { Component } from 'react'
import { Button } from 'react-materialize';
import M, { Input } from 'materialize-css';

export class AddRestaurantForm extends Component {

  state = {
    inputText: ''
  }

  componentDidMount() {
    M.updateTextFields();
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
        <div className="input-field col s12">
          <input id="restaurant" label="Restaurant name" value={ inputText } onChange={ this.handleTextChange } data-test="newRestaurantName" type="text"/>
          <label htmlFor="restaurant">Restaurant name</label>
          <span className="helper-text" data-error="wrong" data-success="right">Helper text</span>
        </div>

        <Button 
          data-test="saveRestaurantButton" 
          type="button" 
          onClick={this.handleSave}>
          Save
        </Button>
      </div>
    );
  }
}

export default AddRestaurantForm;
