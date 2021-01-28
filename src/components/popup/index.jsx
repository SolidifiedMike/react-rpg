import React from "react";
import Comment from "../comment";

export default function Popup({ ifShow = false }) {

  return (
    <div style={{ position: "absolute", zIndex: 4 }}>
      { ifShow &&
        <div style={{
          backgroundColor: "white",
          width: 400,
          height: 400,
        }}>
          <div className ="ui comments">
            <h3 className="ui dividing header">Posts</h3>
            <Comment name="ws" message="水贴" date="2021/1/15" />
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