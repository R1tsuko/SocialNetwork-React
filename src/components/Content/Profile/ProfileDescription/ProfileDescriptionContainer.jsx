import React from 'react'
import { connect } from 'react-redux';
import ProfileDescription from './ProfileDescription'
import {getProfile} from '../../../../redux/reducers/profileReducer';
import { withRouter } from 'react-router-dom';

class ProfileDescriptionContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) userId = 2;
        this.props.getProfile(userId);
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
    getProfile,
})(withURLProfileDescriptionContainer)