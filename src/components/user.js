import React from "react"
import { connect } from "dva"


const namespace = "mn_login"
const mapStateToProps = state => {
  const { loginUser } = state[namespace]
  return {
    loginUser: loginUser,
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

class UserProfile0 extends React.Component {
  render() {

    return (
      <div>
        <span>{"当前用户:" + this.props.loginUser.userName}</span>
      </div>
    )
  }
}
const UserProfile = connect(mapStateToProps, mapDispatchToProps)(UserProfile0)

export { UserProfile }
