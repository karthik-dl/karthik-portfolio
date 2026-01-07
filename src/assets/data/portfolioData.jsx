import portfolioImg01 from "../images/WeaterApp.png";
import portfolioImg02 from "../images/Travell.png";
import portfolioImg03 from "../images/ExpenseTracker.png";
import portfolioImg04 from "../images/Leukemia.png";
// // import portfolioImg04 from "../images/portfolio-04.jpg";
// // import portfolioImg05 from "../images/portfolio-05.jpg";
// // import portfolioImg06 from "../images/portfolio-06.jpg";
// // import portfolioImg07 from "../images/portfolio-07.jpg";

// const portfolios = [
//   {
//     id: "01",
//     imgUrl: portfolioImg01,
//     category: "Web Design",
//     title: "WateherApp",
//     description:
//       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
//     technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
//     siteUrl: "#",
//   },
//   {
//     id: "02",
//     imgUrl: portfolioImg02,
//     category: "Web Design",
//     title: "Travelling Website",
//     description:
//       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
//     technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
//     siteUrl: "#",
//   },
//   {
//     id: "03",
//     imgUrl: portfolioImg03,
//     category: "Python",
//     title: "Expenses Tracker Application",
//     description:
//       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
//     technologies: ["Python"],
//     siteUrl: "#",
//   },
// ]

// export default portfolios;


export  const portfolioData = [
  {
    id: 1,
    title: "Expense Tracker",
    description: "A comprehensive desktop application for tracking personal expenses with add, delete, and refresh functionality. Features include expense categorization, amount tracking, and real-time total calculation.",
    imgUrl: portfolioImg01,
    category: "Python",
    technologies: ["Python", "Tkinter", "SQLite", "GUI Development"]
  },
  {
    id: 2,
    title: "Travel Booking Website",
    description: "A modern travel booking platform with package search, destination filtering, and date selection. Features an intuitive search interface with advanced filters for finding the perfect holiday package.",
    imgUrl: portfolioImg02,
    category: "Web Design",
    technologies: ["React", "CSS3", "Responsive Design", "UI/UX"]
  },
  {
    id: 3,
    title: "Weather Application",
    description: "Real-time weather application displaying current temperature, humidity, and wind speed for any city. Features a clean, modern interface with weather icons and detailed metrics.",
    imgUrl: portfolioImg03,
    category: "Web Design",
    technologies: ["HTML", "CSS", "JavaScript", "Weather API"]
  },
  {
    id: 4,
    title: "Leukeamia Blood Cancer Detection",
    description: "A machine learning-based application for early detection of leukemia blood cancer using image analysis and pattern recognition.",
    imgUrl: portfolioImg04,
    category: "Python",
    technologies: ["Python", "OpenCV", "TensorFlow", "Machine Learning"]
  }
];

export default portfolioData;