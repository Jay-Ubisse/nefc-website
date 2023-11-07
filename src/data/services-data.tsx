import { Brain, Briefcase, ChalkboardTeacher, ChartLineUp, Code, LockLaminated, TreeStructure } from '@phosphor-icons/react';

import BusinessRepresentationImage from "../assets/img/services/business-representation.jpg"
import Image2 from "../assets/img/services/service-2.jpg"
import BasicCodingImage from "../assets/img/services/basic-coding.jpg"
import Image4 from "../assets/img/services/service-4.jpg"
import projectDevelopmentImagem from "../assets/img/services/project-development.jpg"
import AlgorithmicProgrammingImage from "../assets/img/services/algorithmics-programming.jpg"
import CyberSecurityImage from "../assets/img/services/cyber-security.jpg"
import eCreativeImage from "../assets/img/services/e-creative.jpg"

export const slideImages = [
  {
    url: projectDevelopmentImagem,
    caption: 'Projects Development',
    description: 'We understand that embarking on projects can be a complex journey but with the right team, planning, and execution success is guaranteed.  With our expertise and dedicated team, we seamlessly guide your projects from inception to completion. Our tailored solutions encompass meticulous planning, resource optimization, risk mitigation, and performance monitoring.  What sets us apart is our commitment to your success. We collaborate closely, understanding your unique goals to devise a comprehensive strategy. With industry best practices and cutting-edge tools, we optimize project outcomes, delivering on time and within budget',
    icon: <TreeStructure color='#fffffF' size={200} />
  },
  {
    url: Image2,
    caption: 'General Consulting Service',
    description: "As a trusted partner, we bring expertise and insights to help you overcome challenges and make informed decisions. Through our collaborative approach and industry insights, we provide unique solutions for strategic planning, process optimization, market research, and more. Whether you're a startup, small business, or established enterprise, our general consulting services are designed to unlock your potential. We strive to help you achieve sustainable growth, operational efficiency, and a competitive edge in the market.",
    icon: <ChartLineUp color='#fffffF' size={200} />
  },
  {
    url: AlgorithmicProgrammingImage,
    caption: 'Algorithmics Programming courses',
    description: 'We facilitate the learning of computer coding/programming for children from 6 to 17 years who are registered with Algorithmics International School of Programming. This program is available on a part-time basis and can be offered in our premises and/or at any normal school in Maputo.',
      icon: <ChalkboardTeacher color='#fffffF' size={200} />
  },
  {
    url: BasicCodingImage,
    caption: 'Basic Coding courses, e-commerce, Data management and other courses for over 18y people',
    description: 'At NEFC Projects Limitada, we offer comprehensive Learning mentoring and creation services, equipping individuals and organizations with the knowledge and solutions they need to thrive in the digital age. Our young and highly skilled mentors provide personalized learning mentorship, helping learners of all levels to master essential computer skills, programming languages, and software applications and other modern technologies. We help them to confidently navigate the digital landscape and leverage knowledge of technology to achieve their goals.',
      icon: <Code color='#fffffF' size={200} />
  },
  {
    url: CyberSecurityImage,
    caption: 'Cyber security solutions',
    description: "...",
    icon: <LockLaminated color='#fffffF' size={200} />
  },
  {
    url: Image4,
    caption: 'International business facilitation',
    description: "Unlocking the potential of local, regional and international markets can take be a very complicated process involving time and effort. At NEFC Projects Limitada, we understand the complexities and obstacles businesses face when expanding globally. That's why we're here to help you throughout the entire process.",
    icon: <Briefcase color='#fffffF' size={200} />
  },
  {
    url: eCreativeImage,
    caption: 'e-Creative solutions',
    description: "...",
    icon: <Brain color='#fffffF' size={200} />
  },
  {
    url: BusinessRepresentationImage,
    caption: 'Business representation',
    description: "Expanding your operations abroad, navigating local regulations, establishing connections, and building a solid presence can be daunting. But that’s where we step in to guide businesses to success in foreign representation. Our experienced team understands local business practices, regulations, and cultural nuances. We help you establish a strong presence by connecting you with stakeholders, facilitating negotiations, and providing valuable guidance. Our service covers a wide range of activities, including market research, partner identification, distributor network establishment, and government relations. We customize our approach to align with your specific goals and objectives, ensuring seamless integration into the local business landscape.",
    icon: <Briefcase color='#fffffF' size={200} />
  },
];