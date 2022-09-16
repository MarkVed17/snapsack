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
    <div className="main-content">
      <div className="filters-container">
        <button className="filter-chip" onClick={filterHandler}>
          Best
        </button>
        <button className="filter-chip" onClick={filterHandler}>
          Hot
        </button>
        <button className="filter-chip" onClick={filterHandler}>
          New
        </button>
        <button className="filter-chip" onClick={filterHandler}>
          Top
        </button>
      </div>
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
    </div>
  );
};

export { HomePage };
