import { useState, createContext, useContext } from "react";
import { usePosts } from "../contexts";

const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  const { posts } = usePosts();
  const [filterBy, setFilterBy] = useState("Best");

  const filterPosts = () => {
    switch (filterBy) {
      case "Best":
        return [...posts].sort(
          (a, b) => a.data.upvote_ratio - b.data.upvote_ratio
        );
      case "Hot":
        return [...posts].sort(
          (a, b) =>
            a.data.ups * a.data.created_utc - b.data.ups * b.data.created_utc
        );
      case "New":
        return [...posts].sort(
          (a, b) => a.data.created_utc - b.data.created_utc
        );
      case "Top":
        return [...posts].sort(
          (a, b) =>
            a.data.ups + a.data.num_comments - b.data.ups + b.data.num_comments
        );

      default:
        return posts;
    }
  };

  const filteredPosts = filterPosts();

  return (
    <FilterContext.Provider value={{ filteredPosts, filterBy, setFilterBy }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => {
  const context = useContext(FilterContext);

  if (context === undefined) {
    throw new Error("useFilter must be within a FilterProvider");
  }

  return context;
};

export { useFilter, FilterProvider };
