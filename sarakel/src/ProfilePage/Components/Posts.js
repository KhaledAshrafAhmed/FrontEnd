import React, { useState, useEffect } from 'react';
import axios from 'axios';
import style from './Posts.module.css';
import { BiUpvote, BiDownvote } from "react-icons/bi";
import { GoReply } from "react-icons/go";
import { LuShare } from "react-icons/lu";
import { useAuth } from "../../HomePage/Components/AuthContext.js";

function Posts() {
  const { token } = useAuth();
  const [userPosts, setUserPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState(null);

  useEffect(() => {
    if (token) {
      axios.get('http://127.0.0.1:5000/api/v1/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => {
        setUsername(response.data.user.username);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
        setLoading(false); // Set loading to false in case of error
      });
    }
  }, [token]);

  useEffect(() => {
    const fetchUserPosts = async () => {
      try {
        if (username) {
          const response = await axios.get(`http://localhost:5000/api/user/${username}/submitted`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUserPosts(response.data.posts);
          setLoading(false);
          console.log('User posts fetched successfully');
        }
      } catch (error) {
        console.error('Error fetching user posts:', error);
        setLoading(false);
      }
    };

    if (username) {
      fetchUserPosts();
    }
  }, [token, username]);

  return (
    <div className={style.overviewPostComment1}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        userPosts.map(post => (
          <div className={style.post} key={post._id}>
            <h3 className={style.postTitle}>{post.title}</h3>
            <p className={style.postContent}>{post.content}</p>
            <div className={style.postActions}>
              <p><BiUpvote/> {post.upvotes}</p>
              <p><BiDownvote/> {post.downvotes}</p>
              <p>Comments: {post.commentCount}</p>
            </div>
            {/* Render other post details as needed */}
          </div>
        ))
      )}
    </div>
  );
}

export default Posts;
