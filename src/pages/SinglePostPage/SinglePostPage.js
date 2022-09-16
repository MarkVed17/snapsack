import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { usePosts } from "../../contexts";

const SinglePostPage = () => {
  const [post, setPost] = useState();
  const { posts } = usePosts();
  const { postname } = useParams();

  useEffect(() => {
    const findPost = posts.find((post) => post.data.name === postname);
    setPost(findPost.data);
  }, [posts, postname]);

  return (
    <>
      {post && (
        <div>
          <h1>{post.title}</h1>
          <img src={post.thumbnail} alt={post.title} />
        </div>
      )}
    </>
  );
};

export { SinglePostPage };
