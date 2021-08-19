import React from "react";
import { connect } from "react-redux";
import { authenticate } from "../../../redux/reducers/authReducer";
import HeaderAuth from "./HeaderAuth";


class HeaderAuthContainer extends React.Component {

    componentDidMount() {
        this.props.authenticate();
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
    authenticate,
})(HeaderAuthContainer);
