import React, { Component } from 'react'
import {
    Form,
    FormGroup,
    Label,
    Button,
    Input, Container } from 'reactstrap';
import shortid from 'shortid';

import { connect } from 'react-redux';
import { addUser, getCareers } from '../actions';
  
class UserRegistration extends Component {
    constructor(props) {
        super(props);
    
        this.state = {};
      }
    
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    componentDidMount = () => {
        this.props.getCareers()
    }

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
        <Form>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Input type="number" name="code" id="code" placeholder="User ID" onChange={this.handleChange} />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Input type="select" name="plan" id="plan" onChange={this.handleChange}>
                    {
                        this.props.careerList.map(career => <option key={career.id}>{career.name}</option>)
                    }
                </Input>
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Input type="text" name="fullName" id="fullName" placeholder="Full Name" onChange={this.handleChange} />
            </FormGroup>
            <Button onClick={this.handleAddUser} color="success">Save</Button>
        </Form>
    );
    }
}

const mapStateToProps = state => ({careerList: state.careerList.entries}); //adaptador state component

export default connect(
  mapStateToProps,
  { onSubmit: addUser, getCareers }
)(UserRegistration); //HOC, conectando redux con el componente (curry pattern)
