import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const RecentBlog = ({ blog }) => {
  const { theme } = useSelector((state) => state.themeSliceApp);

  if (!blog) return null;

  return (
    <Link to={`/blog/${blog.slug}`} className="group block w-80">
      <div
        className={`rounded-tl-2xl rounded-br-2xl border overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${
          theme === 'dark'
            ? 'border-gray-700 bg-zinc-900'
            : 'border-gray-200 bg-white'
        }`}
      >
        {/* Image */}
        <div className="overflow-hidden">
          <img
            src={blog.blogImgFile}
            alt={blog.blogTitle}
            className="w-80 h-48 object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-3 px-4 py-4">
          <p
            className={`text-base md:text-lg font-semibold line-clamp-2 transition-colors ${
              theme === 'dark'
                ? 'text-white group-hover:text-indigo-400'
                : 'text-zinc-900 group-hover:text-indigo-600'
            }`}
          >
            {blog.blogTitle}
          </p>

          <span
            className={`text-xs font-medium w-fit px-4 py-1 rounded-full border ${
              theme === 'dark'
                ? 'border-indigo-400/40 text-indigo-300 bg-indigo-400/10'
                : 'border-indigo-500/30 text-indigo-600 bg-indigo-50'
            }`}
          >
            {blog.blogCategory}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default RecentBlog;