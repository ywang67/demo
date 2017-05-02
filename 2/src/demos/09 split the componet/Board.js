/**
 * Created by Owner on 2017/4/25.
 */
import React from "react";
import {render} from "react-dom";

import {Comment} from "./Comment"


class Board extends React.Component{
    getInitialState: function(){
        return {
            comments: [
                'I like bacon',
                'Want to get ice cream',
                'Ok, we have enough comments now'
            ]
        }
    },

    add: function (text) {
        var arr = this.state.comments;
        arr.push(text);
        this.setState({comment:arr})
    },


    removeComment: function (i) {
        console.log('Removing comment: ' + i);
        var arr = this.state.comments;
        arr.splice(i,1);
        this.setState({comments:arr})
    },

    updateComment: function (newText, i) {
        console.log('Updating comment !');
        var arr = this.state.comments;
        arr[i] = newText;
        this.setState({comments:arr})
    },

    eachComment: function (text, i) {
        return (
            <Comment key = {i} index={i} updateCommentText={this.updateComment} deleteFromBoard={this.removeComment}>{text}</Comment>
        )
    },

    render: function () {
        return (
            <div>
            <button onClick={this.add.bind(null, 'Default')} className="button-info create">Add</button>
            <div className="board">
            {
                this.state.comments.map(this.eachComment)
    }
        </div>
        </div>
        )
    }
};
render(<Board />, document.getElementById('container'));