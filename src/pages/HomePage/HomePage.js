import "./HomePage.css";
import { usePosts } from "../../contexts";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const { posts } = usePosts();
  const navigate = useNavigate();

  return (
    <div className="posts-container">
      {posts &&
        posts.map(({ data: { title, thumbnail, name } }) => (
          <div
            key={name}
            className="post"
            onClick={() => {
              navigate(`/post/${name}`);
            }}
          >
            <h1>{title}</h1>
            <img src={thumbnail} alt={title} />
          </div>
        ))}
    </div>
  );
};

export { HomePage };
