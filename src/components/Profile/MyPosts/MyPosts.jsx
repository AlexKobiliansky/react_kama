import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

function MyPosts(){
    return (
            <div>

                My Posts
                <div>
                    <textarea></textarea>
                    <button>Add post </button>
                    <button>Remove </button>
                </div>
                <div>
                   <Post message="Hi, this is my first post"/>
                   <Post message="How are you?"/>
                   <Post message="I'm so excited to be there"/>
                </div>
            </div>
        )

}

export default MyPosts;