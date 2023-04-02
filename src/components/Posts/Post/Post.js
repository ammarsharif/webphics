import React from "react";
import { MdDelete } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";
import moment from "moment";
import "./style.css";
import { useDispatch } from "react-redux";
import { deletePost } from "../../../actions/posts";
const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  return (
    <div className="container my-2 mt-5 mx-2 d-flex justify-content-center flex-wrap">
      <div className="card-group ">
        <div className="card">
          <img
            src={post.selectedFile}
            className="card-img-top bg-opacity-0.5"
            alt="..."
          />
          <div className="card-body">
            <h4 className="card-creator">{post.creatorFirst}</h4>
            <h4 className="card-creator">{post.creatorLast}</h4>
            <div className="card-body text-secondary">
              <h6 className="">{post.fatherName}</h6>
              <h6 className="">{post.cnic}</h6>
            </div>
            <h5 className="card-title">{post.expert}</h5>
          </div>
          <div className="overlay">
            <button
              className="btn btn-outline-light btn-sm"
              onClick={() => setCurrentId(post._id)}
            >
              <GrUpdate />
            </button>
          </div>
          <div className="card-body">
            <p className="card-text text-secondary">{post.phone}</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">
              {moment(post.createdAt).local().fromNow()}
            </small>
          </div>
          <div className="d-flex justify-content-between m-2">
            <div className="mx-5"></div>
            <div className="mx-5 px-4">
              <button
                className="btn btn-outline-danger btn-sm"
                onClick={() => dispatch(deletePost(post._id))}
              >
                <MdDelete />
                Delete
              </button>
            </div>
          </div>
          <div />
        </div>
      </div>
    </div>
  );
};

export default Post;
