import React, {useState} from "react";
import Comment from "../comment";
import postData from "../../data/postData.js";

import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const FETCH_POSTS_QUERY = gql `
  {
    getPosts {
      id
      title
      content
      user
      createdAt
    }
  }
`

export default function Popup({ ifShow = false }) {
  // query from database
  let myPosts = []
  const { loading, data } = useQuery(FETCH_POSTS_QUERY);
  if (data) {
    myPosts = { data: data.getPosts }.data;
  }

  // get posts from json file
  // const [posts, setPosts] = useState(myPosts);

  const postComponents = myPosts.map(post => {
    return <Comment id={post.id} data={post}/>
  })

  // const addPost = (user, title, content, date) => {
  //   setPosts([...posts, {id: 99, user, title, content, date}])
  // }

  return (
    <div style={{
      position: "absolute",
      zIndex: 4,
      left: 100,
    }}>
      { ifShow &&
        <div style={{
          backgroundColor: "white",
          width: 400,
          height: 400,
          overflow: "auto",
        }}>
          <div className ="ui comments">
            <h3 className="ui dividing header">Posts</h3>
            {loading ? 
            (<h3> loading... </h3>) : 
            (postComponents)}
            <form className="ui reply form">
              <div className="field">
                <textarea></textarea>
              </div>
              <div className="ui blue labeled submit icon button">
                <i className="icon edit"></i> Add Post
              </div>
            </form>
          </div>
        </div>
      }
    </div>
  );
}