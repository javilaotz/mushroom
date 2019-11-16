import React, { Component } from 'react'
import { Row, Col, Container } from 'reactstrap' 

import { connect } from 'react-redux';

import UserRegistration from './UserRegistration'
import UserList from './UserList'

class Users extends Component {
 
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


const mapStateToProps = state => ({}); //adaptador state component

export default connect(
  mapStateToProps,
  {  }
)(Users); //HOC, conectando redux con el componente (curry pattern)
