import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import FileBase from "react-file-base64";
// import { updatePost } from "../../../../server/controller/posts";
import { useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/posts";

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    creatorFirst: "",
    creatorLast: "",
    fatherName: "",
    cnic: "",
    date: "",
    phone: "",
    expert: "",
    selectedFile: "",
  });
  const post = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id === currentId) : null
  );
  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(updatePost(currentId, postData));
    } else {
      dispatch(createPost(postData));
    }
    clear();
  };

  const clear = () => {
    setCurrentId(null);
    setPostData({
      creatorFirst: "",
      creatorLast: "",
      fatherName: "",
      cnic: "",
      date: "",
      phone: "",
      expert: "",
      selectedFile: "",
    });
  };
  return (
    <div className="container ">
      <div className="d-flex justify-content-center p-0 rounded">
        <form onSubmit={handleSubmit}>
          <div className="mb-3 mt-3 ">
            <h4>{currentId ? "Editing" : "Creating"} Your Profile</h4>
          </div>
          <div className="mb-2">
            <input
              type="text"
              name="creator"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="First Name"
              value={postData.creatorFirst}
              onChange={(e) =>
                setPostData({
                  ...postData,
                  creatorFirst: e.target.value,
                })
              }
            />
          </div>
          <div className="mb-2">
            <input
              type="text"
              name="creator"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Last Name"
              value={postData.creatorLast}
              onChange={(e) =>
                setPostData({
                  ...postData,
                  creatorLast: e.target.value,
                })
              }
            />
          </div>
          <div className="mb-2">
            <input
              name="title"
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Father Name"
              value={postData.fatherName}
              onChange={(e) =>
                setPostData({
                  ...postData,
                  fatherName: e.target.value,
                })
              }
            />
          </div>
          <div className="mb-2">
            <input
              name="message"
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="CNIC"
              value={postData.cnic}
              onChange={(e) =>
                setPostData({
                  ...postData,
                  cnic: e.target.value,
                })
              }
            />
          </div>
          <div className="mb-2">
            <input
              name="message"
              type="date"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="D.O.B"
              value={postData.date}
              onChange={(e) =>
                setPostData({
                  ...postData,
                  date: e.target.value,
                })
              }
            />
          </div>
          <div className="mb-2">
            <input
              name="tags"
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Phone Number"
              value={`${postData.phone}`}
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
              name="tags"
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Expert in...."
              value={postData.expert}
              onChange={(e) =>
                setPostData({
                  ...postData,
                  expert: e.target.value,
                })
              }
            />
          </div>
          <div className="mb-2">
            <FileBase>
              {" "}
              type="file", multiple={false}
              onDone=
              {({ base64 }) =>
                setPostData({ ...postData, selectedFile: base64 })
              }
            </FileBase>{" "}
          </div>
          <div className="d-grid mb-2">
            <button type="submit" className="btn btn-primary btn-lg">
              Submit
            </button>
          </div>
          <div className="d-grid">
            <button
              type="submit"
              className="btn btn-danger btn-sm"
              onClick={clear}
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
