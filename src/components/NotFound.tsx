import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, ArrowLeft } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full text-center">
        {/* 404 Animation */}
        <div className="relative mb-8">
          <h1 className="text-[150px] sm:text-[200px] md:text-[250px] lg:text-[300px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 leading-none animate-pulse">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-20 animate-ping"></div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6 mb-12">
          <div className="flex items-center justify-center gap-2 text-gray-600">
            <Search className="w-6 h-6 animate-bounce" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
              Page Not Found
            </h2>
          </div>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Sorry, the page you are looking for doesn't exist or has been moved. 
            Please check the URL or return to the homepage.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
          <Link
            to="/"
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 w-full sm:w-auto"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <Home className="w-5 h-5 relative z-10" />
            <span className="relative z-10">Back to Home</span>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full border-2 border-black transition-all duration-300 hover:bg-black hover:text-white hover:scale-105 w-full sm:w-auto"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
            <span>Go Back</span>
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="mt-16 grid grid-cols-3 gap-4 max-w-md mx-auto px-4">
          <div className="h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full animate-pulse"></div>
          <div className="h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent rounded-full animate-pulse delay-75"></div>
          <div className="h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent rounded-full animate-pulse delay-150"></div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-gray-500 text-sm">
          <p>Error Code: 404 | Page Not Found</p>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animation-delay-4000"></div>
      </div>
    </div>
  );
};

export default NotFound;
