import { useState, useEffect } from "react";
import { IoMenu, IoLogoGithub } from "react-icons/io5";
import Chinmay from "./images/about.png";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Articles, Experience, Projects, SocialLinks } from "./data";
import { AnimatePresence, motion } from "framer-motion";
import Model from "./Model";

function App() {
  const [isActive, setIsActive] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("./Chinmay_Sonawane_Resume.pdf", {
        method: "GET",
        headers: {
          "Content-Type": "application/pdf",
        },
      });
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "Chinmay_Sonawane_Resume.pdf";
      link.click();
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // define a custom handler function
    // for the contextmenu event
    const handleContextMenu = (e) => {
      // prevent the right-click menu from appearing
      e.preventDefault();
    };

    // attach the event listener to
    // the document object
    document.addEventListener("contextmenu", handleContextMenu);

    // clean up the event listener when
    // the component unmounts
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  return (
    <AnimatePresence initial={false}>
      <div className="flex w-screen min-h-screen flex-col items-center justify-center relative bg-primary pb-20">
        <nav className="w-full px-6 z-50  fixed inset-x-0 top-2 flex justify-center items-center ">
          <div className=" w-full md:w-880 bg-navBar p-4 rounded-2xl flex items-center">
            <p className="text-lg text-slate-200 font-medium">
              Chinmay Sonawane
            </p>

            <div className="hidden md:flex items-center gap-6 ml-6 flex-1">
              <a
                href="#home"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
              >
                About
              </a>
              <a
                href="#journey"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
              >
                Journey
              </a>
              <a
                href="#projects"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
              >
                Projects
              </a>
              <a
                href="#articles"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
              >
                Articles
              </a>
              <a
                href="#contacts"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
              >
                Contact
              </a>
              <a
                href="./Chinmay_Sonawane_Resume.pdf"
                className="ml-auto text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in"
                target="_blank"
              >
                Download
              </a>
            </div>

            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.5 }}
              className="block md:hidden ml-auto cursor-pointer"
              onClick={() => setIsActive(!isActive)}
            >
              <IoMenu className="text-2xl text-textBase" />
            </motion.div>

            {isActive && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1.1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ delay: "0.1", type: "spring" }}
                className="p-4 w-275 bg-navBar rounded-lg fixed top-24 right-16 flex flex-col items-center justify-evenly gap-6"
              >
                <a
                  href="#home"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
                  onClick={() => setIsActive(false)}
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
                  onClick={() => setIsActive(false)}
                >
                  About
                </a>
                <a
                  href="#journey"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
                  onClick={() => setIsActive(false)}
                >
                  Journey
                </a>
                <a
                  href="#projects"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
                  onClick={() => setIsActive(false)}
                >
                  Projects
                </a>
                <a
                  href="#articles"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
                  onClick={() => setIsActive(false)}
                >
                  Articles
                </a>
                <a
                  href="#contacts"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
                  onClick={() => setIsActive(false)}
                >
                  Contact
                </a>
                <motion.a
                  whileTap={{ scale: 0.8 }}
                  href="./Chinmay_Sonawane_Resume.pdf"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in-out"
                  onClick={() => setIsActive(false)}
                  target="_blank"
                >
                  Download
                </motion.a>
              </motion.div>
            )}
          </div>
        </nav>

        <div className="h-full w-full" id="home">
          <Model />
        </div>

        {/* </div> */}
        <div className="relative bottom-10 w-full justify-center items-center flex">
          <div className="shadow-md p-4 flex items-center justify-center bg-zinc-900 rounded-3xl">
            <p className="text-textBase">Press and Drag to Orbit</p>
          </div>
        </div>
        {/* </div> */}

        {/* main section */}

        <main className="w-[80%] mt-5">
          {/* About section */}
          <section
            className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 my-24"
            id="about"
          >
            <div className="w-full h-420 flex items-center justify-center">
              <div className="w-275 h-340 relative bg-emerald-200 rounded-md">
                <img
                  src={Chinmay}
                  alt=""
                  className="w-full h-full absolute -right-4 top-4 object-cover rounded-lg drop-shadow-2xl"
                />
              </div>
            </div>
            <div className="w-full h-420 flex flex-col items-center justify-center ">
              <p className="text-lg text-textBase text-center">
                Skilled Software Developer with experience in creating and
                improving software solutions. Known for solving problems
                effectively and contributing to successful projects.
                Enthusiastic about using technology to drive improvements and
                always eager to learn and grow.
              </p>

              <motion.button
                whileTap={{ scale: 0.8 }}
                className="w-full md:w-auto relative mt-6 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800 hover:shadow-lg hover:shadow-teal-500/50 hover:dark:shadow-lg hover:dark:shadow-teal-800/80"
                onClick={handleDownload}
                disabled={isLoading}
              >
                <span className="w-full md:w-auto relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  {isLoading ? "Downloading..." : "Download"}
                </span>
              </motion.button>
            </div>
          </section>

          {/* Timeline Section */}
          <section className="w-full flex items-center justify-center" id="journey">
            <VerticalTimeline>
              {Experience &&
                Experience.map((n) => (
                  <VerticalTimelineElement
                    key={n.id}
                    className="vertical-timeline-element--work"
                    contentStyle={{
                      background: "rgb(21, 24, 31)",
                      color: "#888",
                    }}
                    contentArrowStyle={{
                      borderRight: "7px solid  rgb(21, 24, 31)",
                    }}
                    date={n.date}
                    iconStyle={{ background: "rgb(21, 24, 31)", color: "#888" }}
                    icon={n.iconsSrc}
                  >
                    <h3 className="vertical-timeline-element-title">
                      {n.title}
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      {n.company}
                    </h4>
                    <h4 className="vertical-timeline-element-subtitle">
                      {n.location}
                    </h4>
                    <p>{n.description}</p>
                  </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
          </section>

          {/* Projects section */}
          <section className="my-24" id="projects">
            {/* Title */}
            <p className="text-2xl text-gray-400 capitalize text-center mb-8">
              Projects
            </p>

            {/* Project Cards */}
            <div className="flex flex-wrap items-center justify-evenly gap-4">
              {Projects &&
                Projects.map((n, i) => (
                  <div
                    key={n.id}
                    className="cursor-pointer"
                    onClick={() => window.open(n.host, "_blank")}
                  >
                    <div className="border border-zinc-800 rounded-md p-2 min-w-[275px] md:max-w-[275px] hover:border-zinc-600 duration-100 ease-in-out">
                      <p className="text-md text-textBase font-medium uppercase hover:text-white transition duration-200">
                        {n.name.length > 25
                          ? `${n.name.slice(0, 25)}...`
                          : n.name}
                      </p>

                      <img
                        src={n.imageSrc}
                        className="w-full h-full object-cover rounded-md my-4"
                        alt=""
                      />

                      <div className="flex flex-1 items-center justify-between">
                        <p className="text-lg text-gray-300">
                          Technologies
                          <span className="block text-sm text-gray-500 hover:text-white transition duration-200">
                            {n.techs}
                          </span>
                        </p>
                        <a
                          href={n.github}
                          onClick={(e) => e.stopPropagation()}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <motion.div whileTap={{ scale: 0.5 }}>
                            <IoLogoGithub className="text-textBase text-3xl cursor-pointer hover:text-white transition duration-200" />
                          </motion.div>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </section>

          {/* Articles section */}
          <section className="my-24" id="articles">
            {/* Title */}
            <p className="text-2xl text-gray-400 capitalize text-center mb-8">
              Articles
            </p>

            {/* Article Cards */}
            <div className="flex flex-wrap items-center justify-evenly gap-4">
              {Articles &&
                Articles.map((n, i) => (
                  <div
                    key={n.id}
                    className="cursor-pointer"
                    onClick={() => window.open(n.host, "_blank")}
                  >
                    <div className="border border-zinc-800 rounded-md p-2 min-w-[275px] md:max-w-[275px] hover:border-zinc-600 duration-100 ease-in-out">
                      <p className="text-md text-textBase font-medium uppercase hover:text-white transition duration-200">
                        {n.title.length > 25
                          ? `${n.title.slice(0, 25)}...`
                          : n.title}
                      </p>

                      <img
                        src={n.imageSrc}
                        className="w-full h-full object-cover rounded-md my-4"
                        alt=""
                      />

                      <div className="flex flex-1 items-center justify-between">
                        <p className="text-lg text-gray-300">
                          Topics
                          <span className="block text-sm text-gray-500 hover:text-white transition duration-200">
                            {n.topics}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </section>

          {/* My contact section */}

          <section
            id="contacts"
            className="flex flex-col items-center justify-evenly w-full my-24"
          >
            <p className="text-2xl text-gray-400 capitalize">Follow me on</p>
            <div className="flex items-center justify-evenly w-full my-4 flex-wrap gap-4">
              {SocialLinks &&
                SocialLinks.map((n) => (
                  <motion.a
                    whileTap={{ scale: 0.8 }}
                    href={n.link}
                    key={n.id}
                    target="_blank"
                    className="w-full md:w-auto px-3 md:px-8 py-5 border border-zinc-800 rounded-2xl hover:border-zinc-600 duration-100 ease-in-out cursor-pointer flex items-center justify-center gap-3"
                  >
                    {n.iconSrc}
                    <p className="text-lg text-textBase">{n.name}</p>
                  </motion.a>
                ))}
            </div>
          </section>
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;
