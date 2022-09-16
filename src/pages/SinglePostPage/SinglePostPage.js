import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { usePosts } from "../../contexts";
import "./SinglePostPage.css";

const SinglePostPage = () => {
  const [post, setPost] = useState();
  const { posts } = usePosts();
  const { postname } = useParams();

  useEffect(() => {
    const findPost = posts.find((post) => post.data.name === postname);
    setPost(findPost.data);
  }, [posts, postname]);

  return (
    <>
      {post && (
        <div className="single-post">
          <h2 className="single-post-title">{post.title}</h2>
          <h5 className="single-post-author">Posted by {post.author}</h5>
          <img src={post.thumbnail} alt={post.title} />

          <div className="single-post-stats">
            <span className="single-post-stats-icon">
              <span>{post.ups}</span>
              <span class="material-symbols-outlined">arrow_upward</span>
            </span>

            <span className="single-post-stats-icon">
              <span>{post.downs}</span>
              <span class="material-symbols-outlined">arrow_downward</span>
            </span>

            <span className="single-post-stats-icon">
              <span>{post.num_comments}</span>
              <span class="material-symbols-outlined">chat_bubble</span>
            </span>

            <span className="single-post-stats-icon">
              <span class="material-symbols-outlined">google_plus_reshare</span>
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export { SinglePostPage };
