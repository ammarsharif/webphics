import {
  FETCH_ALL,
  CREATE,
  PATCH,
  DELETE,
} from "../constants/actionsConstants";
export default (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...posts, action.payload];
    case PATCH:
      return posts.map((post) =>
        post._id === post.payload._id ? action.payload : post
      );
    case DELETE:
      return posts.filter((post) => post._id !== action.payload);
    default:
      return posts;
  }
};
