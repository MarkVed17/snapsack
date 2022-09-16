import { Routes, Route } from "react-router-dom";
import { HomePage, SinglePostPage } from "../../pages";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/post" element={<SinglePostPage />} />
    </Routes>
  );
};

export { Main };
