import React, { Component, Fragment } from 'react';
import Axios from 'axios';
import { FaUserEdit } from "react-icons/fa";

class PostRead extends Component {
    state = {
        post: {}
    }
    componentDidMount() {
        let id = this.props.match.params.id
        Axios.get(`http://localhost:3005/posts/${id}`)
            .then(result => {
                this.setState({
                    post: result.data
                })
            })
    }
    render() {
        return (
            <Fragment>
                <div className="post">
                    <h1 className='post-title'>{this.state.post.title}</h1>
                    <small className='post-id'>Artikel Id: {this.state.post.id}</small>
                    <small className='post-authorId'><FaUserEdit /> Author ID: {this.state.post.userId} </small>
                    <p className='post-body'>
                        {this.state.post.body}
                    </p>
                </div>
            </Fragment>
        );
    }
}
export default PostRead