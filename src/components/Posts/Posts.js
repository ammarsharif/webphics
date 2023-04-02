import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post/Post";
import Spinner from "./Spinner";
const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  return !posts.length ? (
    <Spinner />
  ) : (
    <React.Fragment>
      <div>
        <div className="container d-flex">
          <div className="row">
            {posts.map((post) => (
              <div key={post._id} className="col-xl-6 col-sm-12">
                <Post post={post} setCurrentId={setCurrentId} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Posts;
