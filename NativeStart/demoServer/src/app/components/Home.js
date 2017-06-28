/**
 * Created by Owner on 2017/4/27.
 */
import React from "react";
import linkedState from 'react-link';

export class Home extends React.Component{


    constructor(props){
        super();
        this.state = {
            age: props.initialAge,
            status: 0,
            homeLink: props.initialLinkName
        };
        setTimeout(()=>{
            this.setState({
                status: 1
            });
        }, 3000)
        console.log("Constructor");
    }


    componentWillMount(){
        console.log("Component will mount!");
    }

    componentDidMount(){
        console.log("Component did mount!");
    }

    componentWillReceiveProps(nextProps){
        console.log("Component will receive props", nextProps);
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("Should Component update", nextProps, nextState);
        return true;
    }

    componentWillUpdate(nextProps, nextState){
        console.log("Component will update", nextProps, nextState);
    }

    componentDidUpdate(prevProps, prevState){
        console.log("Component did update", prevProps, prevState);
    }

    componentWillUnmount(){
        console.log("Component will unmount");
    }


    onMakeOlder(){
        this.setState({
            age: this.state.age +3
        });
}

    onChangeLink(){
        this.props.changeLink(this.state.homeLink)
        /*alert("no more bind")*/
    }

/*    onHandleChange(event){
        this.setState({
            homeLink: event.target.value
        })
    }*/

    render(){
        return(
            <div>
                <p>In a new component</p>
                <p>Your name is {this.props.name}, Your age is {this.state.age}</p>
                <p>Status: {this.state.status}</p>
            <hr/>
                <button onClick={() =>this.onMakeOlder()} className="btn btn-primary">Make me older</button>
                <hr/>
                <button onClick={this.props.greet} className="btn btn-primary">Greet</button>
                <hr/>
                {/*<input type='text' value={this.state.homeLink} onChange={(event)=>this.onHandleChange(event)} />*/}
                <input type="text" valueLink={linkedState(this, 'homeLink')}/>
                <button onClick={this.onChangeLink.bind(this)} className="btn btn-primary">Change Header Link</button>
            </div>
        )
    }
}
/*
Home.propTypes = {
    name: React.PropTypes.string,
    age: React.PropTypes.number,
    user: React.PropTypes.object,
    children: React.PropTypes.element.isRequired
}*/
