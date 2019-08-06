import React, { Component, Fragment } from 'react';
import axios from 'axios';
import PostCard from '../../Stateless/Blog Component/PostCard';
import PostForm from '../../Stateless/Blog Component/PostForm';



class BlogPost extends Component {
    state = {
        post: [],
        newPost: {
            id: 1,
            title: '',
            body: '',
            userId: 1
        },
        isSave: true
    }
    getData = () => {
        axios.get('http://localhost:3005/posts?_sort=id&_order=desc')
            .then(result => {
                this.setState({
                    post: result.data
                })
            })
    }
    componentDidMount() {
        this.getData()
    }
    FormHandler = (DataEvent) => {
        let NewPost = { ...this.state.newPost }
        if (this.state.isSave) {
            let id = new Date().getTime()
            NewPost['id'] = id
        }
        NewPost[DataEvent.target.name] = DataEvent.target.value
        this.setState({
            newPost: NewPost
        })
    }
    SubmitHandler = () => {
        if (this.state.isSave) {
            axios.post('http://localhost:3005/posts', this.state.newPost)
                .then((res) => {
                    this.getData()
                }, (err) => {
                    alert(err)
                })
            this.ClearForm()
        } else {
            axios.put('http://localhost:3005/posts/' + this.state.newPost.id, this.state.newPost)
                .then((res) => {
                    this.getData()
                }, (err) => {
                    alert(err)
                })
        }
    }
    ClearForm = () => {
        this.setState({
            newPost: {
                id: 1,
                title: '',
                body: '',
                userId: 1
            },
            isSave: true
        })
    }
    DeleteHandler = (id) => {
        axios.delete('http://localhost:3005/posts/' + id)
            .then((res) => {
                this.getData()
            })
    }
    UpdateHandler = (DataEvent) => {
        this.setState({
            newPost: DataEvent,
            isSave: false
        })
    }
    LimitHandler = (DataEvent) => {
        var limit = DataEvent.target.value
        var daftarHuruf = /^[0-9 ]+$/;
        if (limit === '') {
            this.getData()
        } else if (!limit.match(daftarHuruf)) {
            this.getData()
        } else {
            limit = parseInt(limit)
            axios.get('http://localhost:3005/posts?_limit=' + limit + '&_sort=id&_order=desc')
                .then(result => {
                    this.setState({
                        post: result.data
                    })
                })
        }
    }
    render() {
        return (
            <Fragment>
                <h1 className='document-title'>My Blog Post</h1>
                <div className="action">
                    <p className='data' >Banyak Data: {this.state.post.length}</p>
                    <label htmlFor="limit">Tampilkan Sebanyak: </label>
                    <input onChange={this.LimitHandler} className='input limit' id='limit' name='limit' type="text" />
                    <a className='btn btn-add' href="#modal">Add</a>
                    <hr />
                </div>
                <PostForm eventClose={this.ClearForm} NewPost={this.state.newPost} ClearForm={this.ClearForm} SubmitHandler={this.SubmitHandler} FormHandler={this.FormHandler} />
                {this.state.post.map(post => {
                    return <PostCard eventRead={() => this.props.Read(post.id)} eventUpdate={this.UpdateHandler} eventDelete={this.DeleteHandler} key={post.id} DataPost={post} />
                })}
            </Fragment>
        );
    }
}
export default BlogPost