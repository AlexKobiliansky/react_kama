import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

function MyPosts(){

    let posts = [
        {id: 1, message: "Hi, this is my first post", likesCount: "12"},
        {id: 1, message: "How are you?", likesCount: "5"},
        {id: 1, message: "I'm so excited to be there", likesCount: "600"}
    ]

    let postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id}/>)

    return (
            <div className={s.postsBlock}>
                <h3>My Posts</h3>
                <div>
                    <div>
                        <textarea></textarea>
                    </div>
                    <div>
                        <button>Add post </button>
                        <button>Remove </button>
                    </div>
                </div>
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>
        )
}

export default MyPosts;