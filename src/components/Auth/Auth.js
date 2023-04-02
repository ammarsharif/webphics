import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import logo from "../../image/google.png";
import "./style.css";
import { createPost, updatePost } from "../../actions/posts";

const Auth = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    creator: "",
    phone: "",
    password: "",
    passwordConfirm: "",
  });
  const post = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id === currentId) : null
  );
  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);
  const dispatch = useDispatch();
  const handle = (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(updatePost(currentId, postData));
    } else {
      dispatch(createPost(postData));
    }
    setPostData({
      creator: "",
      phone: "",
      password: "",
      passwordConfirm: "",
    });
  };
  return (
    <div className="container bg-transparent bg-opacity-75 shadow-lg rounded-3 col-6 mt-5 pb-5 ">
      <div className="d-flex justify-content-center p-0 rounded">
        <form onSubmit={handle}>
          <div className="mt-3 p-4">
            <h2>
              Sign up to <b>WebPhics</b>
            </h2>
            <p> &nbsp; We Suggest you to use your work Email</p>
          </div>
          <div className="mb-2 ">
            <input
              type="text"
              name="creator"
              className="form-control "
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Name"
              value={postData.creator}
              onChange={(e) =>
                setPostData({
                  ...postData,
                  creator: e.target.value,
                })
              }
            />
          </div>
          <div className="mb-2">
            <input
              name="phone"
              type="number"
              className="form-control my-3 p-2"
              id="exampleInputPassword1"
              placeholder="Phone Number"
              value={postData.phone}
              onChange={(e) =>
                setPostData({
                  ...postData,
                  phone: e.target.value,
                })
              }
            />
          </div>
          <div className="mb-2">
            <input
              name="password"
              type="password"
              className="form-control my-3 p-2"
              id="exampleInputPassword1"
              placeholder="Password"
              value={postData.password}
              onChange={(e) =>
                setPostData({
                  ...postData,
                  password: e.target.value,
                })
              }
            />
          </div>
          <div className="mb-2">
            <input
              name="password"
              type="password"
              className="form-control my-3 p-2"
              id="exampleInputPassword1"
              placeholder="Confirm Password"
              value={postData.passwordConfirm}
              onChange={(e) =>
                setPostData({
                  ...postData,
                  passwordConfirm: e.target.value,
                })
              }
            />
          </div>
          <div className="d-grid mb-2">
            <button type="submit" className="btn btn-info ">
              Submit
            </button>
          </div>
          <div className="d-grid mb-2">
            <button type="submit" className="btn bg-light">
              <img src={logo} alt="#" width="30px" height="30px" />
              &nbsp; Sign In with Google
            </button>
          </div>
          <div>
            Already have an account ?{" "}
            <button className="btn text-white btn-outline-info">
              <b>Sign In</b>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;
