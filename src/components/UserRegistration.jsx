import React, { Component } from 'react'
import {
    Form,
    FormGroup,
    Label,
    Button,
    Input } from 'reactstrap';
import shortid from 'shortid';

import { connect } from 'react-redux';
import { addUser } from '../actions';
  
class UserRegistration extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          
        };
      }
    
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleAddUser = event => {
        event.preventDefault();
        this.props.onSubmit({
            id: shortid.generate(),
            code: this.state.code,
            plan: this.state.plan,
            fullName: this.state.fullName
          });
    }
    render() {
    return (
        <Form inline>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="code" className="mr-sm-2">Code</Label>
                <Input type="number" name="code" id="code" placeholder="Stude code" onChange={this.handleChange} />
            </FormGroup>
            <FormGroup className="mb-6 mr-sm-6 mb-sm-0">
            <Label for="plan">Career Plan</Label>
                <Input type="select" name="plan" id="plan" onChange={this.handleChange}>
                    <option>10004 - Name of Career #1 </option>
                    <option>10005 - Name of Career #2 </option>
                    <option>10006 - Name of Career #3 </option>
                    <option>10007 - Name of Career #4 </option>
                    <option>10008 - Name of Career #5 </option>
                </Input>
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="fullName" className="mr-sm-2">Name</Label>
                <Input type="text" name="fullName" id="fullName" placeholder="Full Name" onChange={this.handleChange} />
            </FormGroup>
            <Button onClick={this.handleAddUser} color="success">Save</Button>
        </Form>
    );
    }
}

const mapStateToProps = state => ({}); //adaptador state component

export default connect(
  mapStateToProps,
  { onSubmit: addUser }
)(UserRegistration); //HOC, conectando redux con el componente (curry pattern)
