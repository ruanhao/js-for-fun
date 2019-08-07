import React, {Component} from 'react';
import commentCss from '@/css/commentItem.css'

export default function CommentItem(props) {
    return <div className={commentCss.box}>
        <h1 className={commentCss.title}>评论人: {props.user}</h1>
        <p className={commentCss.content}>评论内容: {props.comment}</p>
        </div>;
}