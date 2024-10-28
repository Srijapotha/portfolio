import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight03Icon, CloseIcon, GithubIconFill } from "./icons";
import { Variants } from "framer-motion";

// Define the project data structure
interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technology: string[];
  github?: string;
  url?: string;
}

// Sample project data
const projects: Project[] = [
  {
    id: "1",
    title: "Mediquizs - Ace NEET Exam",
    description:
      "An educational startup focused on helping NEET students prepare for their exams. I am responsible for creating logical and interactive components and displaying data after fetching it from APIs. I have learned how to work with a team and handle large data sets efficiently and performantly.",
    image: "/mediquizs.vercel.app_.png",
    technology: [
      "NextJS",
      "Tailwind CSS",
      "Supabase",
      "Vercel Hosting",
      "Razorpay",
    ],
    url: "https://mediquizs.vercel.app/",
  },
  {
    id: "2",
    title: "PeSe - Cashback on Every transaction",
    description:
      "PeSe is a Fintech startup where I was tasked as a full-stack developer. I handled most of the frontend work alongside a backend developer. I spent most of my time writing CSS and React code for forms.",
    image: "/pese.in_.png",
    technology: [
      "NextJS",
      "Tailwind CSS",
      "AWS DynamoDB",
      "AWS Lambda",
      "Vercel Hosting",
      "PeSe PG",
    ],
    url: "https://pese.in/",
  },
];
const cardVariants: Variants = {
  offscreen: {
    opacity: 0,
    scale: 0.8,
  },
  onscreen: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      duration: 1,
    },
  },
};
export default function Project() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <>
      <section id="projects" className="mx-auto my-20 max-w-7xl px-4">
        <h2 className="heading relative mb-20 text-center text-4xl font-bold lg:text-5xl">
          My Projects
        </h2>

        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            delayChildren: 0.15,
            staggerChildren: 0.1,
          }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {projects.map((project, index) => {
            const projectId = index.toString();
            return (
              <motion.button
                variants={cardVariants}
                key={projectId}
                layoutId={projectId}
                onClick={() => setSelectedId(projectId)}
                className="h-max"
              >
                <motion.img
                  src={project.image}
                  loading="lazy"
                  alt={project.title}
                  className="hv-allowed h-auto w-full rounded-2xl"
                />
              </motion.button>
            );
          })}
        </motion.div>

        <AnimatePresence>
          {selectedId && (
            <motion.div
              className="fixed inset-0 z-40 flex items-center justify-center bg-black/80 p-4"
              // initial={{ opacity: 0 }}
              // animate={{ opacity: 1 }}
              // exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
            >
              <motion.div
                className="relative z-50 h-max w-full max-w-xl rounded-3xl bg-background"
                layoutId={selectedId}
              >
                <motion.img
                  src={projects[parseInt(selectedId)].image}
                  className="h-auto w-full rounded-t-3xl"
                />
                <motion.div className="p-6">
                  <motion.div className="mb-4 flex flex-wrap gap-3">
                    {projects[parseInt(selectedId)].technology.map((tech) => (
                      <motion.span className="rounded-full bg-primary/10 px-2 py-0.5 text-sm text-primary">
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                  <motion.h5 className="text-xl font-semibold text-white">
                    {projects[parseInt(selectedId)].title}
                  </motion.h5>
                  <motion.p className="mt-2 leading-relaxed text-slate-300">
                    {projects[parseInt(selectedId)].description}
                  </motion.p>
                </motion.div>
                <motion.div className="absolute left-0 right-0 top-0 flex h-max justify-end gap-2 p-3">
                  {projects[parseInt(selectedId)].github ? (
                    <motion.a
                      href={projects[parseInt(selectedId)].github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hv-allowed flex size-10 items-center justify-center rounded-full bg-background"
                    >
                      <GithubIconFill className="size-5 text-white" />
                    </motion.a>
                  ) : (
                    ""
                  )}
                  {projects[parseInt(selectedId)].url ? (
                    <motion.a
                      href={projects[parseInt(selectedId)].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hv-allowed flex size-10 items-center justify-center rounded-full bg-background"
                    >
                      <ArrowUpRight03Icon className="size-5 text-white" />
                    </motion.a>
                  ) : (
                    ""
                  )}
                </motion.div>
                <motion.button className="hv-allowed absolute -top-14 right-0 flex size-10 items-center justify-center rounded-full bg-background">
                  <CloseIcon className="size-5 text-white" />
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
}
