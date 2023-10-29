import { Briefcase, ChalkboardTeacher, ChartLineUp, Globe, TreeStructure } from '@phosphor-icons/react';

import Image1 from "../assets/img/services/service-1.jpg"
import Image2 from "../assets/img/services/service-2.jpg"
import Image3 from "../assets/img/services/service-3.jpg"
import Image4 from "../assets/img/services/service-4.jpg"
import Image5 from "../assets/img/services/service-5.jpg"

export const slideImages = [
  {
    url: Image1,
    caption: 'Online Learning, Tutoring and Creation',
    description: 'At NEFC Projects Limitada, we offer comprehensive Learning mentoring and creation services, equipping individuals and organizations with the knowledge and solutions they need to thrive in the digital age. Our young and highly skilled mentors provide personalized learning mentorship, helping learners of all levels to master essential computer skills, programming languages, and software applications and other modern technologies. We help them to confidently navigate the digital landscape and leverage knowledge of technology to achieve their goals.',
      icon: <ChalkboardTeacher color='#fffffF' size={200} />
  },
  {
    url: Image2,
    caption: 'General Consulting Service',
    description: "As a trusted partner, we bring expertise and insights to help you overcome challenges and make informed decisions. Through our collaborative approach and industry insights, we provide unique solutions for strategic planning, process optimization, market research, and more. Whether you're a startup, small business, or established enterprise, our general consulting services are designed to unlock your potential. We strive to help you achieve sustainable growth, operational efficiency, and a competitive edge in the market.",
    icon: <ChartLineUp color='#fffffF' size={200} />
  },
  {
    url: Image3,
    caption: 'Representation of International Partners',
    description: "We also do channel our international partners' interests in Mozambique and in the rest of SADC countries; navigating local regulations, establishing connections, and building a solid presence can be daunting. But that’s where we step in to guide businesses to success. Our experienced consultants understand local business practices, regulations, cultural nuances and are well connected within SADC region as well. We help our partners to establish a strong presence by connecting you with stakeholders, facilitating negotiations, and providing valuable guidance.",
    icon: <Globe color='#fffffF' size={200} />
  },
  {
    url: Image4,
    caption: 'International Business Facilitation',
    description: "Unlocking the potential of local, regional and international markets can take be a very complicated process involving time and effort. At NEFC Projects Limitada, we understand the complexities and obstacles businesses face when expanding globally. That's why we're here to help you throughout the entire process.",
    icon: <Briefcase color='#fffffF' size={200} />
  },
  {
    url: Image5,
    caption: 'Project Development and Management',
    description: "We understand that embarking on projects can be a complex journey but with the right team, planning, and execution success is guaranteed. With our expertise and dedicated team, we seamlessly guide your projects from inception to completion. Our tailored solutions encompass meticulous planning, resource optimization, risk mitigation, and performance monitoring.",
    icon: <TreeStructure color='#fffffF' size={200} />
  },
];