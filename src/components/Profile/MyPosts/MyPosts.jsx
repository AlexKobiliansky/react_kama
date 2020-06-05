import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

function MyPosts(){

    let postsData = [
        {id: 1, message: "Hi, this is my first post", likesCount: "12"},
        {id: 1, message: "How are you?", likesCount: "5"},
        {id: 1, message: "I'm so excited to be there", likesCount: "600"}
    ]

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
                   <Post message={postsData[0].message} likesCount={postsData[0].likesCount} id={postsData[0].id}/>
                   <Post message={postsData[1].message} likesCount={postsData[1].likesCount} id={postsData[1].id}/>
                   <Post message={postsData[2].message} likesCount={postsData[2].likesCount} id={postsData[2].id}/>
                </div>
            </div>
        )
}

export default MyPosts;