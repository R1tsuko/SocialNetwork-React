import classes from './Users.module.css'
import img from '../../../assets/images/defaultUserImg.png'
import { NavLink } from 'react-router-dom'

let Users = (props) => {


    return (<div>
        {
            props.usersData.map((user) => {
                return <div className={classes.users}>
                    <NavLink to ={`/profile/${user.id}`}>
                        <img src={user.photos.small === null ? img : user.photos.small}></img>
                    </NavLink>
                    {
                        user.followed ?
                            <button onClick={() => props.unFollow(user.id)}>UNFOLLOW</button>
                            : <button onClick={() => props.follow(user.id)}>FOLLOW</button>
                    }
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                    <div>{user.cityName}</div>
                    <div>{user.countryName}</div>
                </div>
            })
        }
        <div>
            {
                (props.isFetching && <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-OfnxW35SW71VDb1k2sbnQ_JMJC8FFLD4yA&usqp=CAU'></img>)
            }
        </div>
    </div >);
}

export default Users;