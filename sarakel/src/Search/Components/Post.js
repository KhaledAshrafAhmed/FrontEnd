import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Post.module.css'; // Import CSS module
import { BiUpvote, BiDownvote } from "react-icons/bi";
import { useAuth } from "../../HomePage/Components/AuthContext.js";

function Post() {
    const [posts, setPosts] = useState([]);
    const { token } = useAuth();

    useEffect(() => {
        async function fetchPosts() {
            try {
                const response = await axios.post('http://localhost:5000/searchBy/posts', { keyword: "test" }, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                const postsData = response.data.postsResults;
                setPosts(postsData);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        }
        
        fetchPosts();
    }, [token]);

    const formatTime = (timestamp) => {
        const date = new Date(timestamp);
        const hours = date.getHours();
        const minutes = date.getMinutes();
        // Format the time as desired, for example: 23:38
        return `${hours}:${minutes}`;
    };

    return (
        <div className={styles.PostsContainer}>
            {posts.map(post => (
                <div className={`${styles.Post} ${post.isLocked ? styles.LockedPost : ''}`} key={post._id}>
                    <div className={styles.PostHeader}>
                        {post.user && ( // Check if post.user exists
                            <>
                                <img src={post.user?.image} alt='User Avatar' className={styles.LogoUp1} />
                                <span className={styles.Username1}>{post.user.name}</span>
                            </>
                        )}
                        <div className={styles.PostTime}>
                        <span className={styles.PostTime}>{formatTime(post.createdAt)}</span>                        </div>
                    </div>
                    <div className={styles.PostContent}>
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>
                        {post.media && ( // Check if media exists
                            <div className={styles.PostMedia}>
                                {Array.isArray(post.media) ? (
                                    post.media.map((media, index) => (
                                        <img src={media} key={index} alt={`Media ${index}`} />
                                    ))
                                ) : (
                                    <img src={post.media} alt='Media' />
                                )}
                            </div>
                        )}
                    </div>
                    <div className={styles.PostFooter}>
                        <span className={styles.Votes}><BiUpvote/> {post.upvotes}</span>
                        <span className={styles.Votes}><BiDownvote/> {post.downvotes}</span>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Post;
