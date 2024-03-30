import jobs from "../jobs.json";
import JobList from "./JobList";
const BrowseJobs = ({ isHome = false }) => {
  const JobListings = isHome ? jobs.slice(0, 3) : jobs;
  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-center text-indigo-500 text-2xl font-bold mb-6">
          {isHome ? "Recent Jobs" : "Browse Jobs"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {JobListings.map((job) => (
            <JobList key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowseJobs;
