import React, { Component } from 'react'
import { Table } from 'reactstrap'

import { connect } from "react-redux";
import { getUsers } from "../actions";

class UserList extends Component {
    render() {
        return (
            <div>
            <Table>
                <thead>
                <tr>
                    <th>Code</th>
                    <th>Name</th>
                    <th>Career</th>
                </tr>
                </thead>
                <tbody>
                {this.props.users.map(user => (
                    <tr key={user.id}>
                        <th>{user.code}</th>
                        <th>{user.fullName}</th>
                        <th>{user.plan}</th>
                    </tr>
                ))}
                </tbody>
            </Table>
            </div>
        )
    }
}

const mapStateToProps = state => ({users: state.users.entries, error:state.users.error}); //adaptador state component

export default connect(
  mapStateToProps,
  { getUsers }
)(UserList); //HOC, conectando redux con el componente (curry pattern)
