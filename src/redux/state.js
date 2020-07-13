import {rerenderEntireTree} from "../render";

let state = {
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
}

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state)
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state)
}

export default state;