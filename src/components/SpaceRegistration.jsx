import React, { Component } from "react";
import { Form, FormGroup, Label, Button, Input } from "reactstrap";
import shortid from "shortid";

import { connect } from "react-redux";
import { addPlace } from "../actions";

class SpaceRegistration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      place: {}
    };
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleAddPlace = event => {
    event.preventDefault();
    this.props.onSubmit({
      id: shortid.generate(),
      placeId: this.state.door,
      building: this.state.building,
      placeName: this.state.placeName,
      category: this.state.category
    });
  };
  render() {
    return (
      <Form inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="door" className="mr-sm-2">
            Place ID
          </Label>
          <Input
            type="text"
            name="door"
            id="door"
            placeholder="Place ID"
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup className="mb-6 mr-sm-6 mb-sm-0">
          <Label for="building">Building</Label>
          <Input
            type="text"
            name="building"
            id="building"
            placeholder="Building"
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="placeName" className="mr-sm-2">
            Place Name
          </Label>
          <Input
            type="text"
            name="placeName"
            id="placeName"
            placeholder="Place Name"
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="category" className="mr-sm-2">
            Category
          </Label>
          <Input
            type="select"
            name="category"
            id="category"
            placeholder="Category"
            onChange={this.handleChange}
          >
            <option>Conference Room</option>
            <option>Computer</option>
            <option>Study Room</option>
            <option>Empty Room</option>
            <option>Class Room</option>
            <option>Lab</option>
            <option>Parking</option>
          </Input>
        </FormGroup>
        <Button onClick={this.handleAddPlace} color="success">
          Save
        </Button>
      </Form>
    );
  }
}

const mapStateToProps = state => ({}); //adaptador state component

export default connect(
  mapStateToProps,
  { onSubmit: addPlace }
)(SpaceRegistration); //HOC, conectando redux con el componente (curry pattern)
