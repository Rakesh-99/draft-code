import { useSelector } from 'react-redux';
import heroImg from '../assests/homeImg.png';
import { motion } from 'framer-motion';
import GithubCard from '../components/GithubCard';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../assests/spinner/Spinner';

const Home = () => {
  const [recentBlogs, setRecentBlogs] = useState([]);
  const { theme } = useSelector((state) => state.themeSliceApp);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getAllBlogs = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`/api/blog/get-all-blogs?limit=9`);
        if (response.status === 200) {
          setRecentBlogs(response.data.blogs);
        }
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    getAllBlogs();
  }, []);

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 lg:px-20 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6 order-2 lg:order-1"
          >
            <p className="uppercase tracking-[4px] text-indigo-400 font-semibold text-sm">
              Welcome to my blog
            </p>

            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Hello, and welcome
              <br />
              to my <span className="text-indigo-500">tech corner</span> 🖥️
            </h1>

            <p className="text-sm md:text-base leading-8 text-justify max-w-xl opacity-80">
              Explore my latest projects, tutorials, and insights into web
              development. You'll find articles on web development and
              programming languages — feel free to explore, leave your
              thoughts in the comments, and like the posts you find helpful.
            </p>

            <div className="flex gap-4 mt-2">
              <Link
                to="/blogs"
                className="px-6 py-3 rounded-full bg-indigo-500 text-white font-semibold hover:bg-indigo-600 transition"
              >
                Read Blogs
              </Link>
              <Link
                to="/about"
                className={`px-6 py-3 rounded-full border font-semibold transition ${
                  theme === 'dark'
                    ? 'border-gray-600 hover:bg-zinc-800'
                    : 'border-gray-300 hover:bg-gray-100'
                }`}
              >
                About Me
              </Link>
            </div>
          </motion.div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center order-1 lg:order-2"
          >
            <img
              src={heroImg}
              alt="Welcome to the blog"
              className="w-72 md:w-[420px] drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* GitHub contributions */}
      <section className="max-w-7xl mx-auto px-6 lg:px-20 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <GithubCard />
        </motion.div>
      </section>

      {/* Recent blogs */}
      <section className="max-w-7xl mx-auto px-6 lg:px-20 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="uppercase tracking-[4px] text-indigo-400 font-semibold text-sm">
            Latest Posts
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mt-2">Recent Blogs</h2>
        </motion.div>

        {loading ? (
          <div className="flex justify-center w-full my-10">
            <Spinner />
          </div>
        ) : recentBlogs && recentBlogs.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentBlogs.map((value, index) => (
              <motion.div
                key={value._id || index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
                viewport={{ once: true }}
              >
                <Link to={`/blog/${value.slug}`}>
                  <div
                    className={`group h-full rounded-tl-2xl rounded-br-2xl border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden ${
                      theme === 'dark' ? 'border-gray-700' : 'border-gray-300'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <img
                        src={value.blogImgFile}
                        alt={value.blogTitle}
                        className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500 rounded-tl-2xl"
                      />
                    </div>

                    <div className="p-5 flex flex-col gap-3">
                      <p className="text-lg font-semibold line-clamp-2 group-hover:text-indigo-400 transition">
                        {value.blogTitle}
                      </p>
                      <span className="text-xs w-fit border px-4 py-1 rounded-full opacity-80">
                        {value.blogCategory}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center opacity-60 py-10">
            No blogs published yet — check back soon!
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;