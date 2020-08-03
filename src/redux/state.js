
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

    // addPost() {
    //     let newPost = {
    //         id: 5,
    //         message: this._state.profilePage.newPostText,
    //         likesCount: 0
    //     };
    //
    //     this._state.profilePage.posts.push(newPost);
    //     this._state.profilePage.newPostText = '';
    //     this._callSubscriber(this._state);
    // },
    // updateNewPostText(newText) {
    //     this._state.profilePage.newPostText = newText;
    //     this._callSubscriber(this._state);
    // },


    dispatch(action) {
        if(action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }

}

export default store;

window.store = store;