import profileReducer, {addPostActionCreator, deletePost} from './profile-reducer';
import React from 'react';

let state = {
    posts: [
        {id: 1, message: "Hi, this is my first post", likesCount: "12"},
        {id: 2, message: "How are you?", likesCount: "5"},
        {id: 3, message: "I'm so excited to be there", likesCount: "600"}
    ]
}

test('length of posts should be incremented', () => {
    let action = addPostActionCreator("i am ready to fire");
    let newState = profileReducer(state,action);
    expect(newState.posts.length).toBe(4);
});


test('message of new post should be correct', () => {
    let action = addPostActionCreator("i am ready to fire");
    let newState = profileReducer(state,action);
    expect(newState.posts[3].message).toBe("i am ready to fire");
});

test('after deleting length of messages should be decrement', () => {
    let action = deletePost(1);
    let newState = profileReducer(state,action);
    expect(newState.posts.length).toBe(2);
});

test('after deleting length of messages shouldn`t be decrement if id is incorrect', () => {
    let action = deletePost(1000);
    let newState = profileReducer(state,action);
    expect(newState.posts.length).toBe(3);
});

