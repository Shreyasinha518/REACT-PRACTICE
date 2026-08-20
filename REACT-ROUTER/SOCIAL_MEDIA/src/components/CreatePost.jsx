import { redirect } from "react-router-dom";
import { Form } from "react-router-dom";
const CreatePost = () => {
  //const { addPost } = useContext(PostList);
 
 // const handleSubmit = (event) => {
   
    //addPost(userId, postTitle, postBody, reactions, tags);
   

    
  


  return (
    <Form method="POST" className="create-post" >
      <div className="mb-3">
        <label htmlFor="userId" className="forName-label">
          Enter your User-Id
        </label>
        <input
          type="text"
         name="userId"
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
           name="title"
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
           name="body"
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
          name="reaction"
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
          name="tags"
          className="forName-control"
          id="tags"
          placeholder="Pease enter tags of your post"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        POST
      </button>
    </Form>
  );
};
export async function createPostAction(data) {
  const formData=await data.request.formData();
 const postData = Object.fromEntries(formData);
 postData.tags=postData.tags.split(" ");
  console.log(postData);
  fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postData),
      })
    
      .then((res) => res.json())
      .then(post=>{
        console.log(post);
      });
      return redirect("/");

};
export default CreatePost;
