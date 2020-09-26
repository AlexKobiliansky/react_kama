const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        // {id: 1, photoUrl: 'https://s3.cdn.teleprogramma.pro/wp-content/uploads/2020/01/f9cd095e4b8a640631410b9dbddf5caf.jpg' ,followed: true, fullName: 'Alex', status: 'I am a boss', location: {city: 'Cherkassy', country: 'Ukraine'}},
        // {id: 2, photoUrl: 'https://s3.cdn.teleprogramma.pro/wp-content/uploads/2020/01/f9cd095e4b8a640631410b9dbddf5caf.jpg' ,followed: false, fullName: 'Anna', status: 'I am not a boss', location: {city: 'Moscow', country: 'Russia'}},
        // {id: 3, photoUrl: 'https://s3.cdn.teleprogramma.pro/wp-content/uploads/2020/01/f9cd095e4b8a640631410b9dbddf5caf.jpg' ,followed: false, fullName: 'Sasha', status: 'bla bla bla', location: {city: 'Kyiv', country: 'Ukraine'}},
    ]
}

const usersReducer = (state=initialState, action) => {

    switch(action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})

export default usersReducer;