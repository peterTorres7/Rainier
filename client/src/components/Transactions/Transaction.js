import React from 'react';

export default function Transaction(props) {
  return (
    <div>
      <h3>{props.post.title}</h3>
      <hr />
      <h5>{props.post.author}</h5>
      <hr />
      <p>
        {props.post.body}
      </p>
    </div>
  )
}