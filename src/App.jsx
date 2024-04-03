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
import AddJobPage from "./Screen/AddJobPage";
import EditJobPage from "./Screen/EditJobPage";

const App = () => {
  //Add a a new Job
  const addJob = async (newJob) => {
    await fetch("/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json()",
      },
      body: JSON.stringify(newJob),
    });
    return;
  };
  //delete a job
  const deleteJob = async (id) => {
    await fetch(`/api/jobs/${id}`, {
      method: "DELETE",
    });
    return;
  };
  //edit
  const updateJob = async (job) => {
    await fetch(`/api/jobs/${job.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json()",
      },
      body: JSON.stringify(job),
    });
    return;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobPage />} />
        <Route
          path="/jobs/:id"
          element={<PageJobSingle deleteJob={deleteJob} />}
          loader={jobLoader}
        />
        <Route
          path="/edit-job/:id"
          element={<EditJobPage updateJobSubmit={updateJob} />}
          loader={jobLoader}
        />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />} />
      </Route>,
    ),
  );
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
