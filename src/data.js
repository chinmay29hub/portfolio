import {
  IoCodeWorking,
  IoLogoGithub,
  IoLogoYoutube,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoWhatsapp,
} from "react-icons/io5";
import Chinmay from "./images/about.png";
import ToDo from "./images/todo.png";
import Login from "./images/login.png";
import Nasa from "./images/nasa.png";
import Crypto from "./images/crypto.png";
import Url from "./images/url.png";
import Clips from "./images/clips.png";
import Pi from "./images/pi.png";
import Among from "./images/amongus.png";
import Draw from "./images/draw.png";
import Arch from "./images/arch.webp";
import Zsh from "./images/zsh.webp";
import Ubuntu from "./images/ubuntu.png";

export const Experience = [
  {
    id: 1,
    date: "Aug 2023 - Current",
    iconsSrc: <IoCodeWorking />,
    title: "Software Developer",
    company: "BDO",
    location: "Mumbai",
    description:
      "Experienced in building scalable APIs, optimizing workflows with distributed systems, enhancing security with custom authentication, and streamlining data processing with efficient tools.",
  },
  {
    id: 2,
    date: "Jun 2022 - Jul 2023",
    iconsSrc: <IoCodeWorking />,
    title: "Linux Content Writer",
    company: "Freelance",
    location: "Remote",
    description:
      "Authored SEO-optimized articles on Linux, open-source tools, and system administration, providing accurate and engaging technical content.",
  },
];

export const Projects = [
  {
    id: 1,
    name: "To Do App",
    imageSrc: ToDo,
    techs: "React, Express, MongoDB, NodeJs ",
    github: "https://github.com/chinmay29hub/this-fucking-CRUD-apps",
    host: "https://chinmay29hub-todo-app.netlify.app/",
  },
  {
    id: 2,
    name: "Login App",
    imageSrc: Login,
    techs:
      "React ,Tailwind CSS, JWT, MailGen, Otp, Toast, Express, NodeJs, MongoDB",
    github: "https://github.com/chinmay29hub/this-fucking-CRUD-apps",
    host: "https://chinmay29hub-login-app.netlify.app/",
  },
  {
    id: 3,
    name: "Photos By Mars Rovers",
    imageSrc: Nasa,
    techs: "React, Bootstrap, NASAi API",
    github: "https://github.com/chinmay29hub/this-fucking-react.js",
    host: "https://chinmay29hub-nasa-mars.netlify.app/",
  },
  {
    id: 4,
    name: "Crypto Tracker App",
    imageSrc: Crypto,
    techs: "React Js,  Material UI",
    github: "https://github.com/chinmay29hub/this-fucking-react.js",
    host: "https://chinmay29hub-crypto-tracker.netlify.app/",
  },
  {
    id: 5,
    name: "URL Shortener",
    imageSrc: Url,
    techs: "React Js, Chara UI, Firebase",
    github: "https://github.com/chinmay29hub/this-fucking-node.js",
    host: "https://chinmay29hub-url-shortener.onrender.com",
  },
  {
    id: 6,
    name: "Clips",
    imageSrc: Clips,
    techs: "Angular, Firebase, Tailwind, ffmpeg, rxjs",
    github: "https://github.com/chinmay29hub/this-fucking-angular",
    host: "https://chinmay29hub-clips.vercel.app/",
  },
];

export const Articles = [
  {
    id: 1,
    title: "Upgrade Your Raspberry Pi to a Powerful Web Server",
    imageSrc: Pi,
    topics: "Raspberry Pi, Web Server, Linux, Dataplicity",
    host: "https://codeforgeek.com/raspberry-pi-webserver/",
  },
  {
    id: 2,
    title: "How to download and Play Among us On Linux?",
    imageSrc: Among,
    topics: "Linux, Steam, Among Us",
    host: "https://www.linuxfordevices.com/tutorials/linux/among-us-on-linux/",
  },
  {
    id: 3,
    title: "Draw On Your Linux Screen With These Great Tools 2022",
    imageSrc: Draw,
    topics: "Linux, Tools",
    host: "https://www.linuxfordevices.com/tutorials/linux/tools-to-draw-on-linux-screen/",
  },
  {
    id: 4,
    title: "Make Your Arch Linux Terminal Awesome 2022",
    imageSrc: Arch,
    topics: "Linux, Arch Linux, Zsh, Shell",
    host: "https://www.linuxfordevices.com/tutorials/linux/make-arch-terminal-awesome/",
  },
  {
    id: 5,
    title: "How to Install Zsh + Oh My Zsh + Powerlevel10k Theme in Ubuntu",
    imageSrc: Zsh,
    topics: "Linux, Zsh, Shell, Terminal, Themes",
    host: "https://www.ubuntumint.com/install-zsh-oh-my-zsh-powerlevel10k-ubuntu/",
  },
  {
    id: 6,
    title: "How to Disable/Enable CPU Cores in Ubuntu",
    imageSrc: Ubuntu,
    topics: "Ubuntu, Linux, CPU Cores",
    host: "https://www.ubuntumint.com/disable-cpu-cores-ubuntu/",
  },
];

export const SocialLinks = [
  {
    id: 1,
    iconSrc: <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />,
    name: "GitHub",
    link: "https://github.com/chinmay29hub",
  },
  {
    id: 2,
    iconSrc: <IoLogoYoutube className="text-red-500 text-3xl cursor-pointer" />,
    name: "YouTube",
    link: "https://www.youtube.com/channel/UCfc0iDwzZi7CLKIBWBCJNWw",
  },
  {
    id: 3,
    iconSrc: (
      <IoLogoTwitter className="text-blue-500 text-3xl cursor-pointer" />
    ),
    name: "Twitter",
    link: "https://twitter.com/chinmay29hub",
  },
  {
    id: 4,
    iconSrc: (
      <IoLogoLinkedin className="text-blue-800 text-3xl cursor-pointer" />
    ),
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/chinmay-sonawane-38474019a/",
  },
  {
    id: 5,
    iconSrc: (
      <IoLogoWhatsapp className="text-green-500 text-3xl cursor-pointer" />
    ),
    name: "Whatsapp",
    link: "https://wa.me/919561725516?text=Hey%20there%2C%20Chinmay.%20I%20just%20clicked%20something%20on%20your%20Portfolio%20website.%20Let's%20build%20something%20amazing%20together!",
  },
];
