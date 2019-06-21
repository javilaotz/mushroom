import React, { Component } from "react";
import { Form, FormGroup, Label, Button, Input } from "reactstrap";
import shortid from "shortid";

import { connect } from "react-redux";
import { addPlace, getBuildings } from "../actions";

class SpaceRegistration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      place: {}
    };
  }
  componentDidMount = () => {
    this.props.getBuildings()
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
      <Form>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Input
            type="text"
            name="door"
            id="door"
            placeholder="Place ID"
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Input
            type="select"
            name="building"
            id="building"
            placeholder="Building"
            onChange={this.handleChange}>
            {
              this.props.buildings.map(building => <option key={building.id}>{building.name}</option>)
            }
          </Input>
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Input
            type="text"
            name="placeName"
            id="placeName"
            placeholder="Place Name"
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
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

const mapStateToProps = state => ({buildings: state.buildings.entries}); //adaptador state component

export default connect(
  mapStateToProps,
  { onSubmit: addPlace, getBuildings }
)(SpaceRegistration); //HOC, conectando redux con el componente (curry pattern)
