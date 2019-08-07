import React, {Component} from 'react';

export default function CommentItem(props) {
    return <div>
        <h1>评论人: {props.user}</h1>
        <p>评论内容: {props.comment}</p>
        </div>;
}