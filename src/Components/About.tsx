import BGShape from "./ProfileBG";

export default function About() {
  return (
    <>
      <section id="about" className="mx-auto max-w-7xl px-4 py-10">
        <h2 className="heading relative text-center text-5xl font-bold tracking-wider">
          About Me
        </h2>
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2">
          <div className="relative flex items-center justify-start lg:justify-center lg:p-8">
            <div className="z-10 mx-auto aspect-square w-3/6 overflow-hidden rounded-full bg-amber-300 sm:w-2/6 lg:w-3/6">
              <img
                src="pic.png"
                alt=""
                className="relative left-2 top-6 w-full object-cover"
              />
            </div>
            <BGShape className="absolute z-0 h-full w-full opacity-40" />
            {/* <img
              src="pic.png"
              alt=""
              className="mx-auto aspect-square w-4/6 bg-red-500 object-cover grayscale lg:w-1/2"
            /> */}
          </div>
          <div className="flex items-center justify-center pt-10 text-lg leading-loose tracking-wider text-white/90 lg:p-8">
            I&apos;m a Full-stack web developer with 2+ years of experience
            building websites that are easy to use and look great. I know how to
            use MERN and FARM tools, which include HTML, CSS, JavaScript, React,
            Node.js, Python, and SQL. I&apos;m also good at using AI to make
            smart and helpful websites. I can make websites that work on all
            kinds of devices and are easy for everyone to use. I&apos;m good at
            working with others, talking clearly, and solving problems. I want
            to work on exciting projects and team up with talented people to
            make new things happen in technology.
          </div>
        </div>
      </section>
    </>
  );
}
