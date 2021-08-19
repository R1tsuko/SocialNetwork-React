import React from "react";
import { connect } from "react-redux";
import { follow, unFollow, getUsers } from "../../../redux/reducers/usersReducer";
import Users from "./Users";

class UsersContainer extends React.Component {

    currentPage = 1 // костыль, пофикшу когда посомтрю хуки, но так то нужно засунуть или в локал стейт или в редаксовский

    onScroll = () => {
        ++this.currentPage;
        this.props.getUsers(this.currentPage);
    }

    componentDidMount() {

        window.addEventListener('scroll', this.onScroll)

        this.props.getUsers(this.currentPage);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll)
    }

    render() {
        return <Users
            usersData={this.props.usersData}
            unFollow={this.props.unFollow}
            follow={this.props.follow} 
            isFetching={this.props.isFetching}
            followingProgressUsers={this.props.followingProgressUsers}/>
    }
}

const mapStateToProps = (state) => {
    return {
        usersData: state.usersPage.usersData,
        isFetching: state.usersPage.isFetching,
        followingProgressUsers: state.usersPage.followingProgressUsers,
    }
}
export default connect(mapStateToProps, {
    follow,
    unFollow,
    getUsers,
})(UsersContainer);
