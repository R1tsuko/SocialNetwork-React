import React from "react";
import { connect } from "react-redux";
import { follow, setUsersData, unFollow, setUsersDataFetching, toggleIsFollowingProgress } from "../../../redux/reducers/usersReducer";
import { getUsersRequest } from "../../../serverRequests/usersRequests";
import Users from "./Users";

class UsersContainer extends React.Component {

    currentPage = 1 // костыль, пофикшу когда посомтрю хуки, но так то нужно засунуть или в локал стейт или в редаксовский

    onScroll = () => {
        ++this.currentPage;
        this._loadUsers();
    }

    _loadUsers() {
        this.props.setUsersDataFetching(true);
        getUsersRequest(this.currentPage).then(response => {
            this.props.setUsersData(response.items);
            this.props.setUsersDataFetching(false);
        })
    }

    componentDidMount() {

        window.addEventListener('scroll', this.onScroll)

        this._loadUsers();
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
            followingProgressUsers={this.props.followingProgressUsers}
            toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}/>
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
    setUsersData,
    setUsersDataFetching,
    toggleIsFollowingProgress,
})(UsersContainer);
