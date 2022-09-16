import { useState, useEffect, createContext, useContext } from "react";

const PostsContext = createContext();

const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          "https://www.reddit.com/r/pics/.json?jsonp="
        );
        const JSONdata = await response.json();
        const data = await JSONdata.data.children;
        setPosts(data);
      } catch (err) {
        console.error(err.message);
      }
    })();
  }, []);

  return (
    <PostsContext.Provider value={{ posts }}>{children}</PostsContext.Provider>
  );
};

const usePosts = () => {
  const context = useContext(PostsContext);

  if (context === undefined) {
    throw new Error("usePosts must be used within a PostsProvider");
  }

  return context;
};

export { usePosts, PostsProvider };
