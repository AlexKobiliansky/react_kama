import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, this is my first post", likesCount: "12"},
                {id: 2, message: "How are you?", likesCount: "5"},
                {id: 3, message: "I'm so excited to be there", likesCount: "600"}
            ],
            newPostText: 'Введите сообщение'
        },
        dialogsPage: {
            messages: [
                {id: 1, message: "Hi"},
                {id: 2, message: "How are you?"},
                {id: 3, message: "mother fucker :)"},
            ],
            dialogs: [
                {id: 1, name: "Алексей"},
                {id: 2, name: "Света"},
                {id: 3, name: "Игорь"},
                {id: 4, name: "Саша"},
                {id: 5, name: "Максим"},
                {id: 6, name: "Дисней"},
            ],
            newMessageBody: ''
        }
    },
    _callSubscriber()  {
        console.log('state was changed!');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer; //Паттерн обсервер
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);

    }

}

export default store;

window.store = store;