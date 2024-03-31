import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import MainLayout from "./layout/MainLayout";
import HomePage from "./Screen/HomePage";
import JobPage from "./Screen/JobPage";
import PageJobSingle, { jobLoader } from "./Screen/PageJobSingle";
import NotFoundPage from "./Screen/NotFoundPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/jobs" element={<JobPage />} />
      <Route path="/jobs/:id" element={<PageJobSingle />} loader={jobLoader} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>,
  ),
);
const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
