import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { usePosts } from "../../contexts";
import "./SinglePostPage.css";

const SinglePostPage = () => {
  const [post, setPost] = useState();
  const { posts } = usePosts();
  const { postname } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const findPost = posts.find((post) => post.data.name === postname);
    setPost(findPost.data);
  }, [posts, postname]);

  return (
    <>
      {post && (
        <div className="main-wrapper">
          <button onClick={() => navigate("/")} className="back-btn">
            <span class="material-symbols-outlined">arrow_back_ios_new</span>
            Back
          </button>
          <div className="single-post">
            <h2 className="single-post-title">{post.title}</h2>
            <h5 className="single-post-author">Posted by {post.author}</h5>
            <img
              src={post.thumbnail}
              alt={post.title}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src =
                  "https://media.istockphoto.com/vectors/thumbnail-image-vector-graphic-vector-id1147544807?k=20&m=1147544807&s=612x612&w=0&h=pBhz1dkwsCMq37Udtp9sfxbjaMl27JUapoyYpQm0anc=";
              }}
            />

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
                <span class="material-symbols-outlined">
                  google_plus_reshare
                </span>
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export { SinglePostPage };
