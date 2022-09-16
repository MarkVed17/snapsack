import "./HomePage.css";
import { FiltersContainer, PostsContainer } from "../../components";

const HomePage = () => {
  return (
    <div className="main-content">
      <FiltersContainer />
      <PostsContainer />
    </div>
  );
};

export { HomePage };
