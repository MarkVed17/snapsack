import { usePosts, useFilter } from "../../contexts";
import { useNavigate } from "react-router-dom";
import "./PostsContainer.css";

const PostsContainer = () => {
  const { posts } = usePosts();
  const { filteredPosts } = useFilter();
  const navigate = useNavigate();

  return (
    <div className="posts-container">
      {posts &&
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
        ))}
    </div>
  );
};

export { PostsContainer };
