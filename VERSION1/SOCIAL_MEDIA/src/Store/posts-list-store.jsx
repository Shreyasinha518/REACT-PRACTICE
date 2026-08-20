import { createContext, useCallback, useMemo, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  addInitialPosts: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
      },
    });
  };

  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };

  const deletePost = useCallback((postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },          //yeh mehod sirf dispatchPostList pe hi depend karta hai always toh isiliye usse call kiya gya hai
    });
  },[dispatchPostList]); 
  const arr=[5,2,6,7,4];
  const srtedArray=useMemo (()=>arr.sort(),[arr]); //yeh humne use kiya to get ki humara method baar baar repaint na ho kyuki baar baar reference change hota hai

  return (
    <PostList.Provider
      value={{ postList, addPost, addInitialPosts, deletePost }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;