import { MdDelete } from "react-icons/md";
import { PostList } from "../Store/posts-list-store";
import { useContext } from "react";
const Post = ({post}) => {
  const {deletePost}=useContext(PostList)
  const totalReactions = 
    (typeof post.reactions === 'object' && post.reactions !== null)
      ? (post.reactions.likes || 0) + (post.reactions.dislikes || 0)
      : post.reactions; 
  
  return (
    <div className="card post-card" style={{ width: "30rem" }}>
      
      <div className="card-body">
        <h5 className="card-title">{post.title}
            
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
  onClick={()=>deletePost(post.id)}>
    <MdDelete />
    <span className="visually-hidden">unread messages</span>
  </span>

        </h5>
        <p className="card-text">
          {post.body}
        </p>
        {post.tags.map((tag) => (
            <span key={tag} className="badge text-bg-primary hashtag">
              {tag}
            </span>
          ))}
          <div className="alert alert-success reactions" role="alert">
  This post have been reacted by {post.totalReactions} people.
</div>
       
      </div>
    </div>
  );
};
export default Post;
