import CodeEditorImage from "../assets/CodeEditor.png";
import AppleIphoneImage from "../assets/Apple-iPhone.png";
import GeminiCloneImage from "../assets/GeminiClone.png";
import OnlineFoodImage from "../assets/OnlineFood.png";

export const projectsData = [
  {
    title: "Code Editor",
    description:
      "This project is a web-based code editor built with React and Vite.",
    image: CodeEditorImage,
    tech: ["ReactJS", "Chakra UI", "Monaco Editor","Framer Motion"],
    github: "https://github.com/Decodenight/Code-Editor",
    live: "https://code-editor-nu-sage.vercel.app/",
    details: {
      detail:
        "This project is a web-based code editor built with React and Vite. It supports multiple programming languages and allows you to write, edit, and execute code directly in the browser.",
      features: [
        "Write code in JavaScript, Python, and Java.",
        "xecute code and view the output directly in the editor.",
        "Powered by Monaco Editor for a rich coding experience.",
        "Works seamlessly on different screen sizes.",
        "Styled using Chakra UI for a modern and accessible interface.",
      ],

    },
  },
  {
    title: "iPhone Website Clone",
    description: "This project is a web clone of the Apple iPhone 15 page.",
    image: AppleIphoneImage,
    tech: ["ReactJS", "Three.js", "GSAP", "Tailwind CSS"],
    github: "https://github.com/Decodenight/Apple-iPhone-15",
    live: "https://apple-iphone-15-tau.vercel.app/",
    details: {
      detail:
        "This project is a web clone of the Apple iPhone 15 page, built using React, Vite, and Three.js. It showcases various features of the iPhone 15 with animations and 3D models.",
      features: [
        "Responsive design",
        "3D model of iPhone 15 using Three.js",
        "Smooth animations with GSAP",
        "Interactive video carousel",
        "Detailed sections highlighting the features of iPhone 15",
      ],

    },
  },
  {
    title: "Gemini Clone",
    description:
      "Gemini Clone is a React-based web application that mimics the functionality of a chat interface.",
    image: GeminiCloneImage,
    tech: ["ReactJs", "Tailwind CSS", "Redux Toolkit", "API"],
    github: "https://github.com/Decodenight/Gemini-Clone",
    live: "https://gemini-clone-seven-xi.vercel.app/",
    details: {
      detail:
        "Gemini Clone is a React-based web application that mimics the functionality of a chat interface. It uses Vite for fast development and build processes, Redux for state management, and Tailwind CSS for styling.",
      features: [
        "Real-time chat interface with user and assistant roles.",
        "Sidebar for navigation and settings.",
        "Toggle between dark and light themes.",
        "Messages support markdown formatting.",
        "Uses Google Generative AI for generating responses.",
      ],

    },
  },
  {
    title: "Online Food Delivery App",
    description: "Wiggy is a modern food delivery application.",
    image: OnlineFoodImage,
    tech: ["ReactJS", "Tailwind CSS", "Redux Toolkit", ],
    github: "https://github.com/Decodenight/Food-Delivery-App",
    live: "https://food-delivery-app-gamma-woad.vercel.app/",
    details: {
      detail:
        "Wiggy is a modern food delivery application built with React and Vite. It allows users to browse various food items, add them to the cart, and place orders seamlessly.",
      features: [
        "Explore a wide range of food items categorized by meal types.",
        "Quickly find your favorite food items using the search bar.",
        "Add food items to your cart and manage quantities.",
        "Place orders and view order success messages.",
        "Fully responsive design for a seamless experience on all devices.",
      ],
    },
  },
];
