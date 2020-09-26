import React from "react";
import styles from './Users.module.css'

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://s3.cdn.teleprogramma.pro/wp-content/uploads/2020/01/f9cd095e4b8a640631410b9dbddf5caf.jpg',
                followed: true,
                fullName: 'Alex',
                status: 'I am a boss',
                location: {city: 'Cherkassy', country: 'Ukraine'}
            },
            {
                id: 2,
                photoUrl: 'https://s3.cdn.teleprogramma.pro/wp-content/uploads/2020/01/f9cd095e4b8a640631410b9dbddf5caf.jpg',
                followed: false,
                fullName: 'Anna',
                status: 'I am not a boss',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 3,
                photoUrl: 'https://s3.cdn.teleprogramma.pro/wp-content/uploads/2020/01/f9cd095e4b8a640631410b9dbddf5caf.jpg',
                followed: false,
                fullName: 'Sasha',
                status: 'bla bla bla',
                location: {city: 'Kyiv', country: 'Ukraine'}
            },
        ])
    }


    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} alt="alt" className={styles.userPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                                : <button onClick={() => props.follow(u.id)}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users;