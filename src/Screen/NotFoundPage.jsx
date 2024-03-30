import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";
const NotFoundPage = () => {
  return (
    <section className="flex flex-col justify-center items-center h-96">
      <FaExclamationTriangle className="text-yellow-400 mb-4 text-6xl" />
      <h1 className="font-bold text-6xl mb-4">404 Not Found</h1>
      <p className="mb-5 text-xl">This page does not exist</p>
      <Link
        to="/"
        className="text-white bg-blue-700 hover:bg-indigo-900 px-3 py-2 mt-4 rounded"
      >
        Go Back
      </Link>
    </section>
  );
};

export default NotFoundPage;
