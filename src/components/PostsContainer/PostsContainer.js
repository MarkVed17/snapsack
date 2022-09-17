import { usePosts, useFilter } from "../../contexts";
import { useNavigate } from "react-router-dom";
import "./PostsContainer.css";

const PostsContainer = () => {
  const { loading } = usePosts();
  const { filteredPosts } = useFilter();
  const navigate = useNavigate();

  return (
    <div className="posts-container">
      {loading ? (
        <img
          src="https://assets.materialup.com/uploads/21271351-3e4d-4868-8dd2-6caff188213e/preview.gif"
          alt="Loading..."
          className="loading"
        />
      ) : (
        filteredPosts.map(({ data: { title, thumbnail, name, author } }) => (
          <div key={name} className="post">
            <img
              src={thumbnail}
              alt={title}
              className="post-thumbnail"
              onClick={() => {
                navigate(`/post/${name}`);
              }}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src =
                  "https://media.istockphoto.com/vectors/thumbnail-image-vector-graphic-vector-id1147544807?k=20&m=1147544807&s=612x612&w=0&h=pBhz1dkwsCMq37Udtp9sfxbjaMl27JUapoyYpQm0anc=";
              }}
            />
            <div className="post-text">
              <h1 className="post-title">{title}</h1>
              <h2 className="post-author">{author}</h2>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export { PostsContainer };
