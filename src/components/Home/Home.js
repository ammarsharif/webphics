import React, { useEffect, useState } from "react";
import Form from "../../components/Form/Form";
import Posts from "../../components/Posts/Posts";
import { useDispatch } from "react-redux";
import { getPosts } from "../../actions/posts";
const Home = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);
  return (
    <div className="container d-flex flex-wrap">
      <div className="row col-4 order-last">
        <Form currentId={currentId} setCurrentId={setCurrentId} />
      </div>
      <div className="row col-8 order-first">
        <Posts currentId={currentId} setCurrentId={setCurrentId} />
      </div>
    </div>
  );
};

export default Home;
