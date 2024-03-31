import { useParams, useLoaderData } from "react-router-dom";
const PageJobSingle = () => {
  const { id } = useParams();
  const job = useLoaderData();

  return <h1>{job.title}</h1>;
};

const jobLoader = async ({ params }) => {
  const res = await fetch(`/api/jobs/${params.id}`);
  const data = await res.json();
  return data;
};

export { PageJobSingle as default, jobLoader };
