import { Routes, Route } from "react-router-dom";
import { HomePage, SinglePostPage } from "../../pages";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/post/:postname" element={<SinglePostPage />} />
    </Routes>
  );
};

export { Main };
