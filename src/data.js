import {
    IoCodeWorking,
    IoLogoGithub,
    IoLogoYoutube,
    IoLogoTwitter,
    IoLogoLinkedin,
    IoLogoWhatsapp,
  } from "react-icons/io5";
import Chinmay from "./images/about.png"
//   import img1 from "./images/thumb-fooddeliveryapp-reactjs-dec.png";
//   import img2 from "./images/thumb-fullstack-socialmedia-app-react-sanity.png";
//   import img3 from "./images/thumb-google-map-clone-nextjs-feb22.png";
//   import img4 from "./images/thumb-pinterest-clone-reactjs.png";
//   import img5 from "./images/thumb-videoblog-firebase-reactjs-feb-22.png";
//   import img6 from "./images/thumb-whatsappui-clone-nextjs.png";
  
  export const Experience = [
    {
      id: 1,
      date: "Sep 2022 - Current",
      iconsSrc: <IoCodeWorking />,
      title: "Freelancer",
      company : "",
      location: "Remote",
      description:
        "Linux, Technical Content Writing, Development",
    },
    {
      id: 2,
      date: "Jun 2022 - Sep 2022",
      iconsSrc: <IoCodeWorking />,
      title: "Linux Content Writer",
      company : "JournalDev",
      location: "Remote",
      description:
        "WordPress, Canva, Article Writing, Technical Writing, Search Engine Optimization (SEO), Creative Content Creation, Linux",
    },
    {
      id: 3,
      date: "Jun 2021 - Aug 2021",
      iconsSrc: <IoCodeWorking />,
      title: "Digital Marketing Intern",
      company : "Abner Security",
      location: "Remote",
      description:
        "Instagram, Facebook Marketing, WordPress, Canva, Article Writing, Technical Writing, Search Engine Optimization (SEO)",
    },
    {
      id: 4,
      date: "Jun 2021 - Jul 2021",
      iconsSrc: <IoCodeWorking />,
      title: "Android Application Development",
      company : "VCET",
      location: "Remote",
      description:
        "Android Development, Android Studio, Java",
    },
    {
      id: 5,
      date: "April 2021",
      iconsSrc: <IoCodeWorking />,
      title: "Brand Ambassador",
      company : "Tutedude",
      location: "Remote",
      description:
        "Digital Marketing, Social Media Marketing, Canva, Creative Content Creation",
    },
    {
      id: 6,
      date: "Mar 2021",
      iconsSrc: <IoCodeWorking />,
      title: "IoT & Computer Vision",
      company : "The Sparks Foundation",
      location: "Remote",
      description:
        "Raspberry Pi 4, Internet of Things (IoT), OpenCV, TensorFlow, Python, Linux",
    },
    {
      id: 7,
      date: "Feb 2021",
      iconsSrc: <IoCodeWorking />,
      title: "Web Developer",
      company : "The Sparks Foundation",
      location: "Remote",
      description:
        "Web Development, PHP, MySQL, Web Hosting",
    },
    {
      id: 8,
      date: "June 2021",
      iconsSrc: <IoCodeWorking />,
      title: "Python, Entrepreneurship and Soft Skills",
      company : "VCET",
      location: "Remote",
      description:
        "Python",
    },
    {
      id: 9,
      date: "June 2020",
      iconsSrc: <IoCodeWorking />,
      title: "Digital Marketing Intern",
      company : "LaughGuru",
      location: "Remote",
      description:
        " Digital Marketing, Social Media Marketing, Search Engine Optimization (SEO)",
    },
  ];
  
  export const Projects = [
    {
      id: 1,
      name: "Food Delivery UI Mockup",
      imageSrc: Chinmay,
      techs: "React Js, Redux, Material UI",
      github: "#",
    },
    {
      id: 2,
      name: "Full Stack Social Media App ",
      imageSrc: Chinmay,
      techs: "React Js, Sanity, Tailwind CSS",
      github: "#",
    },
    {
      id: 3,
      name: "Travel Advisor",
      imageSrc: Chinmay,
      techs: "React Js, Chakra UI, Google API",
      github: "#",
    },
    {
      id: 4,
      name: "Pintrest UI Clone 2.0 ",
      imageSrc: Chinmay,
      techs: "React Js,  Material UI",
      github: "#",
    },
    {
      id: 5,
      name: "Own Video Blog",
      imageSrc: Chinmay,
      techs: "React Js, Chara UI, Firebase",
      github: "#",
    },
    {
      id: 6,
      name: "Whatsapp UI Clone",
      imageSrc: Chinmay,
      techs: "NextJs, Firebase Auth",
      github: "#",
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
      id: 1,
      iconSrc: <IoLogoYoutube className="text-red-500 text-3xl cursor-pointer" />,
      name: "YouTube",
      link: "https://www.youtube.com/channel/UCfc0iDwzZi7CLKIBWBCJNWw",
    },
    {
      id: 1,
      iconSrc: (
        <IoLogoTwitter className="text-blue-500 text-3xl cursor-pointer" />
      ),
      name: "Twitter",
      link: "https://twitter.com/chinmay29hub",
    },
    {
      id: 1,
      iconSrc: (
        <IoLogoLinkedin className="text-blue-800 text-3xl cursor-pointer" />
      ),
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/chinmay-sonawane-38474019a/",
    },
    {
      id: 1,
      iconSrc: (
        <IoLogoWhatsapp className="text-green-500 text-3xl cursor-pointer" />
      ),
      name: "Whatsapp",
      link: "https://wa.me/919561725516?text=Hey%20there%2C%20Chinmay.%20I%20just%20clicked%20something%20on%20your%20Portfolio%20website.%20Let's%20build%20something%20amazing%20together!",
    },
  ];