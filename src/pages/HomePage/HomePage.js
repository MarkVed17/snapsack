import "./HomePage.css";
import { usePosts, useFilter } from "../../contexts";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const { posts } = usePosts();
  const { filteredPosts, filterBy, setFilterBy } = useFilter();
  const navigate = useNavigate();

  const filterHandler = (e) => {
    if (filterBy === e.currentTarget.textContent) {
      setFilterBy("Best");
    } else {
      setFilterBy(e.currentTarget.textContent);
    }
  };

  return (
    <div>
      <div className="filters-container">
        <button onClick={filterHandler}>Best</button>
        <button onClick={filterHandler}>Hot</button>
        <button onClick={filterHandler}>New</button>
        <button onClick={filterHandler}>Top</button>
      </div>
      <div className="posts-container">
        {posts &&
          filteredPosts.map(({ data: { title, thumbnail, name } }) => (
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
    </div>
  );
};

export { HomePage };
