import React from "react";

export default function Popup(props) {
  const {user, title, content, date} = props.data

  return (
    <div className="comment">
      <a className="avatar">
        <img src="" />
      </a>
      <div className="content">
        <a className="author">{user}</a>
        <div className="metadata">
          <span className="date">{date}</span>
        </div>
        <div className="text">
          {title}
        </div>
        <div className="text">
          {content}
        </div>
        <div className="actions">
          <a className="reply">Reply</a>
        </div>
      </div>
    </div>
  );
}