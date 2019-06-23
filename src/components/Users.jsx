import React, { Component } from 'react'
import { Row, Col, Container, Button, Modal, ModalHeader, ModalBody, ModalFooter, ListGroup, ListGroupItem } from 'reactstrap' 

import { connect } from 'react-redux';
import { toggle } from '../actions';

import UserRegistration from './UserRegistration'
import UserList from './UserList'

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
          buttonLabel: "Add User"
        };
      }


      getModal = () => {
          return (
            <Modal isOpen={this.props.modal} toggle={this.props.toggle} >
            <ModalHeader toggle={this.toggle}>Add User</ModalHeader>
            <ModalBody>
                
            </ModalBody>
            </Modal>
          );
      }
    
    render() {
        return (
            <Container>
                <Row>
                    <Col sm="12" md={{ size: 3, offset: 0 }}>
                        <UserRegistration/>
                    </Col>
                    <Col sm="12" md={{ size: 9, offset: 0 }}>
                        <UserList/>
                    </Col>
                </Row>
            </Container>
        )
    }
}


const mapStateToProps = state => ({modal: state.toggle}); //adaptador state component

export default connect(
  mapStateToProps,
  { toggle }
)(Users); //HOC, conectando redux con el componente (curry pattern)
