import React, { useState } from "react";
import Comment from "../comment";

import { useQuery, useMutation } from '@apollo/react-hooks';
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

const CREATE_POST_MUTATION = gql`
  mutation createPost($user: String!, $title: String!, $content: String!) {
    createPost(user: $user, title: $title, content: $content) {
      id
      user
      title
      content
    }
  }
`;



export default function Popup({ ifShow = false }) {
  // init mutation
  const [createPost, { mdata }] = useMutation(CREATE_POST_MUTATION);
  // query from database
  let myPosts = []
  const { loading, data } = useQuery(FETCH_POSTS_QUERY);
  if (data) {
    myPosts = { data: data.getPosts }.data;
  }

  // map posts to components
  const postComponents = myPosts.map(post => {
    return <Comment id={post.id} data={post}/>
  })

  // get the input content
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [user, setUser] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(content);
    createPost({ variables: {
      user,
      title,
      content,
    }})
  }

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
            <form className="ui reply form" onSubmit={handleSubmit}>
              <div className="field">
                <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)}></input>
                <textarea type="text" required value={content} onChange={(e) => setContent(e.target.value)}>
                  write something here
                </textarea>
                <input type="text" required value={user} onChange={(e) => setUser(e.target.value)}></input>
              </div>
              <input type="submit" />
            </form>
          </div>
        </div>
      }
    </div>
  );
}