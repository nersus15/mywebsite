import React, { Component, Fragment } from 'react';
import BlogPost from '../../Components/StateFull/Blog Component/BlogPost';

class MyBlog extends Component {
    ReadHandler = (id) => {
        this.props.history.push(`/read/${id}`)
    }

    render() {
        return (
            <Fragment>
                <BlogPost Read={this.ReadHandler} />
            </Fragment>
        );
    }
}
export default MyBlog