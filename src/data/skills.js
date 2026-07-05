import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaGitAlt, FaGithub, FaDatabase,
  FaBootstrap, FaCode, FaLaptopCode, FaMobileAlt, FaPlug, FaGlobe, FaSitemap,
  FaCubes, FaSyncAlt, FaTasks, FaBug, FaVial, FaLightbulb, FaFileExcel,
  FaExchangeAlt, FaBolt,
} from 'react-icons/fa'
import {
  SiSpringboot, SiMysql, SiPostman, SiThymeleaf, SiApachemaven, SiJson,
  SiSocketdotio,
} from 'react-icons/si'

export const skillCategories = [
  {
    title: 'Languages',
    accent: 'from-violet-500 to-fuchsia-500',
    skills: [
      { name: 'Java (Collections, JDBC)', icon: FaJava, level: 90 },
      { name: 'JavaScript (ES6+)', icon: FaJs, level: 88 },
    ],
  },
  {
    title: 'Frameworks',
    accent: 'from-cyan-400 to-blue-500',
    skills: [
      { name: 'Spring Boot', icon: SiSpringboot, level: 85 },
      { name: 'React.js', icon: FaReact, level: 90 },
      { name: 'WebSockets (STOMP/SockJS)', icon: SiSocketdotio, level: 78 },
      { name: 'Thymeleaf', icon: SiThymeleaf, level: 75 },
      { name: 'Bootstrap', icon: FaBootstrap, level: 85 },
      { name: 'Maven', icon: SiApachemaven, level: 80 },
    ],
  },
  {
    title: 'Frontend',
    accent: 'from-pink-500 to-rose-500',
    skills: [
      { name: 'HTML5', icon: FaHtml5, level: 92 },
      { name: 'CSS3', icon: FaCss3Alt, level: 90 },
      { name: 'Context API', icon: FaCubes, level: 82 },
      { name: 'Responsive Web Design', icon: FaMobileAlt, level: 90 },
    ],
  },
  {
    title: 'Backend & APIs',
    accent: 'from-emerald-400 to-teal-500',
    skills: [
      { name: 'REST API Development', icon: FaExchangeAlt, level: 88 },
      { name: 'API Integration', icon: FaPlug, level: 85 },
      { name: 'JSON', icon: SiJson, level: 90 },
      { name: 'HTTP Protocols', icon: FaGlobe, level: 85 },
    ],
  },
  {
    title: 'Database',
    accent: 'from-amber-400 to-orange-500',
    skills: [
      { name: 'MySQL', icon: SiMysql, level: 86 },
      { name: 'SQL', icon: FaDatabase, level: 88 },
      { name: 'DBMS', icon: FaDatabase, level: 84 },
      { name: 'Query Optimization', icon: FaBolt, level: 78 },
      { name: 'Normalized Schema Design', icon: FaSitemap, level: 80 },
    ],
  },
  {
    title: 'Tools',
    accent: 'from-fuchsia-500 to-pink-500',
    skills: [
      { name: 'Git', icon: FaGitAlt, level: 90 },
      { name: 'GitHub', icon: FaGithub, level: 90 },
      { name: 'VS Code', icon: FaCode, level: 92 },
      { name: 'Eclipse IDE', icon: FaLaptopCode, level: 82 },
      { name: 'Postman', icon: SiPostman, level: 88 },
      { name: 'MS Excel', icon: FaFileExcel, level: 80 },
    ],
  },
  {
    title: 'Core Concepts',
    accent: 'from-sky-400 to-indigo-500',
    skills: [
      { name: 'DSA', icon: FaSitemap, level: 85 },
      { name: 'OOP', icon: FaCubes, level: 88 },
      { name: 'SDLC', icon: FaSyncAlt, level: 82 },
      { name: 'Agile/Scrum', icon: FaTasks, level: 80 },
      { name: 'Debugging', icon: FaBug, level: 86 },
      { name: 'Unit Testing', icon: FaVial, level: 78 },
      { name: 'Problem Solving', icon: FaLightbulb, level: 90 },
    ],
  },
]
