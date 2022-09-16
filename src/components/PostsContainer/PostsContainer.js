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
