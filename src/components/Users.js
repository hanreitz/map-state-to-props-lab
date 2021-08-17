import React, { Component } from 'react';
// add any needed imports here
import { connect } from 'react-redux';

class Users extends Component {

  makeUserList(users){
    return users.map(user => {
      return <li>{user.username}</li>
    })
  }

  render() {
    return (
      <div>
        <h3>Users!</h3>
        <ul>
          {this.makeUserList(this.props.users)}
        </ul>
          <p>Current Number of Users: {this.props.userCount}</p>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return { 
    users: state.users,
    userCount: state.users.length 
  }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
