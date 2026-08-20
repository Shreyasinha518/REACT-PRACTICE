import { useContext, useRef } from "react";


import { PostList } from "../Store/posts-list-store"; 

const CreatePost = () => {
    const { addPost } = useContext(PostList);

  const userIdElement=useRef();
  const postTitleElement=useRef();
  const postBodyElement=useRef();
  const reactionElement=useRef();
  const tagsElement=useRef();
  const handleSubmit=(event)=>{
    event.preventDefault();
    const userId=userIdElement.current.value;
    const postTitle=postTitleElement.current.value;
    const postBody=postBodyElement.current.value;
    const reactions=reactionElement.current.value;
   const tags = tagsElement.current.value.split(" ");
    addPost(userId,postTitle,postBody,reactions,tags)
    userIdElement.current.value="";
    postTitleElement.current.value="";
    postBodyElement.current.value="";
    reactionElement.current.value="";
    tagsElement.current.value="";
    








  }
  

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="forName-label">
          Enter your User-Id
        </label>
        <input
          type="text"
          ref={userIdElement}
          className="forName-control"
          id="userId"
          placeholder="Give userId"
         
        />
        </div>
      <div className="mb-3">
        <label htmlFor="title" className="forName-label">
          Post Title
        </label>
        <input
          type="text"
          ref={postTitleElement}
          className="forName-control"
          id="title"
          placeholder="Who are u?"
         
        />
        
        
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="forName-label">
          Post Content
        </label>
        <input
          type="text"
          ref={postBodyElement}
          rows="6"
          
          className="forName-control"
          id="body"
          placeholder="Tell us more about u"
         
        />
        </div>
         <div className="mb-3">
        <label htmlFor="reactions" className="forName-label">
          No.of reactions
        </label>
        <input
          type="text"
          ref={reactionElement}
          className="forName-control"
          id="reactions"
          placeholder="How many people reacted "
         
        />
        </div>
         <div className="mb-3">
        <label htmlFor="tags" className="forName-label">
          Enter tags
        </label>
        <input
          type="text"
          ref={tagsElement}
          className="forName-control"
          id="tags"
          placeholder="Pease enter tags of your post"
         
        />
        </div>
      
     
      <button type="submit" className="btn btn-primary">
        POST
      </button>
    </form>
  );
};
export default CreatePost;
