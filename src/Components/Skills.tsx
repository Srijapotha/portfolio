import {
  BootstrapIcon,
  CSSIcon,
  HTMLIcon,
  JsIcon,
  MySQL,
  PythonIcon,
  ReactIcon,
  NodeJS,
  GitIcon,
  NextJS,
  TailwindCSS,
  AWS,
  ExpressJS,
  Django,
  PostgreSQL,
  MongoDB,
} from "./icons";
import Particles from "./magicui/particles";
import { motion } from "framer-motion";
import { Variants } from "framer-motion";
// import Marquee from "./magicui/marquee";
export default function Skills() {
  return (
    <>
      <section id="skills" className="relative bg-black/50 py-20">
        <Particles
          className="absolute inset-0"
          quantity={100}
          ease={80}
          color={"#ffffff"}
        />
        <h2 className="heading relative mb-20 text-center text-4xl font-bold tracking-wider lg:text-5xl">
          My Skills
        </h2>

        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            delayChildren: 0.1,
            staggerChildren: 0.1,
          }}
          className="relative mx-auto grid max-w-7xl grid-cols-2 gap-2 px-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
        >
          {/* <Marquee pauseOnHover className="[--duration:20s]">
            <div
              className={
                ""
              }
            >
              <HTMLIcon className="mb-2 w-24" />
              HTML
            </div>
            <div
              className={
                "relative mx-auto flex size-48 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-2xl border p-4 text-xl font-medium dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
              }
            >
              <CSSIcon className="mb-2 w-24" />
              CSS
            </div>
            <div
              className={
                "relative mx-auto flex size-48 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-2xl border p-4 text-xl font-medium dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
              }
            >
              <JsIcon className="mb-2 w-24" />
              JavaScript
            </div>
            <div
              className={
                "relative mx-auto flex size-48 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-2xl border p-4 text-xl font-medium dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
              }
            >
              <ReactIcon className="mb-2 w-24" />
              React JS
            </div>
            <div
              className={
                "relative mx-auto flex size-48 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-2xl border p-4 text-xl font-medium dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
              }
            >
              <MySQL className="mb-2 w-24" />
              MySQL
            </div>
            <div
              className={
                "relative mx-auto flex size-48 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-2xl border p-4 text-xl font-medium dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
              }
            >
              <BootstrapIcon className="mb-2 w-24" />
              Bootstrap
            </div>
            <div
              className={
                "relative mx-auto flex size-48 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-2xl border p-4 text-xl font-medium dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
              }
            >
              <PythonIcon className="mb-2 w-24" />
              Python
            </div>
            <div
              className={
                "relative mx-auto flex size-48 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-2xl border p-4 text-xl font-medium dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
              }
            >
              <NodeJS className="mb-2 w-24" />
              Node JS
            </div>
          </Marquee> */}
          {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div> */}

          <SkillBox icon={<HTMLIcon className="size-10" />} name="HTML" />
          <SkillBox icon={<CSSIcon className="size-10" />} name="CSS" />
          <SkillBox icon={<JsIcon className="size-10" />} name="JavaScript" />
          <SkillBox icon={<ReactIcon className="size-10" />} name="ReactJS" />
          <SkillBox icon={<NodeJS className="size-10" />} name="NodeJS" />
          <SkillBox icon={<MySQL className="size-10" />} name="MySQL" />
          <SkillBox
            icon={<BootstrapIcon className="size-10" />}
            name="Bootstrap"
          />
          <SkillBox icon={<PythonIcon className="size-10" />} name="Python" />
          <SkillBox icon={<GitIcon className="size-10" />} name="Git" />
          <SkillBox icon={<NextJS className="size-10" />} name="NextJS" />
          <SkillBox
            icon={<TailwindCSS className="size-10" />}
            name="TailwindCSS"
          />
          <SkillBox icon={<AWS className="size-10" />} name="AWS" />
          <SkillBox icon={<MongoDB className="size-10" />} name="MongoDB" />
          <SkillBox
            icon={<PostgreSQL className="size-10" />}
            name="PostgreSQL"
          />

          <SkillBox icon={<Django className="size-10" />} name="Django" />
          <SkillBox icon={<ExpressJS className="size-10" />} name="ExpressJS" />
        </motion.div>
      </section>
    </>
  );
}
const cardVariants: Variants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.8,
    },
  },
};
function SkillBox({ name, icon }: { name: string; icon: React.ReactElement }) {
  return (
    <>
      <motion.div
        variants={cardVariants}
        className="flex w-full flex-row items-center justify-center gap-2 overflow-hidden rounded-xl border border-gray-50/[.1] bg-gray-50/[.10] px-4 py-2.5 text-lg font-medium transition-colors hover:bg-gray-50/[.15]"
      >
        {icon}
        {name}
      </motion.div>
    </>
  );
}
