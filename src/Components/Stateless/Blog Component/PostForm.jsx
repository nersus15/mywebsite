import React from 'react';
import { IoIosCloseCircle } from 'react-icons/io';

const PostForm = (props) => {
    return (
        <div>
            <div className="form">
                <div className="modal" id='modal'>
                    <div className="form-group">
                        <h1>Add Data</h1>
                        <a onClick={props.eventClose} href="#modal-close"><IoIosCloseCircle className='modal-close' /></a>
                        <label className='form-label' htmlFor="title">Title</label>
                        <input value={props.NewPost.title} onChange={props.FormHandler} type="text" id='title' name='title' className="input form-control" />
                        <label className='form-label' htmlFor="body">Description</label>
                        <textarea value={props.NewPost.body} onChange={props.FormHandler} id='body' name='body' className="input form-control" cols="25" rows="10"></textarea>
                        <button onClick={props.SubmitHandler} className='btn form-control btn-save'>Save</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default PostForm