import classes from './ProfileDescription.module.css'

const ProfileDescription = (props) => {
    return (<div className={classes.profileDescription}>
        <div className={classes.imgContainer}><img src={props.profile?.photos?.large}></img></div>
        <div className={classes.description}>
            <div>{props.profile?.fullName}</div>
            <div className={classes.aboutMe}>{props.profile?.aboutMe}</div>
        </div>
    </div>
    )
}

export default ProfileDescription