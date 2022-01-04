import axios from "axios";
import React from "react";
import classes from './Users.module.css'

class Users extends React.Component {
    getUsers = async () => {
        const response = await axios.get("https://social-network.samuraijs.com/api/1.0/users")
        this.props.setUsers([...response.data.items])
    }
    componentDidMount() {
        this.getUsers()
    }
    render = () => (
        <div>
            {this.props.users.map((user) => (
                <div key={user.id} className={classes.userContent}>
                    <div className={classes.userHeader}>
                        <div className={classes.userAvatar}>
                            <img src={user.photos.small || "https://as1.ftcdn.net/v2/jpg/03/46/83/96/1000_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"} width='50px'/>
                        </div>
                        <div className={classes.userFollowed}>
                            {user.followed ?
                                <button
                                    onClick={() => {
                                        this.props.unfollow(user.id)
                                    }}
                                >Unfollow</button>
                            :
                                <button
                                    onClick={() => {
                                        this.props.follow(user.id)
                                    }}
                                >Follow</button>
                            }
                        </div>
                    </div>
                    <div className={classes.userInfo}>
                        <div>
                            <div>{user.name}</div>
                            <div>{user.status || 'happy'}</div>
                        </div>
                        <div>
                            <div>{user.location?.city || 'city'}</div>
                            <div>{user.location?.country || 'country'}</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Users