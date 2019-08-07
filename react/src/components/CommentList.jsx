import React, {Component} from 'react';
import CommentItem from '@/components/CommentItem';
import commentListCss from '@/css/commentList.css';
console.log(commentListCss);

export default class CommentList extends Component {

    constructor() {
        super();
        this.state = {
            commentList: [
                {id: 1, user: "Peter", comment: "Hello, it is me!"},
                {id: 2, user: "Mary", comment: "Wow, you are wonderful!"},
                {id: 3, user: "Jack", comment: "What time is it?"},
                {id: 4, user: "Linda", comment: "Can I have a drink?"},
                {id: 5, user: "Carrie", comment: "Do you have girlfriend?"},
            ]
        }
    }

    render() {
        return <div>
            <h1 className={commentListCss.title + " test"}>评论列表组件</h1>
            {this.state.commentList.map(item => <CommentItem {...item} key={item.id}></CommentItem>)}
            </div>;
    }
}