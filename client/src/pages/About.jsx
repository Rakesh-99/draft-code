import aboutImage from "../assests/About.png";
import { motion } from "framer-motion";
import GithubCalenderFunc from "../components/GithubCalender";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Redux Toolkit",
  "Tailwind CSS",
  "Framer Motion",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "Git",
  "Core Java",
];

const topics = [
  {
    title: "React & Frontend Engineering",
    desc: "Component architecture, state management, performance patterns, and real UI problems I've run into building production apps.",
  },
  {
    title: "Full Stack Builds",
    desc: "Node.js, Express, MongoDB, MySQL — how I design APIs and wire the frontend to the backend without it turning into spaghetti.",
  },
  {
    title: "Things I'm Learning",
    desc: "Docker, Redis, Kubernetes, microservices, system design — written as I learn them, not after I've mastered them.",
  },
  {
    title: "Dev Notes & Debugging",
    desc: "Bugs I've hit, mistakes I've made, and the reasoning behind fixes — the stuff that doesn't make it into polished tutorials.",
  },
];

const About = () => {
  return (
    <section className="w-full">
      {/* Hero — short intro, not a resume */}
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img
              src={aboutImage}
              alt="Rakesh Kumar Parida"
              className="w-72 md:w-96 rounded-full border-4 border-indigo-500 shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="uppercase tracking-[4px] text-indigo-400 font-semibold">
              Welcome
            </p>

            <h1 className="text-4xl md:text-6xl font-bold mt-3 leading-tight">
              Hi, I'm{" "}
              <span className="text-indigo-500">Rakesh</span> — I write
              about building for the web
            </h1>

            <p className="mt-8 leading-8 text-justify">
              I'm a Full Stack MERN Developer, and this space is where I
              write about the things I build, break, and figure out along
              the way — React patterns, backend design, debugging stories,
              and whatever I'm currently learning. Less "polished
              tutorial," more "notes from someone actually shipping code."
            </p>
          </motion.div>
        </div>
      </div>

      {/* What this blog covers — reader-facing, not resume-facing */}
      <div className="max-w-7xl mx-auto px-6 lg:px-20 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8">What You'll Find Here</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {topics.map((topic) => (
              <div
                key={topic.title}
                className="rounded-2xl border p-6 hover:border-indigo-500 transition"
              >
                <h3 className="text-xl font-semibold text-indigo-400 mb-2">
                  {topic.title}
                </h3>
                <p className="leading-7 text-justify">{topic.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Background — kept short, moved below the reader-facing content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-20 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="rounded-3xl border p-8"
        >
          <h2 className="text-2xl font-bold mb-4">A Bit About My Background</h2>
          <p className="leading-8 text-justify">
            Around 1.5+ years building full-stack applications with the
            MERN stack — REST APIs, authentication systems, responsive
            UIs, and the occasional 2am bug hunt. I write here partly to
            document what I learn, and partly because explaining
            something is the fastest way to find out if you actually
            understand it.
          </p>

          <div className="flex flex-wrap gap-4 mt-6">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-5 py-2 rounded-full hover:border-indigo-500 hover:bg-zinc-700 transition text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* GitHub */}
      <div className="max-w-7xl mx-auto px-6 lg:px-20 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="rounded-3xl p-8"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            GitHub Contributions
          </h2>
          <div className="flex justify-center overflow-x-auto">
            <GithubCalenderFunc />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;