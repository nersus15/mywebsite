import React from 'react';


const PostCard = (props) => {
    return (
        <div className="card-post">
            <div className="card-post-image">
                <img src="https://placeimg.com/200/150/tech/12" alt="" />
            </div>
            <div className="card-post-body">
                <p onClick={props.eventRead} className="card-post-title">{props.DataPost.title} </p>
                <p className="card-post-desc">{props.DataPost.body} </p>
                <button className="btn btn-delete" onClick={() => props.eventDelete(props.DataPost.id)}>Delete</button>
                <button href='#modal' className="btn btn-update" ><a onClick={() => props.eventUpdate(props.DataPost)} className="btn" href='#modal'>Update</a> </button>
            </div>
        </div >
    );
}
export default PostCard