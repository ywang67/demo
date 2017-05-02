/**
 * Created by Owner on 2017/4/25.
 */
import React from "react";

export class Comment extends React.Component{
    getInitialState:function () {
        return {editing:false}
    },
    edit: function () {
        this.setState({editing:true});
    },
    save: function () {
        this.props.updateCommentText(this.refs.newText.value, this.props.index)
        this.setState({editing:false});
    },

    remove: function () {
        alert("The removing is going!");
        this.props.deleteFromBoard(this.props.index);
    },
    renderNormal: function () {
        return (<div className="commentContainer">
            <div className="commentText">{this.props.name}{this.props.children}</div>
        <button className="button-primary" onClick={this.edit}>Edit</button>
        <button className="button-danger" onClick={this.remove}>Remove</button>
        </div>)
    },
    renderEdit: function () {
        return (<div className="commentContainer">
            <textarea ref="newText" defaultValue={this.props.children}></textarea>
        <button className="button-success" onClick={this.save}>Save</button>
        </div>)
    },

    render: function(){
        if(this.state.editing){
            return this.renderEdit();
        }else{
            return this.renderNormal();
        }
    }
};