import { Link } from 'react-router-dom';
import { paths } from '@/constants/paths';

const HomePage = () => {
  return (
    <div className="px-4 py-6 sm:px-0">
      <div className="bg-white overflow-hidden shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Welcome to Run Registration
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            This is a React TypeScript project with a well-organized structure.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Features
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>React 18 with TypeScript</li>
                <li>Tailwind CSS + SCSS</li>
                <li>React Router</li>
                <li>ESLint + Prettier</li>
                <li>CRUD Operations</li>
              </ul>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Project Structure
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Components</li>
                <li>Hooks</li>
                <li>Services</li>
                <li>Utils & Helpers</li>
                <li>Routes & Layouts</li>
              </ul>
            </div>
          </div>
          <div className="mt-6">
            <Link
              to={paths.CRUD}
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
            >
              View CRUD Page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

