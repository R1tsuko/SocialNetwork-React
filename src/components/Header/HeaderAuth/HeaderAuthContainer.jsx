import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { setAuthData } from "../../../redux/reducers/authReducer";
import HeaderAuth from "./HeaderAuth";


class HeaderAuthContainer extends React.Component {

    componentDidMount() {
        axios
            .get('https://social-network.samuraijs.com/api/1.0/auth/me', { withCredentials: true, })
            .then(response => {
                if (!response.data.resultCode) {
                    let { id, email, login } = response.data.data
                    this.props.setAuthData(id, email, login)
                }
            })
    }

    render() {
        return <HeaderAuth
            isAuth={this.props.authData.isAuth}
            login={this.props.authData.login}
        />
    }
}

const mapStateToProps = (state) => ({
    authData: state.auth,
})

export default connect(mapStateToProps, {
    setAuthData,
})(HeaderAuthContainer);
