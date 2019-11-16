import React, { Component } from 'react'
import { Row, Col, Container } from 'reactstrap' 

import ManagerRegistration from './ManagerRegistration'

export default class Managers extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col sm="12" md={{ size: 3, offset: 0 }}>
                        <ManagerRegistration/>
                    </Col>
                    <Col sm="12" md={{ size: 9, offset: 0 }}>
                        
                    </Col>
                </Row>
            </Container>
        )
    }
}
