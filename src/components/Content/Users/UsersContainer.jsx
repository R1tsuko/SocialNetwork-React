import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { follow, setUsersData, unFollow, setUsersDataFetching } from "../../../redux/reducers/usersReducer";
import Users from "./Users";

class UsersContainer extends React.Component {

    currentPage = 1 // надо бы похорошему это переместить в стейт но скоро рефакторинг тогда и сделается
    //( при уничтожении компонента апдейтить значение 1) эта штука участвует в отрисовке, поэтому все норм

    onScroll = () => {
        this.getUsers(++this.currentPage);
    }

    getUsers(page) {
        this.props.setUsersDataFetching(true);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=10`)
            .then(response => {
                this.props.setUsersData(response.data.items);
                this.props.setUsersDataFetching(false);
            })
    }

    componentDidMount() {

        window.addEventListener('scroll', this.onScroll)

        this.getUsers(1);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll)
    }

    render() {
        return <Users
            usersData={this.props.usersData}
            unFollow={this.props.unFollow}
            follow={this.props.follow} 
            isFetching={this.props.isFetching}/>
    }
}

const mapStateToProps = (state) => {
    return {
        usersData: state.usersPage.usersData,
        isFetching: state.usersPage.isFetching,
    }
}

export default connect(mapStateToProps, {
    follow,
    unFollow,
    setUsersData,
    setUsersDataFetching,
})(UsersContainer);
