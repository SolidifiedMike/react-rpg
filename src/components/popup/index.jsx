import React, {useState} from "react";
import Comment from "../comment";
import postData from "../../data/postData.js";

export default function Popup({ ifShow = false }) {
  // get posts from json file
  const [posts, setPosts] = useState(postData);

  const postComponents = posts.map(post => {
    return <Comment id={post.id} data={post}/>
  })

  const addPost = (user, title, content, date) => {
    setPosts([...posts, {id: 99, user, title, content, date}])
  }

  return (
    <div style={{
      position: "absolute",
      zIndex: 4,
      left: 100,
      justifyContent: "center",
      alignItems: "center",
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
            {postComponents}
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