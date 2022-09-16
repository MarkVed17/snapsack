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
          (a, b) => b.data.upvote_ratio - a.data.upvote_ratio
        );
      case "Hot":
        return [...posts].sort(
          (a, b) =>
            b.data.ups * b.data.created_utc - a.data.ups * a.data.created_utc
        );
      case "New":
        return [...posts].sort(
          (a, b) => b.data.created_utc - a.data.created_utc
        );
      case "Top":
        return [...posts].sort(
          (a, b) => b.data.total_awards_received - a.data.total_awards_received
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
