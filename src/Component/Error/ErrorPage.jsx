import { Link } from "react-router-dom";
import errorImg from "../../assets/undraw_Page_not_found_re_e9o6.png";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-cool-blue">404</h1>
        <p className="text-2xl md:text-3xl font-semibold mt-6">
          Oops! The page you're looking for doesn't exist.
        </p>
        <p className="mt-4 text-gray-600">
          It might have been removed, renamed, or did not exist in the first place.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="px-6 py-3 bg-cool-blue text-white rounded-lg text-lg shadow-md hover:bg-blue-700 transition"
          >
            Go Back Home
          </Link>
        </div>
      </div>
      <div className="mt-10">
        <img
          src={errorImg}
          alt="404 Illustration"
          className="w-full max-w-md mx-auto"
        />
      </div>
    </div>
  );
};

export default ErrorPage;
