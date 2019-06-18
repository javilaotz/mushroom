import React, { Component } from "react";
import { Form, FormGroup, Label, Button, Input } from "reactstrap";
import shortid from "shortid";

import { connect } from "react-redux";
import { addManager, getUsers } from "../actions";

class ManagerRegistration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      manager: {},
      users: {}
    };
  }
  componentDidMount = () => {
    this.props.getUsers()
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleAddManager = event => {
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
    if (this.props.error) {
      return "Error al cargar usuarios"
    }

    return (
      <Form inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="users" className="mr-sm-2">
            Users
          </Label>
          <Input
            type="select"
            name="users"
            id="users"
            placeholder="Users"
            onChange={this.handleChange}
          >{
            this.props.users.map(user => <option>{user.name}</option>)
          }
            <option>1</option>
          </Input>
        </FormGroup>
        <Button onClick={this.handleAddPlace} color="success">
          Save
        </Button>
      </Form>
    );
  }
}

const mapStateToProps = state => ({users: state.users.entries, error:state.users.error}); //adaptador state component

export default connect(
  mapStateToProps,
  { onSubmit: addManager, getUsers }
)(ManagerRegistration); //HOC, conectando redux con el componente (curry pattern)
