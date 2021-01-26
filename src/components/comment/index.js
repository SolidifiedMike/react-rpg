import React from "react";

export default function Popup({ name, message, date }) {

  return (
    <div className="comment">
      <a className="avatar">
        <img src="" />
      </a>
      <div className="content">
        <a className="author">{name}</a>
        <div className="metadata">
          <span className="date">{date}</span>
        </div>
        <div className="text">
          {message}
        </div>
        <div className="actions">
          <a className="reply">Reply</a>
        </div>
      </div>
    </div>
  );
}