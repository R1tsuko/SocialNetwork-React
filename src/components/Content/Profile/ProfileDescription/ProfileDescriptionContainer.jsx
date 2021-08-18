import axios from 'axios';
import React from 'react'
import { connect } from 'react-redux';
import ProfileDescription from './ProfileDescription'
import {setProfile} from '../../../../redux/reducers/profileReducer';
import { withRouter } from 'react-router-dom';

class ProfileDescriptionContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) userId = 2;
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setProfile(response.data)
            })
    }

    render() {
        return <ProfileDescription profile={this.props.profile}/>
    }
}

let withURLProfileDescriptionContainer = withRouter(ProfileDescriptionContainer);

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})

export default connect(mapStateToProps, {
    setProfile
})(withURLProfileDescriptionContainer)