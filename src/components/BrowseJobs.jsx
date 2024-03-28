import jobs from "../jobs.json";
import JobList from "./JobList";
const BrowseJobs = () => {
  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-center text-indigo-500 text-2xl font-bold mb-6">
          Recent Jobs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <JobList key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowseJobs;
