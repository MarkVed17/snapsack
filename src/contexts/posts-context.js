import { useState, useEffect, createContext, useContext } from "react";

const PostsContext = createContext();

const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://www.reddit.com/r/pics/.json?jsonp="
        );
        const JSONdata = await response.json();
        const data = await JSONdata.data.children;
        setPosts(data);
        setLoading(false);
      } catch (err) {
        console.error(err.message);
        setLoading(false);
      }
    })();
  }, []);

  return (
    <PostsContext.Provider value={{ posts, loading }}>{children}</PostsContext.Provider>
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
